import React from "react";
import Content from "./content";
import Comment from "./comment";
import Info from "./info";
import { POST } from "./dummy/Post";

function Post() {
  const post = POST;

  return (
    <section>
      <div>
        <Info post={post}></Info>
      </div>
      <hr />
      <div>
        <Content content={post.content}></Content>
      </div>
      <hr />
      <div>
        <Comment></Comment>
      </div>
      <hr className="mt-3 mb-3"></hr>
    </section>
  );
}

export default Post;
