import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const VerifyOrder = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (success === "true") {
      console.log(`Payment Successful for Order ID: ${orderId}`);
    } else {
      console.log("Payment Failed");
    }
  }, [success, orderId]);

  return (
    <div>
      <h2>{success === "true" ? "✅ Payment Successful!" : "❌ Payment Failed"}</h2>
      <p>Order ID: {orderId}</p>
    </div>
  );
};

export default VerifyOrder;
