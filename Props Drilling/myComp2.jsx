import MyComp3 from "./myComp3.jsx";
function myComp2(props){
    return(
        <div className="box">
            <h1>myComp2</h1>
            <p>{props.user}</p>
            <MyComp3  user={props.user}/>
        </div>
    );

}
export default myComp2;
