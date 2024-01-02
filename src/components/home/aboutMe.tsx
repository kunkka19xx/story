import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AboutMe() {
  const images = [
    "https://tecdn.b-cdn.net/img/new/slides/017.webp",
    "/assets/avatar/i_avatar.jpg",
  ];
  const paragraph = [
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
    "If life were predictable it would cease to be life and be without flavor. -Eleanor Roosevelt",
  ];
  return (
    <div className="w-full flex-wrap lg:flex mb-14 lg:px-4 px-2">
      <section id="id-basic-info" className="w-full lg:w-1/3">
        <div className="flex lg:flex-col">
          <div className="flex flex-col">
            <img
              src="/assets/avatar/a_avatar.png"
              className="mb-1 lg:mb-4 w-44 rounded-full lg:rounded-2xl "
              alt="Avatar"
            />
            <h5 className="lg:mb-2 mb-1 text-center lg:text-justify lg:text-xl text-sm font-medium leading-tight">
              Kunkka
            </h5>
            <p className=" text-neutral-500 text-center lg:text-justify dark:text-neutral-400 lg:text-xl text-sm">
              Application Developer
            </p>
          </div>
          <div>
            <p className="lg:mt-2 lg:ml-0 ml-1 text-xs font-light lg:font-normal lg:text-base">
              Xin chào. Tôi là <b className="text-red-700">Kunkka</b>. Nếu bạn
              là một game thủ thời 2006 thì chắc cũng biết. Kunkka là tên của 1
              hero trong tựa game Warcraft.
              <br />
              Map mà tôi thích chơi là Dota - sau này được Valve tách ra thành 1
              game riêng. <br></br>Tôi là một người hướng nội, ít bạn bè nhưng
              lại thích chia sẻ và đam mê công nghệ. Tôi rất muốn khởi nghiệp,
              tinh thần đó luôn cháy âm ỉ trong tôi. Vì tất cả các lý do trên mà
              tôi lập ra trang web này đó :D
            </p>
          </div>
        </div>
      </section>

      <section id="id-detail-info" className="w-full lg:w-2/3 lg:mt-0 mt-2">
        <Carousel
          axis="horizontal"
          infiniteLoop
          dynamicHeight={false}
          showArrows={true}
          useKeyboardArrows={true}
          autoPlay={true}
          autoFocus={false}
          showStatus={false}
          showThumbs={false}
          interval={36000}
        >
          {images.map((_, index) => (
            <div key={index} className="h-full relative block rounded-lg lg:bg-zinc-50 lg:bg-opacity-0 bg-zinc-800 bg-opacity-90">
              <img
                id="id-img-about"
                className="rounded-lg lg:h-120 h-auto opacity-90 object-cover"
                src={images[index]}
                alt=""
              />
              <div className="lg:h-120 h-auto lg:absolute bottom-8 p-8 rounded-lg">
                <h5 className="text-left mb-2 lg:mb-10 text-xl font-medium leading-tight text-white">
                  Quotes:{" "}
                  <small className="text-zinc-300 italic"> 1.{index + 1}</small>
                </h5>
                <p className=" rounded-sm text-left mb-4 lg:text-base lg:font-normal font-thin text-xs text-white bg-none bg-opacity-100 lg:bg-black lg:bg-opacity-20">
                  {paragraph[index]}
                </p>
                <p className="text-base text-white text-right mr-2">
                  <small className="text-white italic"> ~~~Kunkka~~~ Còn nhiều chuyện muốn chia sẻ, các bạn theo dõi trên trang nhé. </small>
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default AboutMe;
