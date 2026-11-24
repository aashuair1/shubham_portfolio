from sqlalchemy.orm import Session

from app.repositories.user_repository import UserRepository


class AuthService:

    def __init__(self, db: Session):
        self.user_repository = UserRepository(db)

    def signup(self, username: str, email: str, password: str):
        # Check if the user already exists
        existing_user = self.user_repository.get_by_email(email)
        if existing_user:
            raise ValueError("User with this email already exists.")

        user_data = {
            "full_name": username,
            "email": email,
            "hashed_password": password 
         } # In a real application, make sure to hash the password before storing it
        new_user = self.user_repository.create_user(user_data)
        return new_user

    def login(self, email: str, password: str):
        # Check if the user exists
        user = self.user_repository.get_by_email(email)
        if not user:
            raise ValueError("User with this email does not exist.")

        # Verify the password (this is a placeholder, implement proper password hashing and verification)
        if user.hashed_password != password:
            raise ValueError("Incorrect password.")

        return user

    def get_user(self, user_id: int):
        # Retrieve user by ID
        user = self.user_repository.get_by_id(user_id)
        if not user:
            raise ValueError("User not found.")
        return user
    