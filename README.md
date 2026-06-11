# ChatSphere 💬

A full-stack real-time chat application built with the MERN stack, enabling secure and seamless one-to-one communication.

##  Features

* 🔐 Authentication & Authorization using JWT
* 💬 Real-time messaging with Socket.io
* 🟢 Online user status tracking
*  Global state management with Zustand
*  Modern and responsive UI with Tailwind CSS & DaisyUI
*  Client-side and server-side error handling
*  Media upload and storage support 
*  Production-ready deployment

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* DaisyUI
* Zustand

### Backend

* Node.js
* Express.js
* MongoDB
* Socket.io
* JWT Authentication


## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
cd chatsphere
```

### Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the backend directory and add:

```env
MONGODB_URI=
JWT_SECRET=
PORT=
```

### Run the application

```bash
# Backend
npm run dev

# Frontend
npm run dev
```

##  Key Learnings

* Implementing real-time communication using WebSockets
* Managing authentication and protected routes with JWT
* Handling global state efficiently using Zustand
* Designing responsive user interfaces with Tailwind CSS

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

## 📜 License

This project is licensed under the MIT License.
