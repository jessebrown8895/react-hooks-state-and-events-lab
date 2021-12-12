import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [check, setCheck] = useState(false);
  
  const appClass = check ? "App dark" : "App light"
  
  const handleCLick = () => {
    if(appClass === "App light"){
      return setCheck(appClass)
    } else {
      return setCheck(!appClass)
    }
}


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleCLick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
      
    </div>
  );
}

export default App;
