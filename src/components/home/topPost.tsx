import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  images: string[];
  captions: string[];
}
const TopPost: React.FC<CarouselProps> = ({ images, captions }) => {

  return (
    <div className="w-full lg:w-11/12 self-center mt-5">
      <div>
        <h2 className="mb-10 text-center text-3xl font-bold ">Top Posts</h2>
      </div>
      <div className="">
      <Carousel
        axis="horizontal"
        infiniteLoop
        dynamicHeight={false}
        showArrows={true}
        useKeyboardArrows={true}
        autoPlay={true}
        autoFocus
        showStatus={false}
        showThumbs={false}
        // renderArrowNext={customNextArrow}
        // renderArrowPrev={customPrevArrow}
      >
        {images.map((image, index) => (
          <div key={index} className="relative">
            <a href="detail/1">
            <div className="w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover rounded-md"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-20 text-white">
              <h2 className="mb-2 font-semibold text-xl">Title</h2>
              <p className="mb-6 text-sm text-center">{captions[index]}</p>
            </div>
            </a>
          </div>
          
        ))}
      </Carousel>
      </div>
      
    </div>
  );
};

export default TopPost;
