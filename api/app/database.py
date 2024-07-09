import os
import psycopg2
from flask import g
from dotenv import load_dotenv

load_dotenv()

DATABASE_CONFIG = {
    'user':os.getenv('DB_USERNAME'),
    'password':os.getenv('DB_PASSWORD'),
    'host':os.getenv('DB_HOST'),
    'database':os.getenv('DB_NAME'),
    'port':os.getenv('DB_PORT', 5432)
    }

def get_db():
    if 'db' not in g:
        g.db = psycopg2.connect(**DATABASE_CONFIG)
    return g.db

def close_db(e=None):
    db = g.pop('db', None)
    if db is not None:
        db.close()

def init_app(app):
    app.teardown_appcontext(close_db)

def test_connection():
    conn = psycopg2.connect(**DATABASE_CONFIG)
    cur = conn.cursor()
    conn.commit()
    cur.close()
    conn.close()

def create_table():
    conn = psycopg2.connect(**DATABASE_CONFIG)
    cur = conn.cursor()
    cur.execute(
        """
            CREATE TABLE IF NOT EXISTS appointment (
                id SERIAL PRIMARY KEY,
                date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                service VARCHAR(100) NOT NULL,
                reserved_by VARCHAR(100) NOT NULL,
                active BOOLEAN NOT NULL DEFAULT TRUE
            );
        """
    )
    conn.commit()
    cur.close()
    conn.close()