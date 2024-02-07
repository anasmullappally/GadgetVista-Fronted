import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import SingleProduct from "./pages/SingleProduct";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
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
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
