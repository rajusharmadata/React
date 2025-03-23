import './product.css';
function product({title,price ,feature ,products}){
    // method to write conditon in jsx
//  let isDiscount = price>30000? "Discounted on 5%": "";
let isDescount = price>30000;
// dynamic style in jsx 

   let style = {backgroundColor:isDescount?"red" :""}; 
   
    return (
        <div className="Product"  style={style}>
            <h3>{title}</h3>
            <p>Price: {price}</p>
            {/* method to write condition in jsx */}
            {/* {price>30000? <p>"Discounted on 5%"</p>:null} */}



            {/* method to write condition in jsx with && operator */}
            {isDescount && <p>Discounted on 5%</p>} 

            {/* array of product feature */}
            {/* <p>
                {feature.map((feature)=>(
                <li>{feature}</li>
            ))};
            </p> */}

            {/* object is accessed by using dot operator */}
            {/* <p>{products.c}</p> */}
        </div>
    );
}

export default product;