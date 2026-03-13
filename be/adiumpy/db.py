from adiumpy.config import DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD
import psycopg2

def get_db_connection():
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            port=DB_PORT,
            dbname=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            sslmode="require"
        )
        return conn
    except Exception as e:
        print("❌ Error connecting to DB:", e)
        return None

