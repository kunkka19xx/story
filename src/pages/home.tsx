import Footer from "@/components/footer";
import Header from "@/components/header";
import MiniPost from "@/components/mini-post/miniPost";
import Post from "@/components/post/post";
import React from "react";

function Home() {
  const miniPostData = new Array(9).fill(null);

  return (
    <section>
      <div className="z-50 pb-16">
        <Header></Header>
      </div>
      <div className="">
        {/* <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost> */}
        {miniPostData.map((_, index) => (
          <MiniPost key={index} />
        ))}
      </div>

      <Footer></Footer>
    </section>
  );
}

export default Home;
