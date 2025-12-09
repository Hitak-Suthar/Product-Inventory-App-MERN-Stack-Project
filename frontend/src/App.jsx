import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Cards from './components/cards/Cards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Home/>
      <Cards title1="Product 1" title2="Product 2" title3="Product 3"/>
      <Footer/>
    </div>
  )
}

export default App
