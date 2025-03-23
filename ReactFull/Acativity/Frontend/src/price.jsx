import './price.css';
export default function Price({ oldPrice, newPrice }) {
    return (
        <div className="Price">
            <span id = "old">{oldPrice}</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>{newPrice}</span>
        </div>
    );
}