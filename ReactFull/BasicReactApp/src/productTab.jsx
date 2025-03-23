import Product from "./product";
function productTab(){
    // array of product feature
    let product1 = ["Raju","Ranjan","Rajesh"];
    // object of product feature
    // let product2 = {
    //     a : "Raju",
    //     b : "Ranjan",
    //     c : "Rajesh"
    // }

    // let product1 = [<li>Raju</li>,<li>Ranjan</li>,<li>Rajesh</li>];
    return (
        <div>
           <Product title = "Phone" price = {10000} feature = {product1}  products = {{a:"Raju",b: "Shyam",c:"Rajesh"}}/>
           <Product title = "laptop" price = {40000} /> 
           {/* // yaha par default value 1 lera hai price ka  */}
           <Product title = "Pen" price={10}/> 
        </div>
    );
}

export default productTab;