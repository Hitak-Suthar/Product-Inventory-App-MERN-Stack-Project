import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [mode, setMode] = useState("light");

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
    document.body.style.backgroundColor = mode === "dark" ? "#042f55" : "white";
  }, [mode]);


  return (
    <>
      <Navbar mode={mode} changeMode={changeMode} />
      <Home/>
      <Cards />
      <Footer />
    </>
  );
};

export default App;
