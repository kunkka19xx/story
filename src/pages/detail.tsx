import Header from "@/components/header";
import PostDetail from "@/components/post/postDetail";
import React from "react";

function Detail() {
  return (
    <section>
      <div className="z-50 pb-16">
        <Header></Header>
      </div>
      <div>
        <PostDetail></PostDetail>
      </div>
    </section>
  );
}

export default Detail;
