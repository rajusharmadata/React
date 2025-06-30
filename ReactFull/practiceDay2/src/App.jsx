
import { useState } from 'react'
import './App.css'
import data from './components/data'
import Tours from './components/Tours'
import { MdRefresh } from 'react-icons/md'


function App() {
const[place,SetPlace ] = useState(data);
 function placehandler(id) {
  let newplace = place.filter((item) => item.id !== id);
  SetPlace(newplace);
}

function interstedhandler(id){
  let Interestedplace = place.filter((item)=>item.id ===id);
  SetPlace(Interestedplace);
}
// reload logic 
function reloadhandler(){
  window.location.reload();
}
if(place.length===0){
  return (
    <div className='h-screen flex items-center justify-center flex-col '>
      
       <h2 className='text-center text-4xl m-5'>Plan with Raju</h2>

    
             <button  className=' text-center mx-auto text-7xl duration-75' onClick={reloadhandler}  >
              <MdRefresh/>
             </button>
     
    </div>
  )
}


  return (
    <>
    {/* <Card/> */}
    <Tours place = {place} datahandler = {placehandler} interstedhandler= {interstedhandler}/>
    </>
  )
}

export default App
