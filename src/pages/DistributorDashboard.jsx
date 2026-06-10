import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DistributorDashboard.css";

function DistributorDashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("token"); // 🔥 JWT

  // 🔥 FETCH DATA
  useEffect(() => {
    // PRODUCTS
    fetch("http://localhost:5000/api/products", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => console.log(err));

    // ORDERS
    fetch("http://localhost:5000/api/orders", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          setOrders([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // 📊 SAFE CALCULATIONS
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === "Pending").length;

  const totalSales = orders.reduce((acc, o) => acc + (o.total || 0), 0);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome Distributor 🏪
      </Typography>

      {/* Stats */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card><CardContent>
            <Typography>Products</Typography>
            <Typography variant="h5">{totalProducts}</Typography>
          </CardContent></Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card><CardContent>
            <Typography>Orders</Typography>
            <Typography variant="h5">{totalOrders}</Typography>
          </CardContent></Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card><CardContent>
            <Typography>Sales</Typography>
            <Typography variant="h5">₹ {totalSales}</Typography>
          </CardContent></Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card><CardContent>
            <Typography>Pending</Typography>
            <Typography variant="h5">{pendingOrders}</Typography>
          </CardContent></Card>
        </Grid>
      </Grid>

      {/* Actions */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item>
          <Button variant="contained" component={Link} to="/add-product">
            Add Product
          </Button>
        </Grid>

        <Grid item>
          <Button variant="outlined" component={Link} to="/manage-products">
            Manage Products
          </Button>
        </Grid>

        <Grid item>
          <Button variant="outlined" component={Link} to="/orders">
            View Orders
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DistributorDashboard;