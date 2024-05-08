import React,{useState} from 'react';
import MyComp2 from "./myComp2.jsx";
function myComp1(){
    const [user, setUser]=useState("Ram");
    return(
        <div className="box">
            <h1>myComp1</h1>
            <p>hello {user}</p>
            <MyComp2  user={user}/>
        </div>
    );

}
export default myComp1;
