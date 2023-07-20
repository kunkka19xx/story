import Header from "@/components/header";
import Post from "@/components/post/post";
import PostDetail from "@/components/post/postDetail";
import React from "react";

function Story() {
  return (
    <section>
      <div className="z-50 pb-16">
        <Header></Header>
      </div>
      <PostDetail></PostDetail>
    </section>
  );
}

export default Story;
