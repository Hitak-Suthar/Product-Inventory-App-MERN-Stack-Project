import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
