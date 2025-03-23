import Product from "./Product";
import "./ProductTab.css";
export default function ProductTab() {
  return (
    <div className="ProductTab">
      <Product title={"Product 1"} inx={0} />
      <Product title={"Product 2"} inx={1} />
      <Product title={"Product 3"} inx={2} />
      <Product title={"Product 4"} inx={3} />
    </div>
  );
}
