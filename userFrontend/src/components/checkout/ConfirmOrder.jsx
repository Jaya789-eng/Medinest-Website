import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder, verifyPayment } from "../../redux/action/paymentAction";
import { toast } from "react-toastify";

const ConfirmOrder = ({ onBack }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const { watchlist } = useSelector((state) => state.userWatchlist);
  const address = useSelector((state) => state.addresses.addresses[0]);

  const [paymentMethod, setPaymentMethod] = useState("Online"); // Default payment method

  const cartItems = watchlist.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleBuyNow = async () => {
    const orderData = {
      cartItems,
      address,
      paymentMethod,
      totalAmount,
    };

    if (paymentMethod === "Online") {
      const orderResponse = await dispatch(createOrder(orderData));
      if (orderResponse?.razorpayOrder) {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: orderResponse.razorpayOrder.amount,
          currency: orderResponse.razorpayOrder.currency,
          name: "MediNest",
          description: "Test Transaction",
          order_id: orderResponse.razorpayOrder.id,
          handler: async (response) => {
            const paymentData = {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
            };
            await dispatch(verifyPayment(paymentData));
            toast.success("Payment Successful!");
            navigate("/order-success");
          },
          prefill: {
            name: user?.name || "Guest",
            email: user?.email || "guest@example.com",
            contact: user?.phone || "9999999999",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      }
    } else if (paymentMethod === "COD") {
      await dispatch(createOrder(orderData)); 
      toast.success("Order placed successfully! Payment will be collected on delivery.");
      navigate("/order-success");
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-2">Order Summary</h3>

      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold mb-2">Shipping Address</h4>
        <p>{address?.fullName}</p>
        <p>{address?.house}</p>
        <p>
          {address?.city}, {address?.pincode}
        </p>
        <p>
          {address?.state}, {address?.country}
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold mb-2">Cart Items</h4>
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border-b py-3"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.productName}
                className="w-16 h-16 rounded object-cover border"
              />
              <div>
                <p className="font-medium">{item.productName}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <div className="text-right">₹{item.price * item.quantity}</div>
          </div>
        ))}
        <div className="flex justify-between font-bold pt-2">
          <span>Total:</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold mb-2">Payment Method</h4>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded ${
              paymentMethod === "Online"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setPaymentMethod("Online")}
          >
            Online Payment
          </button>
          <button
            className={`px-4 py-2 rounded ${
              paymentMethod === "COD"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setPaymentMethod("COD")}
          >
            Cash on Delivery
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleBuyNow}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;