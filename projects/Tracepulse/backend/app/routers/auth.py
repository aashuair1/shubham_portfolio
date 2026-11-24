from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.services.auth_services import AuthService
from app.schemas.user import UserSignup, UserLogin
from app.core.token import create_access_token
from app.core.dependencies import get_current_user

router = APIRouter()
def get_auth_service(db: Session = Depends(get_db)):
    return AuthService(db)


@router.post("/signup", status_code=status.HTTP_201_CREATED)
def signup(user_data: UserSignup,auth_service: AuthService = Depends(get_auth_service)):
   
    try:
        user = auth_service.signup(
            user_data.full_name,
            user_data.email,
            user_data.password
        )

        return {
            "message": "User signed up successfully",
            "user": {
                "id": str(user.id),
                "full_name": user.full_name,
                "email": user.email
            }
        }

    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )

@router.post("/login")
def login(user_data: UserLogin, auth_service: AuthService = Depends(get_auth_service)):
    user = auth_service.login(
        user_data.email,
        user_data.password
    )

    access_token = create_access_token(
        {"sub": str(user.id)}
    )

    return {
        "message": "User logged in successfully",
        "access_token": access_token,
        "token_type": "bearer"
    }


@router.get("/me")
def get_my_profile(
    user = Depends(get_current_user)
):
    return {
        "id": str(user.id),
        "full_name": user.full_name,
        "email": user.email
    }
