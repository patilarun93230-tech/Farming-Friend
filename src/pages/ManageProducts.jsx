import { Container, Typography, Card, CardContent, Button, Grid } from "@mui/material";
import "./ManageProducts.css";
function ManageProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    localStorage.setItem("products", JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Manage Products 📋</Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {products.map((p, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography>{p.name}</Typography>
                <Typography>₹{p.price}</Typography>

                <Button
                  color="error"
                  onClick={() => handleDelete(i)}
                  sx={{ mt: 1 }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ManageProducts;
