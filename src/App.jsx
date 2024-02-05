import "./App.css";
import Header from "./components/common/Header";
// import HomePage from "./pages/HomePage";
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
        {/* <HomePage /> */}
        <ProductsPage />
      </main>
    </>
  );
}

export default App;
