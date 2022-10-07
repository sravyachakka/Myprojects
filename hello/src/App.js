import React,{useState} from 'react'
import Products from './components/Products'
import NewProduct from './components/NewProduct/NewProduct'
  const DUMMY_PRODUCTS = [
    {name: 'Beginner to Advanced: React', type: 'Book', price: 1860},
    {name: 'Rework', type: 'Book', price: 595},
    {name: 'iPhone 12 Mini', type: 'Electronics', price: 69990},
    {name: 'Teapoy', type: 'Furniture', price: 6000},
];
function App(){
  const[products,setProducts]=useState(DUMMY_PRODUCTS)
  function addProductHandler(newProductData){
     setProducts([newProductData,...products])
 }
  return (
    <div>
      <NewProduct onAddProduct={addProductHandler}/>
      <Products product={products}/>
    </div>
  );
}
export default App;
