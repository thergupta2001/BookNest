import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import AddBook from './components/AddBook.jsx'
import Home from './components/Home.jsx'
import Books from './components/Book/Books.jsx'
import About from './components/About.jsx'
import axios from 'axios'

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:5000";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<AddBook />} />
          <Route path='/books' element={<Books />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
