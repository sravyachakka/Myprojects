import "./ProductItem.css";
function ProductItem(props) {
    return (
      <div className="product-item">
    <div>{props.name}</div> 
    <div className="product-item__type">
        <p>{props.type}</p>
    </div>
    <div className="product-item__price">{props.price}</div>
</div>
    );
  }
  
  export default ProductItem;