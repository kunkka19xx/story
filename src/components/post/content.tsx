import React from "react";
import { PostContent } from "../../model/PostModel";

interface ContentProps {
  content: PostContent['content'] | undefined;
}


const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div>
    {content && content.map((item) => (
    <div key={item.id}>
      <div dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, "<br>") }}></div>
      <img src={item.img}></img>
    </div>
    ))}
    </div>
  );
};

export default Content;
