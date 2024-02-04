// import { useRef } from 'react';
import TopProduct from './TopProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import Slider from 'react-slick';
// import Responsive from './Rslider';
// import Rslider from './Rslider';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    color: black !important;
  }
`;

const TopProducts = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // Update the array with your actual data

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false, // Hide dots on small screens
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false, // Hide dots on extra small screens
                },
            },
        ],
    };

    return (
        <div className="top-products">
            <p className="heading">Top Products</p>
            <div className="products-wrapper">
                <StyledSlider {...settings} className="custom-slider">
                    {arr.map((item) => (
                        <TopProduct key={item} />
                    ))}
                </StyledSlider>
            </div>
        </div>
    );
};

export default TopProducts;
