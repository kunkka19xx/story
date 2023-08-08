import { Content, PostContent } from "@/model/PostModel";
import React, { useEffect, useState } from "react";

interface ContentProps {
  content: PostContent['content'] ;
}

const MiniContent: React.FC<ContentProps> = ({content})=> {
  
  const truncateContent = (text: string, length: number) => {
    const words = text.split(" ");
    const truncatedText = words.slice(0, length).join(" ");
    return truncatedText + (words.length > length ? "..." : "");
  };

  const setContent = (content : Content[]) => {
    console.log(content)
    if (!content || content.length ===  0) return ""; 
    var finalContent = ""
    for(let i = 0; i< content.length; i++){
      if(finalContent.length > 60) return truncateContent(finalContent, 60);
      finalContent = finalContent.concat(content[i].content);
    }
    return truncateContent(finalContent, 60);
  }

  return (
    <div>
      <div className="h-50">
        <p className="h-50">{setContent(content)}</p>
      </div>
    </div>
  );
};

export default MiniContent;
