import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import "./AddProduct.css";

function AddProduct() {

  const handleAdd = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const price = e.target.price.value.trim();
    const image = e.target.image.value.trim();

    if (!name || !price || !image) {
      alert("Please fill all fields");
      return;
    }

    const token = localStorage.getItem("token"); // 🔥 ADD

    try {
const res = await fetch("https://farming-friend-backend.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // 🔥 ADD THIS
        },
        body: JSON.stringify({
          name,
          price,
          distributor: localStorage.getItem("userName"),
          image,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Product Added ✅");
      e.target.reset();

    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h5">Add Product ➕</Typography>

        <form onSubmit={handleAdd}>
          <TextField name="name" label="Product Name" fullWidth margin="normal" />
          <TextField name="price" label="Price" type="number" fullWidth margin="normal" />
          <TextField name="image" label="Image URL" fullWidth margin="normal" />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Add Product
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default AddProduct;