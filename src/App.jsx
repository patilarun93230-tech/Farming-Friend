import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Guidance from "./pages/Guidance";
import CropDetail from "./pages/CropDetail";
import Checkout from "./pages/Checkout";
import VideoCall from "./pages/VideoCall";
import Weather from "./pages/Weather";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/crop/:name" element={<CropDetail />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protected Routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route path="/videocall" element={<VideoCall />} />

        <Route path="/weather" element={<Weather />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
