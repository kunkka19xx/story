import Header from "@/components/header";
import MiniPost from "@/components/mini-post/miniPost";
import Post from "@/components/post/post";
import React from "react";

function Home() {
  return (
    <section>
      <div className="z-50 pb-16">
        <Header></Header>
      </div>
      <div className="">
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
        <MiniPost></MiniPost>
      </div>
      
      <div>
        
      </div>
    </section>
  );
}

export default Home;
