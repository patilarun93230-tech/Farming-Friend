import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import "./Orders.css";
function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Orders 📦</Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {orders.length === 0 ? (
          <Typography>No orders yet</Typography>
        ) : (
          orders.map((order, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography>Order #{i + 1}</Typography>
                  <Typography>{order.product}</Typography>
                  <Typography>Status: Pending</Typography>
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