//import logo from './logo.svg';
import './App.css';
import ProductItem from './components/ProductItem';
function App() {
  const product = [
    {name: 'Beginner to Advanced: React', type: 'Book', price: 1860},
    {name: 'Rework', type: 'Book', price: 595},
    {name: 'iPhone 12 Mini', type: 'Electronics', price: 69990},
    {name: 'Teapoy', type: 'Furniture', price: 6000},
]
  return (
    <div>
      <h1>App Component</h1>
      <ProductItem
    name={product[0].name}
    type={product[0].type}
    price={product[0].price}
></ProductItem>

<ProductItem
    name={product[1].name}
    type={product[1].type}
    price={product[1].price}
></ProductItem>

<ProductItem
    name={product[2].name}
    type={product[2].type}
    price={product[2].price}
></ProductItem>

<ProductItem
    name={product[3].name}
    type={product[3].type}
    price={product[3].price}
></ProductItem>
    </div>
  );
}

export default App;
