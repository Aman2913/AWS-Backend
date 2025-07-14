# SyncBit - Backend
This is the backend part of the SyncBit project, built with Node.js, Express, MongoDB, and deployed on AWS EC2.

# 🛠 Tech Stack
🖥️ Node.js (Express)

📦 MongoDB with Mongoose

🔐 JWT for Authentication

🔄 Socket.io for real-time features

🌍 Hosted on AWS EC2

# 📁 Folder Structure
backend/
├── controllers/          # Business logic for User, Repo, Issue
├── models/               # Mongoose schemas
├── routes/               # API routing
│   ├── user.router.js
│   ├── repo.router.js
│   └── issue.router.js
├── .env                  # Environment variables
├── index.js              # Entry point for backend
├── package.json
└── README.md

# 🚀 Features
🔐 User authentication (signup, login with JWT)

📁 Repository creation, view, star

🧑‍🤝‍🧑 Follow users

📊 Heatmap contributions support (via socket)

🐛 Issues tracking per repository


## 📸 Screenshots

### 🖥️ EC2 Instance 
![Login Page](https://raw.githubusercontent.com/Aman2913/AWS-Backend/main/models/5.jpg)

### 🪣 S3 Bucket
![Login Page](https://raw.githubusercontent.com/Aman2913/AWS-Backend/main/models/7.jpg)

### 👤 IAM Roles & Permissions
![Login Page](https://raw.githubusercontent.com/Aman2913/AWS-Backend/main/models/8.jpg)

### 🗂️ Backend File Structure
![Login Page](https://raw.githubusercontent.com/Aman2913/AWS-Backend/main/models/9.jpg)


# ▶️ How to Run
git clone https://github.com/Aman2913/AWS-Backend.git
cd AWS-Backend
npm install
node index.js start

# ⚙️ Sample API Endpoints
| Method  | Endpoint                  | Description            |
|-------- |---------------------------|------------------------|
| POST    | `/signup`                 | Register a user        |
| POST    | `/login`                  | Login and get token    |
| GET     | `/userProfile/:userId`    | Get user profile       |
| GET     | `/repo/user/:userId`      | Get user repositories  |
| GET     | `/repo/all`               | Get all repositories   |
| POST    | `/repo/create`            | Create a new repository|
| POST    | `/issue/create`           | Create a new issue     |


# 🧑‍💻 Author : Aman Kumar Verma
📧 amanverma00199900@gmail.com
🔗 GitHub - Aman2913
