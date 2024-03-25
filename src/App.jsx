import './App.css'
import Hero from './Home/Hero'
import Navbar from './Home/Navbar'

function App() {


  return (
    <div className='lg:w-[1200px] mx-auto text-center'>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  )
}

export default App
