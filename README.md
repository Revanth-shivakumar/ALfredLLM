# MERN Stack Notes Management App

## Introduction

Welcome to the MERN Stack Notes Management App! This application offers a complete solution for managing your notes, built using the MERN stack—MongoDB, Express.js, React, and Node.js. It allows users to easily create, view, update, and delete notes, while providing a responsive design that works seamlessly across both desktop and mobile devices.


## Demo 

https://github.com/user-attachments/assets/c2a07197-ce4e-4f00-b0b6-97d636cf8256


## Main Features

- **User Authentication**: Secure user registration and login for personalized access.
- **CRUD Operations**: Effortlessly create, read, update, and delete notes.
- **Search Functionality**: Quickly search and find notes using keywords.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-Time Interface**: Instant updates and smooth interaction powered by React.

## Technology Stack

- **Frontend**: React, React Router, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Handled via JSON Web Tokens (JWT)

## Setup Instructions

### Prerequisites

Before starting, ensure that you have Node.js, npm, and a MongoDB account set up.

### Backend Setup

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Configure the environment variables by creating a `.env` file in the backend directory:
    ```plaintext
    ACCESS_TOKEN_SECRET= 
    MONGO_URL= 
    ```
4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Move to the frontend folder:
    ```bash
    cd frontend
    ```
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Set up the environment variable in a `.env` file:
    ```plaintext
    VITE_BASE_URL= 
    ```
4. Start the frontend server:
    ```bash
    npm run dev
    ```

Once completed, the app will be running at `http://localhost:8000`.

## How to Use

- **Sign Up/Log In**: Create a new account or log in to an existing one.
- **Create Notes**: Add a new note by providing a title and details.
- **View Notes**: Browse your notes collection directly in the dashboard.
- **Edit Notes**: Update the content of any existing note.
- **Delete Notes**: Remove notes directly from the dashboard.
- **Search Notes**: Quickly locate specific notes using the search feature.
