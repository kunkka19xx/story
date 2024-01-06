import React from "react";
import { PostContent } from "../../model/PostModel";
import { SERVER_PATH } from "@/constants/server";
import { convertDriveLinkToDirectLink } from "@/utils/util";

interface ContentProps {
  content: PostContent["content"] | undefined;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div>
      {content &&
        content.map((item) => (
          <div key={item.id} className="mb-4">
            <div
              className="mb-3"
              dangerouslySetInnerHTML={{
                __html: item.content.replace(/\n/g, "<br>"),
              }}
            ></div>
            {/* <img src={`${item.image.slice(item.image.lastIndexOf("/assets"))}`}></img> */}

            {typeof item.image === "string" && (
              <img
                className="sm:w-11/12 w-full mx-auto rounded-md"
                src={
                  // `${item.image.slice(item.image.lastIndexOf("/assets"))}`
                  // convertDriveLinkToDirectLink(item.image)
                  item.image
                }
                alt="Item Image"
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default Content;
