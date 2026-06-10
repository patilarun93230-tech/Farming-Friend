import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  // 🔥 TOKEN
  const token = localStorage.getItem("token");

  // 🔥 Fetch from backend
  const fetchOrders = () => {
    fetch("http://localhost:5000/api/orders", {
      headers: {
        Authorization: token, // 🔥 ADD
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // 🔥 Mark Complete Function
  const markComplete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // 🔥 ADD
        },
        body: JSON.stringify({ status: "Completed" }),
      });

      alert("Order Completed ✅");

      fetchOrders(); // 🔥 reload data
    } catch (error) {
      console.log(error);
      alert("Error updating order");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Orders 📦</Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {orders.length === 0 ? (
          <Typography>No orders yet</Typography>
        ) : (
          orders.map((order, i) => (
            <Grid item xs={12} md={4} key={order._id}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6">
                    Order #{i + 1}
                  </Typography>

                  <Typography>👤 {order.userName}</Typography>
                  <Typography>📞 {order.mobile}</Typography>
                  <Typography>📍 {order.address}</Typography>
                  <Typography>💰 Total: ₹ {order.total}</Typography>

                  <Typography
                    color={order.status === "Pending" ? "orange" : "green"}
                  >
                    Status: {order.status}
                  </Typography>

                  {/* 🔥 BUTTON */}
                  {order.status === "Pending" && (
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ mt: 2 }}
                      onClick={() => markComplete(order._id)}
                    >
                      Mark Complete
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default Orders;