import Card from './Card';

function Tours(props) {
  return (
    <div>
      <div>
        <h2 className='text-center text-4xl m-5'>Plan with Raju</h2>
      </div>

      <div className='grid gap-6 px-4
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-2
                      lg:grid-cols-3
                      xl:grid-cols-4'>
        {props.place.map((item) => (
          <Card
            key={item.id}
            item={item}
            handler={props.datahandler}
            interstedhandler={props.interstedhandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Tours;
