import { useState } from "react";

function Counter(){
    const [count, setCount]=useState(0);
    const increment=()=> {
        setCount(count + 1);
    }
    const decrement=()=> {
        setCount(count - 1);
    }
    return(
        <div className="counter-container">
            <p className="count-display">Count: &nbsp; 
                                          {count}</p>
            <button className="counter-button1" onClick={decrement}>Decrement</button>
            <button className="counter-button2" onClick={increment}>Increment</button>
        </div>
    );
}
export default Counter
