import React from "react";
import Info from "./info";
import Content from "./content";
import Comment from "./comment";
import Buttonbar from "../buttonbar";

function PostDetail() {
  return (
    <section>
      <div className="flex flex-row">
        <div className="w-1/4 border-r border-gray-500"></div>
        <div className="w-1/2 pl-2 pr-2">
          <div>
            <Info></Info>
          </div>
          <hr />
          <div>
            <Buttonbar></Buttonbar>
          </div>
          <hr />
          <div>
            <Content></Content>
          </div>
          <hr className="mt-3" />
          <div className="mt-3">
            <Comment></Comment>
          </div>
        </div>
        <hr className="mt-3 mb-3"></hr>
        <div className="w-1/4 border-l border-gray-500"></div>
      </div>
    </section>
  );
}

export default PostDetail;
