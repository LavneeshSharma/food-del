import { useContext, useEffect } from "react";
import { useSearchParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from '../../../Context/StoreContext'
const VerifyOrder = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const {url}=useContext(StoreContext);

  useEffect(() => {
    if (success === "true") {
      console.log(`Payment Successful for Order ID: ${orderId}`);
    } else {
      console.log("Payment Failed");
    }
    verifyPayment();
  }, [success, orderId]);
  const navigate=useNavigate();
  const verifyPayment=async()=>{
    const response=await axios.post(url+"/api/order/verify",{success,orderId});
    if(response.data.success)
    {
       navigate("/myorders");
    }
    else
    {
      navigate("/");
    }
  }

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default VerifyOrder;
