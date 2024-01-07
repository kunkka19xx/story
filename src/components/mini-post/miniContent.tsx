import { Content, PostContent } from "@/model/PostModel";
import { MAX_CHARACTERS, MAX_LINES, getTruncatedContent } from "@/utils/util";
import React, { useEffect, useState } from "react";

interface ContentProps {
  miniContent: PostContent["miniContent"];
}

const MiniContent: React.FC<ContentProps> = ({ miniContent }) => {
  // const truncateContent = (text: string, length: number) => {
  //   const words = text.split(" ");
  //   const truncatedText = words.slice(0, length).join(" ");
  //   return truncatedText +  "...";
  // };

  // const setContent = (content : Content[]) => {
  //   if (!content || content.length ===  0) return "";
  //   var finalContent = ""
  //   for(let i = 0; i< content.length; i++){
  //     if(finalContent.length > 50) return truncateContent(finalContent, 50);
  //     finalContent = finalContent.concat(content[i].content);
  //   }
  //   return truncateContent(finalContent, 50);
  // }

  

  const truncatedContent = getTruncatedContent(
    miniContent,
    MAX_CHARACTERS,
    MAX_LINES
  );

  return (
    <div>
      <div className="mr-3">
        <div
          className="lg:text-base text-xs font-light"
          dangerouslySetInnerHTML={{
            __html: truncatedContent.concat("...").replace(/\n/g, "<br>"),
          }}
        ></div>
      </div>
    </div>
  );
};

export default MiniContent;
