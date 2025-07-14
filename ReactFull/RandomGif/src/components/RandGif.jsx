
import Spinner from './Spinner'
import useGif from '../Hook/useGif'

const RandGif = () => {
  // const [gifUrl, setGifUrl] = useState('')
  // const [Loding, setLoding] = useState(false)
  // const API_KEY = import.meta.env.VITE_GIF_API_KEY

  // async function fetchData() {
  //   try {
  //     setLoding(true)
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  //     const response = await axios.get(url)
  //     console.log(response)
  //     setGifUrl(response.data.data.images.downsized.url)
  //     console.log(response.data.data.images.downsized.url)
  //     setLoding(false)
  //   } catch (error) {
  //     console.error('Error fetching GIF:', error)
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  const { Gifs, Loding, fetchData } = useGif();

  const randomGifHandler = () => {
    fetchData()
  }

  return (
    <div className="sm:w-5/12 w-96 h-[500px] border border-gray-500 rounded shadow bg-gradient-to-bl from-gray-700 to-[#242323] shadow-gray-400 sm:h-8/12 flex flex-col items-center pb-20">
      <div>
        <h1 className="text-center text-xl font-bold mt-3 text-white">
          Random Gifs
        </h1>
      </div>
      <div className="sm:w-80 sm:h-80  h-64 w-80 mt-8 flex justify-center items-center">
        {Loding ? (
          <Spinner />
        ) : (
          <img
            src={Gifs}
            alt="Random Gif"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div>
        <button
          className="sm:px-20 px-12 py-2 rounded mt-10 border border-gray-400 text-white cursor-pointer"
          onClick={randomGifHandler}
        >
          Generate Random Gif
        </button>
      </div>
    </div>
  )
}

export default RandGif
