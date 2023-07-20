import Header from "@/components/header";
import Post from "@/components/post/post";
import React from "react";

function Top() {
  return (
    <div>
      <div className="sticky top-0 pb-16">
        <Header></Header>
      </div>
      <div className="flex flex-row">
        <div className="w-1/6 border-r border-gray-500"></div>
        <div className="w-2/3 pl-2 pr-2">
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>

        </div>
        <div className="w-1/6 border-l border-gray-500"></div>
      </div>
    </div>
  );
}


export default Top;
