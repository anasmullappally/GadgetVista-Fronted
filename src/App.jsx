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
import AdminHomePage from "./pages/AdminHomePage";
import SideBar from "./components/common/SideBar";
import AdminHeader from "./components/common/AdminHeader";
import { useState } from "react";
import AdminProductsPage from "./pages/AdminProductsPage";
import AddProduct from "./pages/AddProduct";
import Login from "./components/auth/Login";
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.auth.user);
  const isAdmin = user?.role === "admin"
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <>

      <header className={`${isAdmin ? 'admin-header mt-2' : 'user-header'}`}>
        {user && isAdmin ?
          <AdminHeader setOpenSideBar={setOpenSideBar} />
          :
          < Header user={user} />
        }
      </header >
      <main className="mt-3 flex">
        {isAdmin && <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />}
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductsPage />} />
            <Route path="/shop/:id" element={<SingleProduct />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/admin/dashboard" element={<AdminHomePage />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
