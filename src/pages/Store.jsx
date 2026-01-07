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
import "./Store.css";

const products = [
  {
    id: 1,
    name: "Urea",
    price: 300,
    image:
      "https://th.bing.com/th/id/R.e8ced19144d4121fb83b99a804eb6fa5?rik=t08Pde20UWEVCQ&riu=http%3a%2f%2fsakthifertilizers.com%2fwp-content%2fuploads%2f2016%2f11%2fIFFCO-%e2%80%93-Urea.jpg&ehk=GU%2fJmNL1fAkyXfddIFhnCKGA64pLQE6FTggvbXlXkLw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "DAP",
    price: 1200,
    image:
      "https://tiimg.tistatic.com/fp/1/007/549/eco-friendly-paras-dap-fertilizer-for-overall-growth-of-plants-and-gardening-264.jpg",
  },
  {
    id: 3,
    name: "NPK",
    price: 450,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/4/300813939/UL/MB/RL/53645770/agriculture-npk-fertilizers-500x500.jpg",
  },
  {
    id: 4,
    name: "SSP",
    price: 300,
    image:
      "https://mahadhan.co.in/wp-content/uploads/2017/05/single-phosper-sulfate-768x816.png",
  },
  {
    id: 5,
    name: "Potas",
    price: 1200,
    image: "https://www.kalarickal.co.in/img/products/agri2.jpg",
  },
  {
    id: 6,
    name: "Amoniyam",
    price: 450,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.8Ac4uMjbdjJWj6_1bdp_lQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 7,
    name: "Sulphate",
    price: 300,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/4/414794714/OT/GZ/TH/151688776/ammonium-sulphate-fertilizer-1000x1000.jpeg",
  },
  {
    id: 8,
    name: "TSP",
    price: 1200,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/4/408474112/OA/VF/CA/6634883/50kg-shaswat-fertilizer-500x500.jpg",
  },
  {
    id: 9,
    name: "Potash",
    price: 2000,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/1/374825988/PC/LE/SY/91226901/fortified-fertilizers-1000x1000.png",
  },
  {
    id: 10,
    name: "4:3:4",
    price: 1200,
    image:
      "https://www.kindpng.com/picc/m/420-4203402_fertilizer-transparent-hd-png-download.png",
  },
  {
    id: 11,
    name: "Sol-k",
    price: 450,
    image:
      "https://krishibazaar.in/public/frontend/images/product-img/2AOrn1739785748.jpg",
  },
  {
    id: 12,
    name: "Aatank",
    price: 1200,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.vCzOz6BC-q_hCA5S60iutAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 13,
    name: "Pesticide",
    price: 450,
    image:
      "https://petaniagronasa.files.wordpress.com/2015/06/produk-pertanian-nasa.png",
  },
  {
    id: 14,
    name: "Combo",
    price: 3000,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/3/401935114/GG/RQ/IJ/4503119/biopesticide-500x500.jpg",
  },
  {
    id: 15,
    name: "Allraunder",
    price: 1200,
    image:
      "https://www.mandegarcommerce.com/wp-content/uploads/2022/07/Agriculture-Kitnashak.jpg",
  },
  {
    id: 16,
    name: "Mira 71",
    price: 450,
    image:
      "https://5.imimg.com/data5/MC/WJ/WF/SELLER-987018/excel-mera-71-1000x1000.jpg",
  },
  {
    id: 17,
    name: "All-In-One",
    price: 7000,
    image: "https://ajaybiotech.com/images/banner-blog-products-mobile.jpg",
  },
  {
    id: 18,
    name: "Yash Pump",
    price: 1200,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/12/IR/JM/AX/145140892/3-in-1-battery12x8-500x500-1000x1000.jpg",
  },
  {
    id: 19,
    name: "Patil Pump",
    price: 4500,
    image:
      "https://krishimachine.com/wp-content/uploads/2022/09/kitnashak-spray-machine-Battery.jpg",
  },
];

function Store() {
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Thank You Product added to cart");
  };

  return (
    <Container className="store">
      {/* Title */}
      <Typography variant="h4" className="store-title">
        <AgricultureIcon className="store-icon" />
        Fertilizer Store
      </Typography>
      <br></br>
      {/* Products */}
      <Grid container spacing={8}>
        {products.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className="store-card">
              {/* Image */}
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.name}
                className="store-image"
              />

              <CardContent className="store-content">
                <Typography variant="h6" className="store-name">
                  {item.name}
                </Typography>

                <Typography className="store-price">₹ {item.price}</Typography>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Store;
