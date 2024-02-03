import { useState, useEffect } from 'react';

const Slideshow = () => {
    const slides = [
        { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/837/468/965/wavy-dark-shadow-light-wallpaper-preview.jpg' },
        { imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/678/506/desktop-wallpaper-backgrounds-flex-banner-design-banner-design.jpg' },
        { imageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230217/pngtree-blue-wavy-banner-background-blank-image_1608934.jpg' },
    ];
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        if (slideIndex !== undefined) showSlides(slideIndex);
    }, [slideIndex]);

    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => {
            if (slides.length >= prevIndex + n) {
                return 0;
            } else {
                return prevIndex + n;
            }
        });
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    const showSlides = (n) => {
        let i;
        const slidesElements = document.getElementsByClassName('mySlides');
        const dots = document.getElementsByClassName('dot');

        if (!slidesElements || slidesElements.length === 0 || !dots || dots.length === 0) {
            console.error("No slides or dots found");
            return;
        }

        if (n > slidesElements.length) {
            setSlideIndex(1);
            n = 1; // Reset n to 1 if it goes beyond the length
        }

        if (n < 1) {
            setSlideIndex(slidesElements.length);
            n = slidesElements.length; // Reset n to the last index if it goes below 1
        }

        for (i = 0; i < slidesElements.length; i++) {
            slidesElements[i].style.display = 'none';
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }

        slidesElements[n - 1].style.display = 'block';
        dots[n - 1].className += ' active';
    };

    return (
        <div className="slideshow-container">
            {slides.map((slide, index) => (
                <div key={index} className={`mySlides fade`}>
                    <img src={slide.imageUrl} style={{ width: '100%' }} alt={`Slide ${index + 1}`} />
                    <div className="dots-container">
                        {slides.map((_, dotIndex) => (
                            <span
                                key={dotIndex}
                                className={`dot ${dotIndex === index ? 'active' : ''}`}
                                onClick={() => currentSlide(dotIndex + 1)}
                            ></span>
                        ))}
                    </div>
                </div>
            ))}

            <a className="prev" onClick={(e) => { e.preventDefault(); plusSlides(-1); }}>
                ❮
            </a>
            <a className="next" onClick={(e) => { e.preventDefault(); plusSlides(1); }}>
                ❯
            </a>
        </div>
    );
};

export default Slideshow;

