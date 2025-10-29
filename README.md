# Synq - Real-Time Chat Application

Synq is a full-stack, real-time chat web application designed for secure and user-friendly communication. This prototype features a modern tech stack with a modular architecture, including user authentication, profile management with image uploads, and a RESTful API for messaging.

## Key Features

- Secure user authentication with JWTs in httpOnly cookies.
- Profile management with Cloudinary for image uploads.
- Customizable UI with a persistent theme selector.
- RESTful API built with Express.js for all data operations.
- Fully responsive design for desktop and mobile devices.

## Technology Stack

- **Frontend**: React, Vite, Tailwind CSS, DaisyUI, Zustand, Axios  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, Cloudinary  

---

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Cloudinary account** (for image uploads)

---

## Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend


2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file inside the `backend` directory and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5001
   JWT_SECRET=mysecretkey
   NODE_ENV=development

   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Run the backend server:

   ```bash
   npm start
   ```

   or for development with auto-restart (if nodemon is installed):

   ```bash
   npm run dev
   ```

5. The backend should now be running on:

   ```
   http://localhost:5001
   ```

---

## Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

4. The app will be available at:

   ```
   http://localhost:5173
   ```




## Team

This project was developed by:

* Soham
* Mayank
* Prassana
* Abhijith
* Om
* Saurav



