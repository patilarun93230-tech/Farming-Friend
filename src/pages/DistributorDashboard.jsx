import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./DistributorDashboard.css";

function DistributorDashboard() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome Distributor 🏪
      </Typography>

      {/* Stats */}
      <Grid container spacing={3}>
        {["Products", "Orders", "Sales", "Pending"].map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography>{item}</Typography>
                <Typography variant="h5">0</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
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