import { Container, TextField, Typography, Button } from "@mui/material";
import "./Checkout.css";

function Checkout() {
  const handleOrder = () => {
    alert("Order placed successfully 🌾Thank You...");
    localStorage.removeItem("cart");
  };

  return (
    <Container className="checkout">
      <Typography variant="h4">Checkout 🧾</Typography>

      <TextField label="Farmer Name" fullWidth margin="normal" />
      <TextField label="Mobile Number" fullWidth margin="normal" />
      <TextField label="Village / Address" fullWidth margin="normal" />

      <Typography className="payment">
        Payment Method: Cash on Delivery💰
      </Typography>
      <br></br>
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
