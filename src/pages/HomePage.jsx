import Slideshow from "../components/Home/SlideShow";
import TopProducts from "../components/Home/TopProducts";

function HomePage() {
  // const arr = [
  //   {
  //     img: "",
  //     button: "Buy Now"
  //   },
  //   {
  //     img: "",
  //     button: "Buy Now 1"
  //   },
  //   {
  //     img: "",
  //     button: "Buy Now 2"
  //   }
  // ]
  return (
    <>
      <div className="home-wrapper">
        <Slideshow />
        <TopProducts />
      </div>
    </>
  );
}

export default HomePage;
