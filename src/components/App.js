
import React,{useState} from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const[inputItemName, setInputItemName] = useState("")
  const[inputItemPrice, setInputItemPrice] = useState("")
  const[items, setItems] = useState([])

  function addItem(){
    setItems([...items,{name:inputItemName,price:inputItemPrice}])
    setInputItemName("")
    setInputItemPrice("")
  }

  function removeItem(name){
    console.log("inside remove func")
    setItems(items.filter((item)=> item.name != name))
        
  }

  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component </h1>
        <label>Item Name</label>
        <input type="text" name="inputItem" onChange={(e)=>setInputItemName(e.target.value)} value={inputItemName}></input>

        <label>Item Price</label>
        <input type="number" name="inputItemPrice" onChange={(e)=>setInputItemPrice(e.target.value)} value={inputItemPrice}></input>

        <button onClick={addItem}>Add Item</button>

        
        <Child itemList={items} removeItem={removeItem}/>

    </div>
  )
}

export default App
