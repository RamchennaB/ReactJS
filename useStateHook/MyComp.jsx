import React,{useState} from 'react';
function MyComp(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment,setPayment] = useState(""); 
    const [shipping, setShipping]= useState("Delivery");
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name : {name} </p>
            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity : {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder='this is a comment'/>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa/</option>
                <option value="Rupay">Rupay</option>
                <option value="MasterCard">MasterCard</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value="Pickup"
                 checked={shipping === "Pickup"}
                  onChange={handleShippingChange}/>
                Pickup
            </label><br/>
            <label>
                <input type="radio" value="Delivery" 
                          checked={shipping === "Delivery"} 
                          onChange={handleShippingChange}/>
                  Delivery
            </label>
            <p>Shipping :{shipping}</p>
        </div>
        );
}
export default MyComp
