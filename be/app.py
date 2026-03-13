import openai
from flask import Flask
from dotenv import load_dotenv
from pathlib import Path
import pytz
from elasticsearch import Elasticsearch

from adiumpy.db_pool import get_db_connection, release_db_connection
from adiumpy.config import OPENAI_API_KEY
from adiumpy.config import ES_HOST, ELASTIC_CLOUD_URL, ELASTIC_API_KEY
from adiumpy.user import user_bp
from ingest import ingest_bp
from adiumpy.ts_3gpp_chat import adium_chat_bp
from adiumpy.auth import require_auth

from flask_cors import CORS

env_path = Path(__file__).parent / "3gpp.env"
es = Elasticsearch(
    ELASTIC_CLOUD_URL,
    api_key=ELASTIC_API_KEY
)

INDEX_NAME = "3gpp_ts_embeddings"
EMBED_DIMS = 1536          # text-embedding-3-large
load_dotenv(dotenv_path=env_path)

openai.api_key = OPENAI_API_KEY

app = Flask(__name__)
app.register_blueprint(adium_chat_bp)
app.register_blueprint(user_bp)
app.register_blueprint(ingest_bp)
#CORS(app)
CORS(app, origins="*")
#CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def index():
    return "3GPP DEMO BE Activo"

def init_db_users():
    conn = get_db_connection()
    if not conn:
        print("❌ No se pudo conectar a la BD para inicializar.")
        return
    try:
        with conn:
            with conn.cursor() as cur:

                # ENUMS primero, con IF NOT EXISTS usando DO $$
                cur.execute("""
                CREATE TABLE IF NOT EXISTS users (
                    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                    name TEXT NOT NULL,
                    email TEXT UNIQUE NOT NULL,
                    phone TEXT UNIQUE,
                    password_hash TEXT NOT NULL,

                    profile_picture TEXT,               -- URL a la imagen
                    bio TEXT,                           -- Descripción del usuario
                    birthdate DATE,                     -- Para calcular edad

                    verified_email BOOLEAN DEFAULT FALSE,
                    verified_phone BOOLEAN DEFAULT FALSE,
                    gov_id_verified BOOLEAN DEFAULT FALSE,  -- Verificación de identidad

                    is_host BOOLEAN DEFAULT FALSE,      -- Si tiene alojamientos publicados
                    user_type TEXT DEFAULT 'guest',     -- 'guest', 'host', 'admin', etc.
                    host_category TEXT DEFAULT 'Cippry', -- Categoría de anfitrión (ej: Local Experto, Eco-Friendly, etc.)
                            
                    rating FLOAT DEFAULT 0.0,           -- Promedio de reseñas
                    number_of_reviews INTEGER DEFAULT 0,

                    location TEXT,                      -- Ubicación base del usuario
                    language TEXT DEFAULT 'es',         -- Idioma preferido
                    preferred_currency TEXT DEFAULT 'CLP',

                    accepts_terms BOOLEAN DEFAULT FALSE,
                    email_notifications_enabled BOOLEAN DEFAULT TRUE,

                    referral_code TEXT,                 -- Código de referido si aplica

                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    last_login TIMESTAMP
                );
                                    
                """)

    except Exception as e:
        print(f"❌ Error al inicializar la base de datos de usuarios: {e}")
    finally:
        release_db_connection(conn)

# ============ 1. CREAR ÍNDICE ES8 ============

def init_3gpp_index():
    if es.indices.exists(index=INDEX_NAME):
        print(f"Índice '{INDEX_NAME}' ya existe.")
        return

    body = {
        "mappings": {
            "properties": {
                "ts_number":       { "type": "keyword" },
                "ts_title":        { "type": "keyword" },
                "release":         { "type": "keyword" },
                "version":         { "type": "keyword" },

                "clause":          { "type": "keyword" },
                "section_title":   { "type": "text" },
                "page":            { "type": "integer" },
                "chunk_id":        { "type": "keyword" },
                "chunk_order":     { "type": "integer" },

                "content":         { "type": "text" },

                "content_vector": {
                    "type": "dense_vector",
                    "dims": EMBED_DIMS,
                    "index": True,
                    "similarity": "cosine"
                },

                "source_file":     { "type": "keyword" },
                "source_url":      { "type": "keyword" },

                "created_at":      { "type": "date" },
                "updated_at":      { "type": "date" }
            }
        }
    }

    es.indices.create(index=INDEX_NAME, body=body)
    print(f"✅ Índice '{INDEX_NAME}' creado en ES8.")


if __name__ == '__main__':
    timezone = pytz.timezone('America/Santiago')  # Por si luego usas datetime con zona horaria
    init_db_users()
    print("✅ Base de datos de usuarios inicializada.")
    init_3gpp_index()
    print("✅ Índice de 3GPP inicializado.")
    app.run(host='0.0.0.0', port=5002)

