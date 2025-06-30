import Card from './Card';

function Tours(props) {

  return (
    <div>
      <div>
        <h2 className='text-center text-4xl m-5'>Plan with Raju</h2>
      </div>
      <div className='flex '>
        {props.place.map((item) => (
          <Card  item={item}  handler = {props.datahandler} interstedhandler = {props.interstedhandler}/>
        ))}
      </div>
    </div>
  )
}

export default Tours;
