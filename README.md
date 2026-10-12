# MS Cart – Mini E-Commerce Website

MS Cart is a full-stack e-commerce web application built using React, Node.js, Express.js, and MongoDB. It allows users to browse products, view product details, search for products, and manage their shopping cart.

## Features

* Browse the latest products
* View product details, prices, and ratings
* Search for products
* Browse products by category
* Add products to the shopping cart
* User authentication and account management
* Backend API integration with MongoDB

*Features listed above should match the functionality implemented in the project.*

## Tech Stack

**Frontend**

* React.js
* JavaScript
* HTML5 and CSS3
* Bootstrap

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

## Project Structure

```text
Mini-Ecommerce/
├── frontend/
│   ├── public/
│   │   └── images/
│   │       └── products/
│   ├── src/
│   ├── package.json
│   └── .gitignore
├── backend/
│   ├── config/
│   │   └── config.env
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
├── .gitignore
└── README.md
```

*The folder names above are representative; adjust them if your actual project structure differs.*

## Getting Started

### Prerequisites

Install the following before running the project:

* Node.js and npm
* MongoDB Atlas account or a local MongoDB instance
* Git

### 1. Clone the repository

```bash
git clone https://github.com/madhusrik10/Mini-Ecommerce.git
cd Mini-Ecommerce
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Configure the backend

Open a separate terminal and navigate to the backend:

```bash
cd backend
npm install
```

Create `backend/config/config.env` and add your own configuration:

```env
PORT=8000
NODE_ENV=development
DB_URL=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string. Configure the database user and network access in MongoDB Atlas if you use Atlas.

**Security:** Never commit your actual database password, API keys, or other secrets to GitHub.

### 4. Start the backend

From the `backend` directory, run:

```bash
npm start
```

The backend should start on port 8000 if that matches your configuration and application code.

### 5. Start the frontend

In another terminal:

```bash
cd frontend
npm start
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:3000
```

Keep both frontend and backend terminals running while testing the application.

## Product Images

Product images are referenced using paths such as:

```text
/images/products/1.jpg
```

Place the corresponding image files inside `frontend/public/images/products/`. Ensure the image paths stored in the database match the files available in the frontend's public folder.

## Deployment

* **Frontend:** Deploy the `frontend` directory to Vercel.
* **Backend:** Deploy the `backend` directory to a Node.js hosting service.
* **Database:** Use MongoDB Atlas or another appropriately configured MongoDB instance.
* Configure the deployed frontend to use the deployed backend API URL.

Set environment variables in the hosting provider's dashboard. Do not expose database credentials in frontend environment variables.

## Author

**Madhusri M K**

GitHub: https://github.com/madhusrik10

## License

This project is intended for learning and portfolio demonstration. Add a license file if you choose to distribute it under a specific open-source license.
