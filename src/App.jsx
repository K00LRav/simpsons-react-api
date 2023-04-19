import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
