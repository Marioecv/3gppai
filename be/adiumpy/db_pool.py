# cipprypy/db_pool.py
from psycopg2 import pool
from adiumpy.config import DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD

try:
    db_pool = pool.SimpleConnectionPool(
        minconn=1,
        maxconn=10,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT,
        database=DB_NAME,
        sslmode="require"
    )
except Exception as e:
    print("❌ Failed to initialize DB pool:", e)
    db_pool = None

def get_db_connection():
    if db_pool:
        return db_pool.getconn()
    return None

def release_db_connection(conn):
    if db_pool and conn:
        db_pool.putconn(conn)