import React, { useContext, useState } from 'react'
import axios from 'axios'
import './Placeorder.css'
import { StoreContext } from '../../../Context/StoreContext'
const Placeorder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  
  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  
  const placeOrder = async (e) => {
    e.preventDefault();
  
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });
  
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2, // Include delivery fee
    };
  
    try {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
  
      if (response.data.success) {
        const { razorpayOrderId, amount, currency } = response.data;
  
        // ✅ Ensure Razorpay is loaded before initializing
        const isLoaded = await loadRazorpayScript();
        if (!isLoaded) {
          alert("Failed to load Razorpay. Try again.");
          return;
        }
  
        // ✅ Initialize Razorpay checkout
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Ensure correct .env variable
          amount: amount,
          currency: currency,
          name: "Your Store Name",
          description: "Order Payment",
          order_id: razorpayOrderId,
          handler: function (response) {
            alert("Payment Successful!");
            window.location.href = `/verify?success=true&orderId=${razorpayOrderId}`;
          },
          prefill: {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            contact: data.phone,
          },
          theme: {
            color: "#F37254",
          },
        };
  
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        alert("Order placement failed. Try again.");
      }
    } catch (error) {
      console.error("❌ Error placing order:", error);
      alert("Something went wrong.");
    }
  };
  
  
  return (
    <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
              <input  name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
              <input  name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name'/>
          </div>
          <input  name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' />
          <input  name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
          <div className="multi-fields">
              <input  name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
              <input  name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
              <input  name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code'/>
              <input  name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
          </div>
          <input  name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone'/>
        </div>
        <div className="place-order-right">
          <div className="cart-total">
                    <h2>Cart total</h2>
                    <div>
                       <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                       </div>
                       <hr />
                       <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>${getTotalCartAmount()===0?0:2}</p>
                       </div>
                       <hr />
                       <div className="cart-total-details">
                        <b>Total</b>
                        <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                       </div>
                    </div>
                    <button type='submit'>PROCEED TO PAYMENT</button>
                  </div>
        </div>
    </form>
  )
}

export default Placeorder
