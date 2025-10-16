
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

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js and npm
- A MongoDB URI
- A Cloudinary account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MayankT10/Synq.git

### Backend Setup:

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with your `MONGODB_URI`, `JWT_SECRET`, and `CLOUDINARY_*` keys.

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup:

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm run dev
   ```

## Team

This project was developed by:

* Soham
* Mayank
* Prassana
* Abhijith
* Om
* Saurav
