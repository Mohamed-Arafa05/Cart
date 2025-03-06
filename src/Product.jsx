import React from 'react'

const Product = ({product, increment, decrement, deleteFromCart}) => {
  return (
    <div className="flex justify-around p-2 mt-5  w-full bg-gray-600 text-white">
      <div> Name: {product.name} </div>
      <div> Price: {product.price} </div>
      <div> Items: {product.items} </div>
      <button className="btn btn-success" onClick={() => {increment(product.id);}}>+</button>
      <button className="btn btn-warning" onClick={()=>{decrement(product.id)}}>-</button>
      <button className="btn btn-error" onClick={() => {deleteFromCart(product.id)}}>Delete</button>
      <div>Total: {product.items*product.price } </div>
    </div>
  );
}

export default Product
