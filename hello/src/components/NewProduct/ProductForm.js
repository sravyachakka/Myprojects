import React ,{useState} from 'react';
import './ProductForm.css'
function ProductForm(props) {
  const [enteredName, setEnteredName] = useState('')
  const [enteredType, setEnteredType] = useState('')
  const [enteredPrice, setEnteredPrice] = useState('')
  const [isNameValid,setIsNameValid] = useState(true)
  const [isTypeValid,setIsTypeValid] = useState(true)
  const [isPriceValid,setIsPriceValid] = useState(true)
  function titleChangeHandler(event){
    if(event.target.value.trim().length > 0) {
      setIsNameValid(true)
  }   
    setEnteredName(event.target.value)
  }
  function typeChangeHandler(event){
    if(event.target.value.trim().length > 0) {
      setIsTypeValid(true)
  } 
    setEnteredType(event.target.value)
  }
  function priceChangeHandler(event){
    if(event.target.value.trim().length > 0) {
      setIsPriceValid(true)
  } 
    setEnteredPrice(event.target.value)
  }
  function submitHandler(event) {
    event.preventDefault()
    if(enteredName.trim().length===0){
      setIsNameValid(false)
      return;
    }
    if(enteredType.trim().length===0){
      setIsTypeValid(false)
      return;
    }
    if(enteredPrice.trim().length===0){
      setIsPriceValid(false)
      return;
    }
    const productData = {
      name: enteredName,
      type: enteredType,
      price: enteredPrice  
    }
          props.onSaveProductData(productData)    
          setEnteredName('')
          setEnteredType('')
          setEnteredPrice('')

  }
	return <form onSubmit={submitHandler}>
        <div className='new-product__controls'>
    <div className={`new-product__control ${!isNameValid ? 'invalid' : '' }`}>
      <label>Name</label>
      <input type='text' onChange={titleChangeHandler}  value={enteredName}/>
    </div>
    <div className={`new-product__control ${!isTypeValid ? 'invalid' : '' }`}>
      <label>Type</label>
      <input type='text'  onChange={typeChangeHandler} value={enteredType}/>
    </div>
    <div className={`new-product__control ${!isPriceValid ? 'invalid' : '' }`}
>
      <label>Price</label>
      <input type='number'  onChange={priceChangeHandler} value={enteredPrice}/>
    </div>
  </div>
  <div className='new-product__actions'>
    <button type='submit'>Add Product</button>
  </div>
	</form>
};

export default ProductForm;