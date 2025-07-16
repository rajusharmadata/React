import { useContext } from 'react'
import { AppContext } from '../context/AppContex'
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
          <div key={post.id} className="sm:px-30 max-sm:px-4 flex flex-col itmes-center">
            <p className="font-bold text-xl">{post.title}</p>
            <p className="font-bold">
              by <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p>
              post on <span className='font-bold'>{post.date}</span>
            </p>
            <p>{post.content}</p>
            <div className='flex gap-2 text-blue-600 mb-4'>
              {post.tags.map((tag, index) => {
                return (
                  <p key={index} className='underline'>
                    <span> #{tag}</span>
                  </p>
                )
              })}
            </div>
          </div>
        ))
      )}
    </div>
  )

}

export default Blogs
