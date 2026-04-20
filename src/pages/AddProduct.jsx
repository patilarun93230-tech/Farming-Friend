import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import "./AddProduct.css";

function AddProduct() {
  const handleAdd = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;

    const products = JSON.parse(localStorage.getItem("products")) || [];

    products.push({ name, price });

    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Added!");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h5">Add Product ➕</Typography>

        <form onSubmit={handleAdd}>
          <TextField name="name" label="Product Name" fullWidth margin="normal" />
          <TextField name="price" label="Price" fullWidth margin="normal" />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Add Product
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default AddProduct;