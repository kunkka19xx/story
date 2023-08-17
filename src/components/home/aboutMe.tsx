import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AboutMe() {
  const images = [
    "https://tecdn.b-cdn.net/img/new/slides/017.webp",
    "/assets/avatar/i_avatar.jpg",
  ];
  const paragraph = [
    "Năm 2018, Tôi đặt chân qua nhật với hành trang là tấm bằng khá đại học Bách Khoa Hà Nội và trình độ tiếng Nhật tốt hơn N3 1 chút. Tôi vốn tốt nghiệp ngành cơ khí - cơ điện tử BKHN, năm đó - 2012 tôi thi đại học theo phong trào, thấy bạn đăng ký gì thì mình đăng ký theo mà không hề tìm hiểu xem mình thích gì. Thật ra ý định của tôi là thi học viện ngân hàng. Vì tôi nghe nói học nhàn, sau này đi làm cũng nhàn. Nhưng không được mẹ tôi chấp nhận :D vì nhân lực ngành ngân hàng khi đó đang dần bão hoà, và cũng không hợp với 1 đứa con trai, lại xuất thân từ gia đình bần nông. Sau khi qua Nhật, ngày ngày làm việc như 1 cái máy, tôi không tìm thấy niềm vui trong công việc của mình. (Đã có lúc tôi còn có ý định làm youtube - quả là ngây thơ và fomo). Cộng hưởng thêm việc các đồng nghiệp người Việt của tôi khá an phận, không có mục tiêu rõ ràng ngoài việc tăng ca nhiều để kiếm tiền… Tôi thấy mông lung và stress. Rồi tôi đã dành thời gian suy nghĩ xem con đường tiếp theo của mình sẽ như thế nào.",
    "Tôi rà soát lại điểm mạnh của mình từ khi còn đi học, và đó chỉ là toán… Hồi đại học tôi cũng được học 1 số môn lập trình như lập trình đại cương, tự động hoá, ghép nối các phần tử trong máy tính, lập trình nhúng, arduino… Tôi nhớ lại và thấy mình khá có tư duy trong các môn học đó rồi tôi lao đầu và bắt đầu học lại lập trình với 2 quyển sách về java và oracle database mua ở bookoff. Càng học, càng tìm hiểu nhiều tôi lại càng thấy thích và đã clone được game flappy bird của Nguyễn Hà Đông. Tôi đi phỏng vấn để có 1 công việc lập trình…nhưng thật khó ở Nhật nếu bạn không có kinh nghiệm (thời 2018, hiện tại tôi thấy khá là dễ dàng để có 1 vị trí fresher). Thực ra tôi cũng đã được 2,3 công ty trao offer nhưng vị trí chỉ là tester… Vì vậy tôi đánh bạo phỏng vấn job developer ở Việt Nam, quyết định quay lại Việt Nam để trau dồi kinh nghiệm và được cọ sát với đam mê thật nhiều. Khi đó visa của tôi còn hạn trên 3 năm nữa ( tổng 5 năm). Đó là 1 quyết định khó khăn khi tôi đã phải hạ thu nhập của mình xuống 5 lần, từ bỏ visa của 1 nước phát triển để quay về Việt Nam - bắt đầu 1 hành trình gian nan và rất chật vật…. (còn tiếp)",
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
            <h5 className="lg:mb-2 mb-1 lg:text-xl text-sm font-medium leading-tight">
              Kunkka
            </h5>
            <p className=" text-neutral-500 dark:text-neutral-400 lg:text-xl text-sm">
              Application Developer
            </p>
          </div>
          <div>
            <p className="lg:mt-2 lg:ml-0 ml-1 text-xs font-thin lg:font-normal lg:text-base">
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

      <section id="id-detail-info" className="w-full lg:w-2/3">
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
            <div key={index} className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <img
                id="id-img-about"
                className="rounded-lg lg:h-120 h-auto opacity-70 object-cover"
                src={images[index]}
                alt=""
              />
              <div className="lg:absolute top-0 p-6 lg:bg-none bg-zinc-800 bg-opacity-90">
                <h5 className="text-left mb-2 lg:mb-10 text-xl font-medium leading-tight text-white">
                  About me:{" "}
                  <small className="text-zinc-300 italic"> 1.{index + 1}</small>
                </h5>
                <p className="text-left mb-4 lg:text-base lg:font-normal font-thin text-xs text-white bg-none bg-opacity-100 lg:bg-black lg:bg-opacity-20">
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
