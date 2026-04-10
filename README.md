# 📝 To-Do List App (MERN Stack)

🚀 **Live Demo:** [https://your-app-name.onrender.com](https://to-do-list-8-a63d.onrender.com)

---

## 📌 Description

This is a full-stack To-Do List application built using the MERN stack.
Users can add, update, and delete tasks with real-time database storage.

---

## ✨ Features

* ➕ Add new tasks
* 📝 Update existing tasks
* ❌ Delete tasks
* 📋 View all todos
* 🌐 Fully responsive UI

---

## 🛠 Tech Stack

### Frontend

* React
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Deployment

* Render

---

## 📁 Project Structure

```
TO DO list/
│
├── backend/
│   ├── index.js
│   ├── routes/
│   ├── config/
│
├── frontend/
│   ├── src/
│   ├── public/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/SakshiChavan12/To-Do-List.git
cd To-Do-List
```

---

### 2️⃣ Install backend dependencies

```
cd backend
npm install
```

---

### 3️⃣ Install frontend dependencies

```
cd ../frontend
npm install
```

---

### 4️⃣ Setup environment variables

Create a `.env` file inside **backend** folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 5️⃣ Run the app

#### Start backend

```
cd backend
npm run dev
```

#### Start frontend

```
cd frontend
npm run dev
```

---

## 🌍 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/todos     | Get all todos   |
| POST   | /api/todos     | Create new todo |
| PUT    | /api/todos/:id | Update todo     |
| DELETE | /api/todos/:id | Delete todo     |

---

