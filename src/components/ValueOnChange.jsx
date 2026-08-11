// onChange = event handler used primarily with form elements
//            ex. <input>, <select>, <textarea>, <radio>
//            Triggers a function every time the value of the input changes

import React, { useState } from 'react';    

function ValueOnChange() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery"); // Assume default is delivery prior to user input

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleCommentChange(e) {
        setComment(e.target.value);
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }

    function handleShippingChange(e) {
        setShipping(e.target.value);
    }

    return (
        <>
            <div className='forms-row'>
                <input value={name} onChange={handleNameChange} placeholder='Type your name...'/>
            </div>
            <p>Name: <span className='current-value'>{name}</span></p>
            <hr />
            <div className='forms-row'>
                <input value={quantity} onChange={handleQuantityChange} type="number" placeholder='Enter the quantity...'/>
            </div>
            <p>Quantity: <span className='current-value'>{quantity}</span></p>
            <hr />
            <div className='forms-row'>
                <textarea value={comment} onChange={handleCommentChange} rows="5" placeholder='Enter delivery instructions'/>
            </div>
            <p>Comment: <span className='current-value'>{comment}</span></p>
            <hr />
            <div className='forms-row'>
                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select a payment method</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
            </div>
            <p>Payment: <span className='current-value'>{payment}</span></p>
            <hr />
            <div className='forms-row'>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="shipping" 
                            value="Pick Up" 
                            onChange={handleShippingChange} 
                            checked={shipping === "Pick Up"} /> {/* check if stateful value matches the input value */}
                        Pick Up
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="shipping" 
                            value="Delivery" 
                            onChange={handleShippingChange} 
                            checked={shipping === "Delivery"} />
                        Delivery
                    </label>
                </div>
 
            </div>
            <p>Shipping: <span className='current-value'>{shipping}</span></p>
        </>
    );
}

export default ValueOnChange