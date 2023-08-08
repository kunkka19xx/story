import { PostContent } from "@/model/PostModel";
import React, { useState } from "react";

interface PostProps {
  post: PostContent;
}

const MiniTop: React.FC<PostProps> = ({ post }) => {
  const handleClick = () => {
    //follow
    // you can open a pop-up and processing the follow function there
  };

  return (
    <section className="mb-2 mt-2">
      <div className="flex flex-row items-center mb-2">
        <div className="rounded-full overflow-hidden w-8 h-8">
          <img src="/assets/avatar/avatar.jpeg" alt="" className="" />
        </div>
        <div className="ml-3">
          <div className="flex items-center">
            <span className="mr-2">{post.author}</span>
            <button
              onClick={handleClick}
              className="text-sm w-26 h-5 flex items-center bg-white-500 border border-black hover:bg-blue-500 hover:font-bold text-black font-thin py-2 px-4 rounded"
            >
              Follow
            </button>
          </div>
          <div>Post information</div>
        </div>
      </div>
      {/* Title */}
      <div className="">
        <h1 className="text-lg mb-2 text-neutral-600 font-serifs italic">
          <a href={"/detail/".concat(post.id.toString())}> {post.title}</a>
        </h1>
      </div>
    </section>
  );
};

export default MiniTop;
