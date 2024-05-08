import React,{useState, createContext} from 'react';
import MyComp2 from './myComp2.jsx';

export const UserContext = createContext();
function myComp1(){
    const [user, setUser]=useState("Ram");

    return(
        <div className="box">
            <h1>myComp1</h1>
            <p>hello {user}</p>
            <UserContext.Provider value={user}>
                <MyComp2 user={user}/>
            </UserContext.Provider>

        </div>
    );

}
export default myComp1;
