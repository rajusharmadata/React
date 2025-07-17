import { useContext, useEffect } from 'react'
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom'
import { AppContext } from './context/AppContex'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import Tagpage from './pages/Tagpage'
import CategoryPage from './pages/CategoryPage'

export default function App() {
  const { fetchdata } = useContext(AppContext)
  const [searchParams] = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    const page = Number(searchParams.get('page') ?? 1)
    if (location.pathname.includes('/tags/')) {
      const tag = location.pathname.split('/').at(-1).replace(/-/g, '')
      fetchdata(page, tag) // fetch with tag
    } else if (location.pathname.includes('/categories/')) {
      const category = location.pathname.split('/').at(-1).replace(/-/g, '')
      fetchdata(page, null, category) // fetch with category
    } else {
      fetchdata(page) // plain list page
    }
  }, [location.pathname, location.search])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<Tagpage />} /> {/* plural */}
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  )
}
