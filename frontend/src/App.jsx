import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import About from './components/About';
import NewProducts from './components/NewProducts';

const App = () => {
  const [page, setPage] = useState('home');  
  const [mode, setMode] = useState("light");
  const [showFooter, setShowFooter] = useState(true);

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      
      setPage('products'); 
    } else {
      setPage('home');  
    }
  }, []);

  const renderPage = () => {
    
    if (page === 'products') {
      const token = localStorage.getItem('token');
      if (!token) {
        setPage('login');  
        return <Login setPage={setPage} />;  
      }
    }

    switch (page) {
      case 'home': return <Home setPage={setPage} />;
      case 'about': return <About />;
      case 'products': return <Products mode={mode} setPage={setPage} />;  
      case 'login': return <Login setPage={setPage} />;
      case 'newProducts': return <NewProducts />;
      default: return <Home />;
    }
  };

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042f55";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  useEffect(() => {
    if (page === "products") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [page]);

  useEffect(() => {
    document.body.style.backgroundColor = mode === "dark" ? "#042f55" : "white";
  }, [mode]);

  return (
    <>
      <Navbar setPage={setPage} mode={mode} changeMode={changeMode} />
      {renderPage()}
      {showFooter && <Footer />}
    </>
  );
};

export default App;









