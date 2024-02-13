
import PropTypes from "prop-types";

function Carousel({ img1, img2, img3, img4 }) {
    let images = [img1, img2, img3, img4];

    let defaultTransform = 0;
    function goNext() {
        defaultTransform = defaultTransform - 398;
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
            defaultTransform = 0;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }

    function goPrev() {
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
        else defaultTransform = defaultTransform + 398;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }

    return (
        <div className="flex items-center justify-center w-full h-min py-12 sm:py-8 border-solid border-2 border-white">
            <div className="w-full relative flex items-center justify-center">
                <button
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    onClick={goPrev}
                >
                    <svg
                        className="dark:text-gray-900"
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 1L1 7L7 13"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <div
                        id="slider"
                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                    >
                        {images.map((img, index) => (
                            <div key={index} className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img
                                    src={img}
                                    alt={img}
                                    className="object-cover object-center w-full lg:w-96"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    onClick={goNext}
                >
                    <svg
                        className="dark:text-gray-900"
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L7 7L1 13"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
Carousel.propTypes = {
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    img3: PropTypes.string.isRequired,
    img4: PropTypes.string.isRequired,
};

export default Carousel;
