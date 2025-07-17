import React from 'react'
import Header from '../components/Heder'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Tagpage = () => {
  const navigation = useNavigate()
  const location = useLocation()
  // take a currecnt location path and split the tag name and store in tag variable
  const tag = location.pathname.split('/').at(-1).replace(/-/g, '')

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <button onClick={() => navigation(-1)}>back</button>
        <h2>
          Blog Tagged <span>#{tag}</span>
        </h2>
      </div>
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  )
}

export default Tagpage
