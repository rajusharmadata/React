


function Filter(props) {
  const filterData = props.filterData;
  let Cateyger = props.Cateyger;
  let SetCateyger = props.SetCateyger;
  


  function CateygerHandler(courseName){
    // console.log(Cateyger);
    SetCateyger(courseName);
    
    
  

  }
  return (
    <div className=' flex flex-wrap  justify-center items-center bg-none'>
      {
        filterData.map((data)=>{
          return(
            <button className= {`bg-[#494949]   text-white text-sm opacity-80 m-2 rounded-sm px-3 py-1  hover:opacity-70 transition-all duration-300 ${Cateyger === data.courseName?'border-2 border-[#5c5c5c] transition-all duration-300':''}`} onClick={()=>CateygerHandler(data.courseName)} key={data.id}>{data.courseName}</button>
          )
        })
      }
    </div>
  )
}

export default Filter