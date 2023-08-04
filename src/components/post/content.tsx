import React from "react";
import { PostContent } from "./PostContent";

interface PostContentProps {
  post: PostContent;
}

const Content: React.FC<PostContentProps> = ({ post }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <img src={post.img}></img>
    </div>
  );
};

export default Content;
