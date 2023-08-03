import React from "react";
import Content from "./content";
import Comment from "./comment";
import Info from "./info";

function Post() {
  const content = {
    id: 1,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aperiam cum totam sapiente odit explicabo cupiditate dicta perferendis magni officiis voluptatum consequatur incidunt aliquid, rerum perspiciatis suscipit autem inventore, error fuga obcaecati vel consequuntur commodi tempore! Debitis, libero asperiores, rem fuga repudiandae impedit quo, ut ea itaque at quidem. Iure!",
    img: "",
  };

  return (
    <section>
      <div>
        <Info></Info>
      </div>
      <hr />
      <div>
        <Content post={content}></Content>
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
