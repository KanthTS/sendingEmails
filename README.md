# sendingEmails
using MERN stack sending emails from one to another

# 📧 MERN Stack Email Sender

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to send emails through a simple frontend form. The backend uses **NodeMailer** to handle email sending via SMTP (e.g., Gmail).

## 🚀 Features

- Send emails with name, subject, and message
- React frontend form with validation
- Express backend API to send emails
- Nodemailer integration with SMTP
- Environment variable configuration for sensitive data
- CORS enabled for frontend-backend communication

---

## 🛠️ Tech Stack

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js, Nodemailer
- **Database**: MongoDB (optional, can store email history)
- **Others**: dotenv, body-parser, cors

---

## 📁 Project Structure

mern-email-sender/ │ ├── client/ # React frontend │ └── src/ │ ├── components/ │ ├── App.js │ └── index.js │ ├── server/ # Node + Express backend │ ├── routes/ │ ├── controllers/ │ ├── .env │ ├── server.js │ └── package.json │ └── README.md
