import './Activity.css';
function Activity({msg,color}) {
  return (
    <div  className = "Activity" style={{backgroundColor:color}}>
      <h1>{msg}</h1>
    </div>
  );
}

export default Activity;