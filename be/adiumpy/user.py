from flask import Blueprint, request, jsonify
from uuid import uuid4
from werkzeug.security import generate_password_hash, check_password_hash
from adiumpy.db_pool import get_db_connection, release_db_connection
import psycopg2.errors
import jwt
import datetime
from adiumpy.config import JWT_SECRET

user_bp = Blueprint("user", __name__)

@user_bp.route("/create-user", methods=["POST"])
def create_user():
    data = request.get_json()
    required_fields = ["name", "email", "password"]
    if not all(field in data and data[field] for field in required_fields):
        return jsonify({"error": "Missing required fields: name, email, or password"}), 400

    name = data["name"]
    email = data["email"]
    phone = data.get("phone")
    password_hash = generate_password_hash(data["password"])

    # Campos nuevos
    profile_picture = data.get("profile_picture")
    bio = data.get("bio")
    birthdate = data.get("birthdate")
    location = data.get("location")
    language = data.get("language", "es")
    preferred_currency = data.get("preferred_currency", "CLP")
    user_type = data.get("user_type", "guest")

    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    try:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO users (
                    name, email, phone, password_hash,
                    profile_picture, bio, birthdate,
                    location, language, preferred_currency,
                    user_type
                )
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING id;
            """, (
                name, email, phone, password_hash,
                profile_picture, bio, birthdate,
                location, language, preferred_currency,
                user_type
            ))
            user_id = cur.fetchone()[0]
            conn.commit()

        return jsonify({"ok": True, "id": user_id})

    except psycopg2.errors.UniqueViolation:
        conn.rollback()
        return jsonify({"error": "Email or phone already registered"}), 409

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cur.close()
        release_db_connection(conn)
        

@user_bp.route("/login", methods=["POST"])
def login_user():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not all([email, password]):
        return jsonify({"error": "Missing email or password"}), 400

    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    try:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT id, password_hash, name, user_type FROM users WHERE email = %s
            """, (email,))
            result = cur.fetchone()

            if not result:
                return jsonify({"error": "User not found"}), 404

            user_id, password_hash, name, user_type = result
            if not check_password_hash(password_hash, password):
                return jsonify({"error": "Incorrect password"}), 401

            # Actualizar última conexión
            cur.execute("UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = %s", (user_id,))
            conn.commit()

            payload = {
                "user_id": str(user_id),
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
            }
            token = jwt.encode(payload, JWT_SECRET, algorithm="HS256")
            print("token:", token, flush=True)
            return jsonify({
                "ok": True,
                "token": token,
                "name": name,
                "user_type": user_type
            })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cur.close()
        release_db_connection(conn)        

def get_user(property_id):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500
    
    try:
        with conn.cursor() as cur:
            cur.execute("SELECT user_id FROM properties WHERE id = %s", (property_id,))
            result = cur.fetchone()
            if not result:
                return jsonify({"error": "Property not found"}), 404           
            user_id = result[0]

            cur.execute("""
                SELECT
                    id, name, host_category, email, phone,
                    profile_picture, bio, birthdate,
                    location, language, preferred_currency,
                    user_type, created_at, last_login
                FROM users
                WHERE id = %s
            """, (user_id,))
            result = cur.fetchone()
            if not result:
                return jsonify({"error": "User not found"}), 404
            
            keys = [
                "id", "name", "host_category", "email", "phone",
                "profile_picture", "bio", "birthdate",
                "location", "language", "preferred_currency",
                "user_type", "created_at", "last_login"
            ]
            return jsonify(dict(zip(keys, result)))

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cur.close()
        release_db_connection(conn)

