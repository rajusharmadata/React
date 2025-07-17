import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogDetails from '../components/BlogDetails'
import Header from '../components/Heder'
import { AppContext } from '../context/AppContex'

const BlogPage = () => {
  const [blog, setBlogs] = useState(null)
  const [releatedblogs, setRelatedBlogs] = useState([])
  const location = useNavigate()
  const navigate = useNavigate()
  const { loading, setloading } = useContext(AppContext)
  return (
    <div>
      <div>
        <Header />
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
      <div>
        {loading ? (
          <div className="spinner"></div>
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2>Related Blogs</h2>
            {releatedblogs.map(post => {
              ;<div key={post.id}>
                <BlogDetails post={post} />
              </div>
            })}
          </div>
        ) : (
          <div>
            <p>Blog NOt Found </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPage
