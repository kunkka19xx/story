import React, { useState } from "react";
import { PostContent } from "../../model/PostModel";

/**
 * Post header
 * Have author name, avatar, ....
 * @returns
 */

interface PostContentProps {
  post: PostContent;
}

const Info: React.FC<PostContentProps> = ({ post }) => {
  var author = post.author;

  const handleClick = () => {};

  return (
    <section className="mb-3 mt-2">
      {/* Title */}
      <div>
        <h1 className="text-2xl text-stone-600 mb-2">
          {post.title.toUpperCase()}
        </h1>
      </div>
      {/* author infor */}
      <div className="flex flex-row items-center mt-3 mb-3">
        <div className="rounded-full overflow-hidden w-12 h-12">
          <img src="/assets/avatar/avatar.jpeg" alt="" className="" />
        </div>
        <div className="ml-3">
          <div className="flex items-center">
            <span className="mr-2">{author}</span>
            <button
              onClick={handleClick}
              className="w-26 h-6 flex items-center bg-white-500 border border-black hover:bg-blue-500 hover:font-bold text-black font-thin py-2 px-4 rounded"
            >
              Follow
            </button>
          </div>
          <div className="flex flex-row">
            <div className="italic text-sm text-stone-700 mr-2" suppressHydrationWarning>Last update: {post.createdDate.toLocaleString()},</div>
            <div className="italic text-sm text-stone-700 mr-2">{post.length} mins to read</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
