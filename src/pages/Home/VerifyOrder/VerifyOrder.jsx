import { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../../../Context/StoreContext";
const VerifyOrder = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);

  const navigate = useNavigate();
  const storePaymentInDb = async () => {
    try {
      console.log(`storing payment info for Order ID: ${orderId}`);
      console.log(orderId);
      const response = await axios.post(`${url}/api/order/verify`, {
        success,
        orderId,
        userId: "67a101419f11bbbff2675222",
        address: JSON.stringify({RANDI : true}),
        items: [
          {
            name: 'biryani',
            description: "maja maja randi",
            price: 100,
            image: "https/klasd",
            catgory: "gourmet",
            quantity: 2
          }
        ]
      });
      
      console.log("response"+ JSON.stringify(response));
      if (response) {
        console.log(
          "✅ payment info stored in db successfully! Navigating to /myorders..."
        );
        setTimeout(() => navigate("/myorders"), 1000); // Add delay for better UX
      } else {
        console.log("❌ Payment info could not be stored in db...");
        console.log("reversing payment transaction")
        // await rzporpay.reversepayment(payment id, orderid);
        console.log("reversing payment done , navigating to home route...");
        setTimeout(() => {
          navigate("/")
        }, 1000);
      }
    } catch (error) {
      console.error("🚨 Error verifying payment:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    if (success === "true") {
      console.log(`Payment Successful for Order ID: ${orderId}`);
      storePaymentInDb();
    } else {
      console.log("Payment Failed");
    }
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default VerifyOrder;
