import { Container, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleOrder = async () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (!name || !mobile || !address) {
      alert("Please fill all details");
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const token = localStorage.getItem("token"); // 🔥 JWT TOKEN

    try {
const res = await fetch("https://farming-friend-backend.onrender.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // 🔥 SEND TOKEN
        },
        body: JSON.stringify({
          items: cart,
          total,
          userName: name,
          mobile,
          address,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Order Placed Successfully ✅");

      // 🧹 clear cart
      localStorage.removeItem("cart");

      // 🔁 redirect home
      navigate("/");

    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <Container className="checkout">
      <Typography variant="h4">Checkout 🧾</Typography>

      <TextField
        label="Farmer Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        label="Mobile Number"
        fullWidth
        margin="normal"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <TextField
        label="Village / Address"
        fullWidth
        margin="normal"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <Typography className="payment">
        Payment Method: Cash on Delivery 💰
      </Typography>

      <br />

      <Button
        variant="contained"
        color="success"
        fullWidth
        onClick={handleOrder}
      >
        Place Order
      </Button>
    </Container>
  );
}

export default Checkout;