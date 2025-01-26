import { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/frontend_assets/assets.js'
export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({});
    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else
        {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removefromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let amt=0
        for(const item in cartItems)
        {   
            if(cartItems[item]>0){
            let itemInfo=food_list.find((prod)=>prod._id===item);
            amt+=itemInfo.price*cartItems[item]
            }
        }return amt;
    }
    const contextValue={
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removefromCart,
       getTotalCartAmount
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider