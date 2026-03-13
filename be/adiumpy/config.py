import os
from dotenv import load_dotenv
from pathlib import Path

# Cargar una vez el .env desde raíz
env_path = Path(__file__).parent.parent / "3gpp.env"
load_dotenv(dotenv_path=env_path)

# Acceso centralizado a las variables
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
ES_HOST = os.getenv("ES_HOST")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
GCS_BUCKET = os.getenv("GCS_BUCKET")
JWT_SECRET = os.getenv("JWT_SECRET")
ACCU_API_KEY = os.getenv("ACCU_API_KEY")
ELASTIC_CLOUD_URL = os.getenv("ELASTIC_CLOUD_URL")
ELASTIC_API_KEY = os.getenv("ELASTIC_API_KEY")


