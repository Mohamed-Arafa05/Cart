import React, { useState } from "react";
import Cart from "./Cart";
import Header from "./Header";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    { id: 0, name: "shipcy", price: 100, items: 1 },
    { id: 1, name: "pepsi", price: 200, items: 1 },
    { id: 2, name: "molto", price: 300, items: 1 },
    { id: 3, name: "kranshy", price: 400, items: 1 },
    { id: 4, name: "cigaretes", price: 500, items: 1 },
  ]);

  const [addedProducts, setAddedProducts] = useState([
    { id: 0, name: "shipcy", price: 100, items: 1 },
    { id: 1, name: "pepsi", price: 200, items: 1 },
    { id: 2, name: "molto", price: 300, items: 1 },
    { id: 3, name: "kranshy", price: 400, items: 1 },
    { id: 4, name: "cigaretes", price: 500, items: 1 },
  ]);

  const [theme, setTheme] = useState(false);

  const increment = (id) => {
    setAddedProducts(
      addedProducts.map((product) => {
        return product.id === id
          ? { ...product, items: product.items + 1 }
          : product;
      })
    );
  };

  const decrement = (id) => {
    setAddedProducts(
      addedProducts.map((product) => {
        return product.id === id
          ? { ...product, items: product.items - (product.items > 0) }
          : product;
      })
    );
  };

  const deleteFromCart = (id) => {
    setAddedProducts(
      addedProducts.filter((product) => {
        return product.id !== id;
      })
    );
  };

  const clearCart = () => {
    setAddedProducts([]);
  };

  const resetItems = () => {
    setAddedProducts(
      addedProducts.map((product) => {
        return { ...product, items: 1 };
      })
    );
  };

  const calculateTotal = () => {
    let total = 0;
    addedProducts.forEach((product) => {
      total += product.items * product.price;
    });
    return total;
  };

  const addToCart = (id) => {
    if (
      addedProducts.some((product) => {
        return product.id === id;
      })
    ) {
      increment(id);
    } else {
      setAddedProducts([
        ...addedProducts,
        products.find((product) => product.id === id),
      ]);
    }
  };

  return (
    <div
      className={`min-h-screen w-screen flex flex-col ${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header productsCount={addedProducts.length} addToCart={addToCart} />
      <Cart
        addedProducts={addedProducts}
        theme={theme}
        setTheme={setTheme}
        increment={increment}
        decrement={decrement}
        deleteFromCart={deleteFromCart}
        clearCart={clearCart}
        resetItems={resetItems}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}

export default App;
