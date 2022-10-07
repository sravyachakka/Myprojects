import "./ProductItem.css";
function ProductItem(props) {
    return (
      <div className="product-item"><div>{props.name}</div> 
    <div className="product-item__type"><div>{props.type}</div></div>
    <div className="product-item__price"><div>{props.price}</div></div>
</div>
    );
  }
  
  export default ProductItem;