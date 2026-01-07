import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  // Get cart data from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <Container className="cart-container">
      <Typography variant="h4" className="cart-title">
        Your Cart 🧺
      </Typography>

      {/* If cart is empty */}
      {cart.length === 0 ? (
        <Typography className="empty-cart">No items added to cart</Typography>
      ) : (
        <>
          {/* Cart Items */}
          {cart.map((item, index) => (
            <Card className="cart-card" key={index}>
              <CardContent className="cart-card-content">
                <img src={item.image} alt={item.name} className="cart-image" />

                <div className="cart-details">
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography color="text.secondary">
                    Price: ₹{item.price}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Checkout Button */}
          <Button
            variant="contained"
            color="success"
            component={Link}
            to="/checkout"
            className="checkout-btn"
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
