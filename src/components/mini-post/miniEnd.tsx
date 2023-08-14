import { PostContent } from "@/model/PostModel";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface PostProps {
  post: PostContent;
}

const MiniEnd: React.FC<PostProps> = ({ post }) => {
  const router = useRouter();
  const tag = router.query.param;

  const handleClickTag = (tag: string) => {
    if (!tag) return;
    router.push("/posts/".concat(tag));
  };

  return (
    <section id="id-mini-end" className="font-thin italic h-full">
      <div className="relative h-full grid-rows-2 flex flex-col">
        <div className="row-span-1"></div>
        <div className="absolute inset-x-0 bottom-0 flex flex-row mt-1 text-smw">
          <p className="mr-1" suppressHydrationWarning>
            Created at:{" "}
            {post.createdDate.toLocaleString()}
            ,
          </p>
          <p className="mr-1">{post.length} minutes to read.</p>

          {post.tags.map((_, index) => {
            if (index < 3)
              return (
                <button
                  onClick={() => {
                    handleClickTag(post.tags[index]);
                  }}
                  key={index}
                  id="id-tag-mini-end"
                  className="text-sky-700 hover:text-rose-600 hover:italic"
                >
                  {post.tags[index].concat(",")}&nbsp;
                </button>
              );
            else return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default MiniEnd;
