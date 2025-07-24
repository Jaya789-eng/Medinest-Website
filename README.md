# 🏥 Medinest E-Commerce Website

Medinest is a full-stack **E-Commerce Web Application** designed for selling and purchasing medicines and healthcare products. Built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**, it supports both **customer** and **admin** interfaces with secure authentication, product management, and order processing features.

## 🌐 Live Demo

🔗 [Medinest Live](https://medinest-z0ol.onrender.com) 

---

## ⚙️ Tech Stack

### Frontend:
- React.js
- Redux Toolkit
- Tailwind CSS / Bootstrap
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Razorpay / Stripe for Payments

---


## 📁 Folder Structure

Medinest/
├── client/ # React Frontend
│ ├── public/
│ └── src/
│ ├── assets/ # Images, logos
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── redux/ # Redux store, actions
│ ├── App.js
│ └── index.js
├── server/ # Express Backend
│ ├── controllers/ # Route controllers
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── middleware/ # Auth, error handling
│ ├── .env
│ └── server.js
├── .gitignore
├── package.json
└── README.md
---

## 🔑 Features

### 🛒 User Side

- 🔍 Browse and search for medicines  
- 🛒 Add items to cart and proceed to checkout  
- 🔐 Register/Login with **JWT authentication**  
- 📦 View order history  
- 📱 Fully responsive user interface  

### 🛠️ Admin Panel

- ➕ Add / ✏️ Edit / ❌ Delete products  
- 👥 Manage user roles (Admin/User)  
- 📋 View and manage all orders  
- ☁️ Upload product images using **Cloudinary**  

---

Here’s a clean and complete **README file section** with a **separate "Installation" section** for your Medinest website (built with MERN stack and admin panel):

---

## 💻 Installation Guide

Follow these steps to set up and run the Medinest E-Commerce project on your local machine.

---

### 📂 1. Clone the Repository

```bash
git clone <repository-url>
cd medinest-website
```

---

### 📦 2. Install Dependencies

```bash
# Install backend dependencies
cd server
npm install

# Install frontend (client) dependencies
cd ../client
npm install

# Install admin panel dependencies
cd ../admin-panel
npm install
```

---

### ⚙️ 3. Configure Environment Variables

Create a `.env` file in the `/server` folder and add the following content:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

> 📝 Replace `your_mongo_connection_string` and `your_jwt_secret` with your actual credentials.

---

### 🚀 4. Run the Application

In separate terminals or using a process manager:

```bash
# Start the backend server
cd server
npm start
```

```bash
# Start the frontend client
cd client
npm start
```

```bash
# Start the admin panel
cd admin-panel
npm start
```

---
###🧩 Future Enhancements
Add real-time chat between users and pharmacists

Implement product subscription and reminders

Multi-language support

AI-based medicine recommendation system
---

###🙋‍♂️ Author
Jaya – GitHub Profile
 ---
###📝 License
This project is licensed under the MIT License.


