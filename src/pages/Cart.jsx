import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  // 🔥 Load cart
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // 🔥 Update cart helper
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // ➕ Increase Quantity
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item._id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateCart(updated);
  };

  // ➖ Decrease Quantity
  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updated);
  };

  // ❌ Remove Item
  const removeItem = (id) => {
    const updated = cart.filter((item) => item._id !== id);
    updateCart(updated);
  };

  // 💰 Total Price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="cart-container">
      <Typography variant="h4" className="cart-title">
        Your Cart 🧺
      </Typography>

      {cart.length === 0 ? (
        <Typography className="empty-cart">
          No items added to cart
        </Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Card className="cart-card" key={item._id}>
              <CardContent className="cart-card-content">
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/100"
                  }
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-details">
                  <Typography variant="h6">{item.name}</Typography>

                  <Typography>
                    Price: ₹{item.price}
                  </Typography>

                  <Typography>
                    Quantity: {item.quantity}
                  </Typography>

                  {/* 🔥 Controls */}
                  <Button onClick={() => increaseQty(item._id)}>+</Button>
                  <Button onClick={() => decreaseQty(item._id)}>-</Button>

                  <Button
                    color="error"
                    onClick={() => removeItem(item._id)}
                  >
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* 💰 Total */}
          <Typography variant="h5" sx={{ mt: 3 }}>
            Total: ₹ {total}
          </Typography>

          {/* Checkout */}
          <Button
            variant="contained"
            color="success"
            component={Link}
            to="/checkout"
            className="checkout-btn"
            sx={{ mt: 2 }}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;