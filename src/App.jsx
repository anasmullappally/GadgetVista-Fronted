import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import "./App.css";
import { useSelector } from 'react-redux'
import Header from "./components/common/Header";
import NotFoundPage from "./pages/NotFoundPage";

const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const WishListPage = lazy(() => import("./pages/WishListPage"));
const UserProfilePage = lazy(() => import("./pages/UserProfilePage"));
const AdminHomePage = lazy(() => import("./pages/AdminHomePage"));
const SideBar = lazy(() => import("./components/common/SideBar"));
const AdminProductsPage = lazy(() => import("./pages/AdminProductsPage"));
const AddProduct = lazy(() => import("./pages/AddProduct"));
const Login = lazy(() => import("./components/auth/Index"));

function App() {
  const user = useSelector(state => state.auth.user);
  const isAdmin = user?.role === "admin";
  const isAuthenticated = !!user;

  const [openSideBar, setOpenSideBar] = React.useState(false);

  return (
    <>
      <Header user={user} isAdmin={isAdmin} setOpenSideBar={setOpenSideBar} />
      <main className="mt-3 flex">
        {isAdmin && (
          <Suspense fallback={<div>Loading...</div>}>
            <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
          </Suspense>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Routes>
              {!isAuthenticated && <Route path="/login" element={<Login />} />}
              {!isAdmin ?
                <>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ProductsPage />} />
                  <Route path="/shop/:id" element={<SingleProduct />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/wishlist" element={<WishListPage />} />
                  <Route path="/profile" element={<UserProfilePage />} />
                  {/* Add the 404 route */}
                  <Route path="*" element={<NotFoundPage />} />
                </> :
                <>
                  <Route path="/" element={<AdminHomePage />} />
                  <Route path="/products" element={<AdminProductsPage />} />
                  <Route path="/add-product" element={<AddProduct />} />
                  {/* Add the 404 route */}
                  <Route path="*" element={<NotFoundPage />} />
                </>
              }
              {isAuthenticated && <Route path="/login" element={<Navigate to="/" />} />}
            </Routes>
          </Router>
        </Suspense>
      </main>
    </>
  );
}

export default App;
