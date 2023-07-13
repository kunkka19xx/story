import React from "react";
import Content from "./content";
import Comment from "./comment";
import Info from "./info";

function Post() {
  return (
    <section>
      <div>
        <Info></Info>
      </div>
      <hr />
      <div>
        <Content></Content>
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
