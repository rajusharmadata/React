import Button from "./Button";
function Card(){
  return (
    <>
      <div className="h-screen w-screen bg-blue-400 ">
        <div className="flex">
          <div className=" bg-white max-w-sm rounded-sm m-2.5">
              <div className="p-3 ">
                <div className="rounded max-w-sm" >
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/01/08/32/agra-fort.jpg?w=500&h=400&s=1" alt="Agra" className="rounded-sm" />
              </div>
              </div>
              <div>
                  <h3 className="text-blue-600 font-bold ml-3.5 ">₹35000</h3>
                  <h1 className="font-bold ml-3.5 ">Agra</h1>
                      <p className="p-5">Agra is home to the world-famous Taj Mahal, a testament to love and Mughal architecture.
                  Known for its intricate marble inlay work and historic forts, the city attracts millions of tourists every year.
                  The local markets brim with handicrafts, leather goods, and delicious Mughlai cuisine.
                  A visit to Agra is a journey through India's rich cultural and architectural heritage.
                  </p>
              </div>
              <Button/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card;