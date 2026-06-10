import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import { useEffect, useState } from "react";
import "./Store.css";

function Store() {
 const [products, setProducts] = useState([]);

// 🔥 TOKEN
const token = localStorage.getItem("token");

// 🔥 FETCH PRODUCTS FROM BACKEND
useEffect(() => {
  fetch("http://localhost:5000/api/products", {
    headers: {
      Authorization: token, // 🔥 ADD THIS
    },
  })
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.log(err));
}, []);

  // 🛒 SMART CART SYSTEM
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item._id === product._id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart 🛒");
  };

  return (
    <Container className="store">
      {/* Title */}
      <Typography variant="h4" className="store-title">
        <AgricultureIcon className="store-icon" />
        Fertilizer Store
      </Typography>

      <br />

      {/* Products */}
      <Grid container spacing={8}>
        {products.length === 0 ? (
          <Typography>No products available</Typography>
        ) : (
          products.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <Card className="store-card">
                {/* Image */}
                <CardMedia
                  component="img"
                  height="180"
                  image={
                    item.image ||
                    "https://via.placeholder.com/200x150?text=Product"
                  }
                  alt={item.name}
                  className="store-image"
                />

                <CardContent className="store-content">
                  <Typography variant="h6" className="store-name">
                    {item.name}
                  </Typography>

                  <Typography className="store-price">
                    ₹ {item.price}
                  </Typography>

                  <Typography variant="body2">
                    By: {item.distributor}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart 🛒
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default Store;