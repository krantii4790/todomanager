**BeyondChats Full Stack Assignment**

📌 Overview

This project is a full-stack task management system built as part of the BeyondChats technical assignment.
It demonstrates backend API design, background task processing, and frontend integration using modern technologies and clean architecture principles.

The goal of this assignment is to showcase system design thinking, separation of concerns, and real-world full-stack development practices.

---

🛠 **Tech Stack**

**Backend**

Laravel 12

SQLite database

RESTful APIs

Service & Repository pattern

Background Worker

Node.js

Axios

Background polling & task processing

**Frontend**

React (Vite)

Axios

Lightweight task management UI for API-driven workflows

---

✨ **Features**

Create, list, update, and delete tasks

JSON payload support

Task status management (pending, completed)

Background worker to process pending tasks

Fully decoupled frontend, backend, and worker

Clean, scalable, and production-oriented architecture

---

📂 **Project Structure**
```
beyondchats-fullstack-assignment/
│
├── backend-laravel/        # Laravel API
├── frontend-react/         # React frontend
├── worker-node/            # Node.js background worker
├── screenshots/            # UI & worker screenshots
│   ├── frontend-tasks.png
│   └── worker-processing.png
└── README.md
```
---

🔗 **API Endpoints**

Method	        Endpoint	             Description

GET	           /api/tasks	            Get all tasks

POST	         /api/tasks           	Create a new task

PATCH	         /api/tasks/{id}	      Update task status

DELETE	       /api/tasks/{id}	      Delete a task

---

**Sample POST Request**
```
{
  "title": "Service Layer Task",
  "payload": {
    "source": "beyondchats"
  }
}
```
---

⚙️ **Node.js Worker**

The Node.js worker is responsible for **background task processing.**

**What it does**

1) Periodically fetches pending tasks

2) Simulates processing

3) Marks tasks as completed

**Run Worker**

```
cd worker-node
npm install
node worker.js
```

---

🖥 **Frontend Functionality**

1) View task list

2) Add new tasks

3) Delete tasks

4) Live sync with backend API

---

**Run Frontend**

```
cd frontend-react
npm install
npm run dev
```

---

🚀 **Backend Setup**

```
cd backend-laravel
composer install
php artisan migrate
php artisan serve
```

---

🧠 Architecture Overview
<details> <summary>🧩 Architecture Diagram</summary>
flowchart LR
    A[React App (Frontend)]
    B[Laravel API (Backend)]
    C[(SQLite Database)]
    D[Node Worker (Automation)]

    A -->|HTTP API| B
    B -->|Read / Write| C
    D -->|Poll Tasks| B
    B -->|Update Status| D

</details>

Design principle:
Frontend handles UI, backend handles business logic, worker handles background processing.

---

🧪 **Testing**

* APIs tested using curl with real request/response validation

* Frontend tested via browser

* Worker tested via Node CLI

---

## 🖥 Frontend Demo

### Task Manager UI

The frontend allows users to:

- Create tasks

- View all tasks

- Delete tasks

- Automatically process tasks via Node worker



### Worker Processed Tasks
Tasks are automatically picked up by the Node.js worker and marked as completed.

<img width="1920" height="1080" alt="frontend-tasks" src="https://github.com/user-attachments/assets/4809264e-08fa-4cb1-ba89-05567f244862" />

<img width="1920" height="1080" alt="worker-processing" src="https://github.com/user-attachments/assets/36ce8920-16d1-49b2-82e8-3c8163a40a08" />


---

📌 **Key Highlights**

* Clean separation of concerns

* Service & Repository pattern in Laravel

* Background processing using Node.js

* Real-world full-stack architecture

* Production-ready code structure

---

👤 **Author**

Krantikumar Dilip Patil
