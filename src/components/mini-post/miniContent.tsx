import { Content, PostContent } from "@/model/PostModel";
import { MAX_CHARACTERS, MAX_LINES, getTruncatedContent } from "@/utils/util";
import React, { useEffect, useState } from "react";

interface ContentProps {
  miniContent: PostContent["miniContent"];
}

const MiniContent: React.FC<ContentProps> = ({ miniContent }) => {
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
