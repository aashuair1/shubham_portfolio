from pydantic import BaseModel, EmailStr, Field, model_validator

class UserSignup(BaseModel):
    full_name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    password: str = Field(min_length=8)
    confirm_password: str

    @model_validator(mode="after")
    def validate_passwords(self):
        if self.password != self.confirm_password:
            raise ValueError("Passwords do not match")
        return self


class UserLogin(BaseModel):
    email: EmailStr
    password: str
