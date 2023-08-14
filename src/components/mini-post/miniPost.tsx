import React from "react";
import MiniContent from "./miniContent";
import MiniEnd from "./miniEnd";
import MiniTop from "./miniTop";
import { PostContent } from "@/model/PostModel";

interface PostProps {
  post: PostContent;
}

const MiniPost : React.FC<PostProps> = ({post}) => {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col lg:flex-row items-center">
        {/* <div className="w-full lg:w-1/6 border-r border-gray-500"></div> */}
        <div className="flex flex-col lg:flex-row w-full lg:w-full pl-2 pr-2 pt-2 mb-2">
          <div className="w-full h-60 lg:w-3/4 flex flex-col">
            <div className="">
              <MiniTop post={post} />
            </div>
            <div className="mb-2">
              <MiniContent content={post.content} />
            </div>
            <div className="flex-grow justify-end">
              <MiniEnd post={post} />
            </div>
          </div>
          <div className="w-full lg:w-1/4 aspect-square overflow-hidden rounded-lg min-h-60">
            <img
              className="w-full h-full object-cover"
              // style={{ minHeight: "240px" }} // Set your desired fixed height here
              src="/assets/avatar/avatar.jpeg"
              alt="Post Image"
            />
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default MiniPost;
