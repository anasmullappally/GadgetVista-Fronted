import "./App.css";
import Header from "./components/common/Header";
import SingleProduct from "./pages/SingleProduct";
// import HomePage from "./pages/HomePage";
// import ProductsPage from "./pages/ProductsPage";
// import Login from "./components/auth/login";
function App() {
  return (
    <>
      {/* <Login />; */}
      <header>
        <Header />
      </header>
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        <SingleProduct />
      </main>
    </>
  );
}

export default App;
