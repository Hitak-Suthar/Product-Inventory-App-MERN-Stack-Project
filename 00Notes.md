# Week 1 

##  Session Agenda (1–1.5 Hours)

* Intro to Fullstack & MERN
* Node.js basics
* Express server setup
* MongoDB + Mongoose connection
* CRUD API (Products API example)
* Testing using Postman

---

##  Concepts

### 1. What is MERN?

* MongoDB → Database
<!-- 
  1, A NoSQl database that stores data in JSON Like  Documents
  2. Flexible, Scalable, fast, and Widely used in Modern Applications.

 -->


* Express → Backend framework

<!-- 
  1. A lightweight web Framework for NodeJs
  2, It Helps Build APIs and Backend logic Easily
 -->


* React → Frontend library

<!-- 
  1. A javaScript Library for building fast , interactive user Interface (Single Page Application).
  2. Component based Structure - Reuable UI elements  

 -->

* Node.js → JavaScript runtime


<!-- 
  1. It Allows JavaScript to run on the server (Backend)\
  2. Handles server logic, APIs, Authentication etc.

 -->

### 2. Node.js Essentials

* npm, package.json
<!-- 
  1. Node Package manager is used to install external libraries or Package
  2. package.json - its is like project blueprint

 -->



* CommonJS modules
* Creating servers

### 3. Express Fundamentals

* Routes
* Middleware
* Controllers

### 4. MongoDB Basics

* Collections / Documents
* Mongoose models

### 5. CRUD Operations

* POST → Create product
* GET → Fetch products
* PUT → Update product
* DELETE → Delete product

---

##  Code for Week 1

###  Folder Structure

```
week1/
├── package.json
├── server.js
├── config/
│   └── db.js
├── models/
│   └── Product.js
└── routes/
    └── productRoutes.js
```

---

## 1 package.json

```
{
  "name": "week1-backend",
  "version": "1.0.0",
  "main": "server.js",
  "type": "commonjs",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.19.2",
    "mongoose": "^8.0.0",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

---

## 2 server.js

```
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
```

---

## 3 config/db.js

```
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/week1db");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

## 4 models/Product.js

```
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
```

---

## 5 routes/productRoutes.js

```
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// CREATE
router.post('/', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// READ
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product removed" });
});

module.exports = router;
```

---

##  Postman Testing

Faculty should demonstrate:

* POST → `/api/products`
* GET → `/api/products`
* PUT → `/api/products/:id`
* DELETE → `/api/products/:id`

---

##  WEEK 1 TASK FOR STUDENTS

**Build your own CRUD API** using any data model:

* Students
* Books
* Tasks
* Notes

Must include:

* Express server
* MongoDB Atlas or local DB
* CRUD routes
* Postman screenshots

---

