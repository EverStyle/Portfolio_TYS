from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

# Configure CORS settings
origins = [
    "http://localhost:5173",  # Replace with your frontend's domain
    # Add more origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

portfolio_data = {
    "name": "Your Name",
    "bio": "A brief description about yourself.",
    "skills": ["Skill 1", "Skill 2", "Skill 3"],
    "projects": [
        {"title": "Project 1", "description": "Description of project 1."},
        {"title": "Project 2", "description": "Description of project 2."},
    ],
}

@app.get("/")
def read_root():
    return {"message": "Welcome to my portfolio backend!"}

@app.get("/about")
def get_about():
    return portfolio_data["bio"]

@app.get("/skills")
def get_skills():
    return portfolio_data["skills"]

@app.get("/projects")
def get_projects():
    return portfolio_data["projects"]