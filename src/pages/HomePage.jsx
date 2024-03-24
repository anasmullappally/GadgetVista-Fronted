import Slideshow from "../components/Home/SlideShow";
import TopProducts from "../components/Home/TopProducts";
import Footer from "../components/common/Footer";

function HomePage() {
  return (
    <div className="home-wrapper flex-col ">
      <Slideshow />
      <TopProducts />
      <Footer />
    </div>
  );
}

export default HomePage;
