import Card from './Card'

function Cards(props) {
  const cardData = props.cardData;
  const Cateyger = props.courseName;
  console.log(cardData[Cateyger]);

const getCourses = () => {
  if (Cateyger != "All") {
    return cardData[Cateyger];
  } else {
    return Object.values(cardData).flat();
  }
  
};


  

  return (
    <div className='bg-[#141414] py-10 px-4 md:px-8 lg:px-16 flex justify-center items-center'>
      <div className='max-w-screen-xl w-full flex flex-wrap justify-center'>
        {
          getCourses().map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              imge={item.image.url}
              alt={item.image.alt}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Cards;
