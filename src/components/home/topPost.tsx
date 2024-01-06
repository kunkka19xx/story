import { SERVER_PATH } from "@/constants/server";
import { PostContent } from "@/model/PostModel";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  images: string[];
  captions: string[];
}
const TopPost: React.FC<CarouselProps> = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchTopPost();
  }, []);

  async function fetchTopPost() {
    try {
      const response = await fetch(`${SERVER_PATH}/post/public/top`);
      const data = await response.json();
      if (response.status !== 200) {
        const message = data.message;
        const cause = data.cause;
        window.location.href = `/error?message=${encodeURIComponent(
          message
        )}&cause=${encodeURIComponent(cause)}`;
      }
      setPosts(data["data"]);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  }

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
          {posts.map((_, index) => (
            <div key={index} className="relative">
              <a href={`detail/${posts[index]["id"]}`}>
                <div className="w-full h-full">
                  <img
                    src={
                      posts[index]["image"]
                        ? posts[index]["image"]
                        : // as string).slice(
                          //   (posts[index]["image"] as string).lastIndexOf("/assets")
                          //   )
                          "https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg"
                    }
                    alt={`Slide ${index + 1}`}
                    className="w-full h-96 object-cover rounded-md"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-20 text-white">
                  <h2 className="mb-2 font-semibold text-xl">
                    {posts[index]["title"]}
                  </h2>
                  <div
                    className="mb-6 text-sm text-center"
                    dangerouslySetInnerHTML={{
                      __html: (posts[index]["miniContent"] as string)
                        .slice(0, 50).concat("...")
                        .replace(/\n/g, "<br>"),
                    }}
                  >
                  </div>
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
