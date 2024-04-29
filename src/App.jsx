import { lazy, Suspense, useContext } from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import "./App.css";
import { useSelector } from 'react-redux'
import Header from "./components/common/Header";
import NotFoundPage from "./pages/NotFoundPage";
import { jwtDecode } from "jwt-decode";
import { AppContext } from "./contexts/GlobalContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./components/loadings/Loading";
import 'rc-tooltip/assets/bootstrap_white.css';
import 'react-image-gallery/styles/css/image-gallery.css';

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
const AddVariant = lazy(() => import("./pages/AddVariant"));
const Login = lazy(() => import("./components/auth/Index"));

function App() {
  const { openSideBar, setOpenSideBar } = useContext(AppContext)
  const user = useSelector(state => state.auth.user);
  const userRoleCheck = () => {
    const token = localStorage.getItem("token")
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.role
    } else {
      return null
    }
  }
  const isAdmin = userRoleCheck() === "admin";
  const isAuthenticated = !!user;


  return (
    <>
      <Router>
        <Header user={user} isAdmin={isAdmin} setOpenSideBar={setOpenSideBar} />
        <main className="mt-3 flex">
          {isAdmin && (
            <Suspense fallback={<Loading />}>
              <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
            </Suspense>
          )}
          <Suspense fallback={<Loading />}>

            <Routes>
              {!isAuthenticated && <Route path="/login" element={<Login />} />}
              {!isAdmin ?
                <>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ProductsPage />} />
                  <Route path="/shop/:productId/" element={<SingleProduct />} />
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
                  {/* <Route path="/add-brand" element={<AddProduct />} /> */}
                  <Route path="/add-product" element={<AddProduct />} />
                  <Route path="/add-variant" element={<AddVariant />} />
                  {/* Add the 404 route */}
                  <Route path="*" element={<NotFoundPage />} />
                </>
              }
              {isAuthenticated && <Route path="/login" element={<Navigate to="/" />} />}
            </Routes>

          </Suspense>
          <ToastContainer />
        </main>
      </Router>
    </>
  );
}

export default App;
