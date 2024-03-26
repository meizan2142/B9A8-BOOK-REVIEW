import './App.css'
import Book from './Home/Book'
import Hero from './Home/Hero'
import Navbar from './Home/Navbar'
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [bookInfo, setBookInfo] = useState([])
  useEffect(() => {
      fetch('blogs.json')
      .then(response => response.json())
      .then(data => setBookInfo(data))
  },[])
  return (
    <div className='lg:w-[1200px] lg:mx-auto text-center'>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="grid lg:grid-cols-3 lg:gap-6 gap-4">
      {
        bookInfo.map(books => <Book key={books.bookId} books={books}></Book>)
      }
      </div>
    </div>
  )
}

export default App
