import React from 'react';
import ProductForm from './ProductForm';
import './NewProduct.css'
function NewProduct(props){
    function saveProductDataHandler(enteredProductData){
        props.onAddProduct(enteredProductData)
    }
    return (
        <div className='new-product'>
            <ProductForm  onSaveProductData={saveProductDataHandler}/>
        </div>
    );
}
export default NewProduct;