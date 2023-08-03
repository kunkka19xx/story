import React from "react";
import Info from "./info";
import Content from "./content";
import Comment from "./comment";
import Buttonbar from "../buttonbar";
import Footer from "../footer";

function PostDetail() {
  const content = {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellat voluptatibus unde corporis quis. Alias ipsam ducimus hic rem non libero unde, voluptas nam, officia ex officiis consequatur? Eius nobis, culpa enim reprehenderit voluptatibus sunt sint harum voluptates. Accusantium odio, itaque laudantium reprehenderit possimus veniam aut saepe ea cupiditate veritatis, at repudiandae eius tenetur fugit nostrum libero exercitationem ipsam. Ducimus commodi sint, consequatur tenetur enim cumque tempore saepe illum architecto nihil odio asperiores ipsam ullam velit veniam a inventore omnis numquam repellendus fugiat quis quo in sit unde? Deserunt, rerum! Accusamus ipsam officiis exercitationem est aliquid doloremque assumenda quod non.",
  };

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-row flex-grow">
        <div className="w-1/4 border-r border-gray-300 hide-on-small-screen"></div>
        <div id="id-detail-content" className="w-1/2 pl-2 pr-2">
          <div>
            <Info></Info>
          </div>
          <hr />
          <div>
            <Buttonbar></Buttonbar>
          </div>
          <hr />
          <div>
            <Content post={content}></Content>
          </div>
          <hr className="mt-3" />
          <div className="mt-3">
            <Comment></Comment>
          </div>
        </div>
        <hr className="mt-3 mb-3"></hr>
        <div className="w-1/4 border-l border-gray-300 hide-on-small-screen"></div>
      </div>
      {/* <div className="min-h-screen flex flex-col">
        <div className="flex-1"></div> */}
        <Footer></Footer>
      {/* </div> */}
    </section>
  );
}

export default PostDetail;
