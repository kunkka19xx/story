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
    <section>
      <div className="flex flex-col lg:flex-row items-center">
        {/* <div className="w-full lg:w-1/6 border-r border-gray-500"></div> */}
        <div className="flex flex-col lg:flex-row w-full lg:w-full pl-2 pr-2 pt-2 pb-2">
          <div className="w-full lg:w-3/4 h-auto">
            <div>
              <MiniTop post={post} />
            </div>
            <div>
              <MiniContent content={post.content} />
            </div>
            <div>
              <MiniEnd />
            </div>
          </div>
          <div className="w-full lg:w-1/4 aspect-square overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover max-h-60"
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
