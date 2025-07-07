
import './App.css'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import filterData from './components/filterData'
import cardData from './components/cardData'
import { useState } from 'react'
function App() {
const[Cateyger,SetCateyger] = useState(filterData[0].courseName)
  // console.log(filterData[0].courseName)
  return (
    <>
    <div className='bg-[#141414]   h-screen '>
      <Navbar/>
      <Filter filterData = {filterData} Cateyger = {Cateyger} SetCateyger = {SetCateyger}/>
      <Cards cardData = {cardData} courseName = {Cateyger} />
    </div>
      
    </>
  )
}

export default App
