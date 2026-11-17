from database.database import engine
from sqlalchemy import text

def test_database_connection():
    # Test if the database engine is created successfully
    assert engine is not None, "Database engine is not created"

    # Test if the database connection can be established
    try:
        with engine.connect() as connection:
            result = connection.execute(text("SELECT 1"))
            assert result.scalar() == 1, "Database connection test failed"
    except Exception as e:
        assert False, f"Database connection test raised an exception: {e}"