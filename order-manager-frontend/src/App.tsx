import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { LayoutApplication } from "./layout";
import { Products } from "./pages/Products";
import { CartProvider } from "./context/CartContext";
import { Checkout } from "./pages/Checkout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LayoutApplication />} >
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin/orders" element={<></>} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
