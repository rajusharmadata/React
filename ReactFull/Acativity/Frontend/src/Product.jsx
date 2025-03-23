import './Product.css'
import Price from "./price"
export default function Product({title,inx}){
    let oldPrice = [100,200,900,1000]
    let newPrice = [50,100,450,500]
    let decription = ['This is a good product','This is a bad product','This is a very good product','This is a very bad product']
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{decription[inx]}</p>
            <Price oldPrice={oldPrice[inx]} newPrice = {newPrice[inx]}/>
            


        </div>
    )
}