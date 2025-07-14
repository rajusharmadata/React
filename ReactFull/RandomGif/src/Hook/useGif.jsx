
import axios from 'axios'
import { useEffect, useState } from 'react'
const API_KEY = import.meta.env.VITE_GIF_API_KEY
 const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const useGif = (tag) => {
    const [Gifs, setGifs] = useState('')
    const [Loding, setLoding] = useState(false)



    async function fetchData() {
      try {
        setLoding(true)
        const response = await axios.get(tag ?`${url}&tag=${tag}` : url)
        console.log(response)
        setGifs(response.data.data.images.downsized.url)
        console.log(response.data.data.images.downsized.url)

        setLoding(false)
      } catch (error) {
        if (error.response?.status === 429) {
          alert('Rate limit exceeded. Please wait and try again later.')
        } else {
          console.error('Error fetching GIF:', error)
        }

      }
    }

    // use the useeffect for the fetchdata method colled ok
    useEffect(() => {
      fetchData(tag)
    }, [tag])

return {Gifs,Loding,fetchData}
};

export default useGif;
