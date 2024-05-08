import React,{useState,useEffect, useRef} from 'react';

function myComp1(){
    const inputRef1= useRef(0);
    const inputRef2= useRef(0);
    const inputRef3= useRef(0);

    useEffect(() => {
        console.log("Component Rendered");
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "Blue";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "Blue";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "Blue";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";

    }

    return(
        <>
        <button onClick={handleClick1}>
            Click me
        </button>
        <input ref={inputRef1} /><br />
        <button onClick={handleClick2}>
            Click me
        </button>
        <input ref={inputRef2} /><br />
        <button onClick={handleClick3}>
            Click me
        </button>
        <input ref={inputRef3} /><br />
        </>
    );

}
export default myComp1;
