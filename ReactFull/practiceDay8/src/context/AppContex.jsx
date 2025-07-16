import { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl'
export const AppContext = createContext()
// part 1 to define it
export function AppContextProvider({ children }) {
  const [loading, setloading] = useState(false)
  const [posts, setposts] = useState([])
  const [page, setpage] = useState(1)
 const [totalPages, setTotalPages] = useState(null)

  const fetchdata = async (page ) => {
    try {
      setloading(true)
      const response = await fetch(`${baseUrl}?page=${page}`)
      const data = await response.json()
      console.log(data)
      setloading(false)
      setpage(data.page)
      setposts(data.posts)
      setTotalPages(data.totalPages)
      console.log(totalPages)
    } catch (error) {
      console.log('api error ...', error)
    }
  }
  const handlepage = page => {
    setpage(page)
    console.log(page)
    fetchdata(page)
  }

  const value = {
    loading,
    setloading,
    posts,
    setposts,
    page,
    setpage,
    totalPages,
    setTotalPages,
    fetchdata,
    handlepage,
  }

  // step 2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
