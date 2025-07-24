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
- Browse and search medicines
- Add to cart and checkout
- Register/Login with JWT authentication
- View order history
- Responsive UI

### 🛠️ Admin Panel
- Add/Edit/Delete products
- Manage user roles
- View and manage orders
- Upload product images to Cloudinary

---

## 💻 Installation

###1 Clone the repository

```bash
git clone <repository url>
cd medinest-website

2. Install Dependencies
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Install admin-panel dependencies
cd ../admin-panel
npm install

3. Configure Environment Variables
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

4. Run the Application
# Start the backend server
cd server
npm start

# Start the frontend client
cd ../client
npm start

# Start the admin panel
cd ../admin-panel
npm start

---
🧩 Future Enhancements
Add real-time chat between users and pharmacists

Implement product subscription and reminders

Multi-language support

AI-based medicine recommendation system
---

🙋‍♂️ Author
Jaya – GitHub Profile
 ---
📝 License
This project is licensed under the MIT License.


