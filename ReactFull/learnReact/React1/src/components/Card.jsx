import React from "react";
// in the react how daynmic render the data

export default function Card() {
  let data = [
    {Title:"Elephent",img : 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',Discription :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a error non porro Lorem ipsum dolor, sit amet consectetur adipisicingelit. Delectus."
    ,instock:true
    },


    {Title:"Amazon",img : 'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',Discription :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a error non porro Lorem ipsum dolor, sit amet consectetur adipisicingelit. Delectus.",instock:false},

    {Title:"Flipkart",img : 'https://cdn.iconscout.com/icon/free/png-512/free-flipkart-logo-icon-download-in-svg-png-gif-file-formats--online-shopping-brand-logos-pack-icons-226594.png?f=webp&w=256',Discription :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a error non porro Lorem ipsum dolor, sit amet consectetur adipisicingelit. Delectus.",instock:false}
  ]


  return (
    <div className="justify-center h-screen flex items-center gap-10">
      {data.map((el,index)=>(
              <div className="h-75 w-65 flex  rounded overflow-hidden  flex-col content-center border" >
              <div className="h-full w-full overflow-hidden  " key={index}>
                <img
                  src={el.img}
                  alt="Apple image"
                  className=" object-fit"
                />
              </div>
              <div className="h-full">
                <h1 className="text-2xl text-center">{el.Title}</h1>
                <p className="text-normal  text-gray-800 ">
                {el.Discription}
                </p>
                <button className={`py-2 px-4 ${el.instock ? 'bg-blue-400':'bg-red-700'} m-1 rounded text-white`}>
                  {el.instock ? "In Stock":"Out of Stock"}</button>
              </div>
            </div>
      ))}
    </div>
  );
}
