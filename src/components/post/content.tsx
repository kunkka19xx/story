import React from "react";
import { PostContent } from "../../model/PostModel";
import { SERVER_PATH_LOCAL } from "@/constants/server";

interface ContentProps {
  content: PostContent["content"] | undefined;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div>
      {content &&
        content.map((item) => (
          <div key={item.id} className="mb-4">
            <div className="mb-3"
              dangerouslySetInnerHTML={{
                __html: item.content.replace(/\n/g, "<br>"),
              }}
            ></div>
            {/* <img src={`${item.image.slice(item.image.lastIndexOf("/assets"))}`}></img> */}

            {typeof item.image === 'string' && (
            <img className="sm:w-11/12 w-full mx-auto" src={`${item.image.slice(item.image.lastIndexOf("/assets"))}`} alt="Item Image" />
          )}
          </div>
        ))}
    </div>
  );
};

export default Content;
