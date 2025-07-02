
import './App.css'
import Testimonial from './components/Testimonial'
import { reviews } from './reviews'

function App() {
  

  return (
    <>
        <div className='flex flex-col justify-center items-center h-screen w-screen bg-violet-400'>
          <div>
          <h1 className='text-center text-2xl font-bold '>Testimonial page </h1>
        </div>
        <div className='h-1 w-40 border-solid m-1 rounded-2xl opacity-50 bg-blue-500'>

        </div>
        <div className=' flex-wrap bg-violet-400'>
          <Testimonial reviews = {reviews}/>
        </div>
        </div>
    </>
  )
}

export default App
