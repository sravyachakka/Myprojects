import ProductItem from './ProductItem'
import './Product.css'
function Products(props){
    return <div className="products">{
        props.product.map((product)=>(
            <ProductItem
               name={product.name}
               type={product.type}
               price={product.price}
               />
        ))
    }
    </div>
    }
export default Products;