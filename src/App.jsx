import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import SingleProduct from "./pages/SingleProduct";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";
import UserProfilePage from "./pages/UserProfilePage";
// import Login from "./components/auth/login";
function App() {
  return (
    <>
      {/* <Login />; */}
      <header>
        <Header />
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductsPage />} />
            <Route path="/shop/:id" element={<SingleProduct />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
