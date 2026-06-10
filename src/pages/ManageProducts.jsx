import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./ManageProducts.css";

function ManageProducts() {
  const [products, setProducts] = useState([]);

  // 🔥 Fetch from backend
  const fetchProducts = () => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔥 Delete Product
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      alert("Product deleted ✅");

      fetchProducts(); // reload
    } catch (error) {
      console.log(error);
      alert("Error deleting product");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Manage Products 📋</Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {products.length === 0 ? (
          <Typography>No products found</Typography>
        ) : (
          products.map((p) => (
            <Grid item xs={12} md={4} key={p._id}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography>{p.name}</Typography>
                  <Typography>₹{p.price}</Typography>

                  <Button
                    color="error"
                    onClick={() => handleDelete(p._id)}
                    sx={{ mt: 1 }}
                  >
                    Delete
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

export default ManageProducts;