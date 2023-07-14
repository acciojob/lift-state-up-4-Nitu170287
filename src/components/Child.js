import React from "react"

const Child = (props)=>{

    

    return(
        <div className="child">
            <h2>Child Component</h2>
           
                {/* {/* <li>Item 1 - $10 <button>Remove</button></li>
                <li>Item 2 - $20 <button>Remove</button></li> 
                <li>Item 3 - $30 <button>Remove</button></li> */}
                {props.itemList.map(item =>(
                    <li key={item.name}>{item.name + " - $" + item.price}<button onClick={()=>{props.removeItem(item.name)}}>Remove</button></li>
                ))}

            
        </div>
    )
}
export default Child