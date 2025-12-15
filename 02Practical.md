# Week 2 — React Fundamentals Practical

## Folder Structure

```
week2-frontend/
├── index.html
├── package.json
├── vite.config.js
├── node_modules/
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main App component
    ├── index.css       # Custom CSS
    └── components/
        ├── Navbar.jsx
        ├── Footer.jsx
        ├── Home.jsx
        ├── About.jsx
        ├── Products.jsx
        └── Login.jsx
```

---

## index.css

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 900px;
  margin: 20px auto;
}
.card {
  margin-bottom: 10px;
}
.footer {
  text-align: center;
  padding: 20px 0;
  background-color: #343a40;
  color: white;
  margin-top: 20px;
}
```

---

## Navbar.jsx

```jsx
import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">FrameboxIT</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('home')}>Home</button></li>
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('about')}>About</button></li>
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('products')}>Products</button></li>
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('login')}>Login</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

---

## Footer.jsx

```jsx
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      &copy; 2025 FrameboxIT. All rights reserved.
    </div>
  );
};

export default Footer;
```

---

## Home.jsx

```jsx
import React from 'react';

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="text-center mb-3 text-primary">Welcome to FrameboxIT</h2>
        <p className="lead text-center">Learn the latest technologies and get job-ready with practical, project-based training.</p>
      </div>
    </div>
  );
};

export default Home;
```

---

## About.jsx

```jsx
import React from "react";

const About = () => {
  return (
    <div id="about" className="container my-5">
      <div className="card shadow p-4 text-bg-warning">
        <h2 className="text-center mb-4 text-dark">About FrameboxIT</h2>
        <p className="lead text-center text-dark">
          FrameboxIT is a leading tech academy dedicated to transforming
          aspiring students into job-ready professionals. We specialize in
          practical, industry-oriented training with a strong focus on
          real-world applications.
        </p>

        <div className="mt-4">
          <h4 className="mb-3 text-dark">Our Courses</h4>
          <ul className="list-group mb-4">
            <li className="list-group-item list-group-item-warning">
              Full Stack Development
            </li>
            <li className="list-group-item list-group-item-warning">
              Data Analysis
            </li>
            <li className="list-group-item list-group-item-warning">
              Data Science
            </li>
            <li className="list-group-item list-group-item-warning">
              UI/UX Design
            </li>
            <li className="list-group-item list-group-item-warning">
              MERN Stack
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h4 className="mb-3 text-success">
            Scholarship Program for Internship Students
          </h4>
          <p className="fw-bold text-dark">
            We are offering a{" "}
            <span className="text-danger">
              limited-seats scholarship program
            </span>{" "}
            exclusively for our internship students! Gain access to full-time
            courses at discounted or zero fees. Hurry, seats are limited!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

```

---

## Products.jsx

```jsx
import React from 'react';

const Products = () => {
  const products = [
    { name: 'iPhone 14', price: 999 },
    { name: 'Nike Shoes', price: 120 },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Products</h2>
      {products.map((product, index) => (
        <div key={index} className="card card-body mb-2">
          <h5>{product.name}</h5>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
```

---

## Login.jsx

```jsx
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Login</h2>
      <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
```

---

## App.jsx

```jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch(page) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'products': return <Products />;
      case 'login': return <Login />;
      default: return <Home />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} />
      {renderPage()}
      <Footer />
    </>
  );
};

export default App;
```

---

## main.jsx

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
