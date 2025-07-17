import { useContext } from 'react'
import { AppContext } from '../context/AppContex'
import BlogDetails from './BlogDetails'
import Spinner from './Spinner'

const Blogs = () => {
  const { loading, posts } = useContext(AppContext)
  return (
    <div className="lg:px-96 sm:my-20 max-sm:mt-30 overflow-y-auto">
      {loading ? (
        <div className="">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <p>Not Found the data </p>
      ) : (
        posts.map(post => (
          <div key={post.id}>
            <BlogDetails post={post} />
          </div>
        ))
      )}
    </div>
  )
}

export default Blogs
