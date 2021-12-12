import React, { useState } from "react";

function Item({ name, category }) {

  const [item, setItem] = useState(false)

  const addToCart = () => {
   setItem(!item)
}
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add"> {item ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
