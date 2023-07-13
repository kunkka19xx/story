import React from "react";
import MiniContent from "./miniContent";
import MiniEnd from "./miniEnd";
import MiniTop from "./miniTop";

function MiniPost() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/6 border-r border-gray-500"></div>
        <div className="flex flex-col lg:flex-row w-full lg:w-1/2 pl-2 pr-2 pt-2 pb-2">
          <div className="w-full lg:w-3/4 h-auto">
            <div>
              <MiniTop />
            </div>
            <div>
              <MiniContent />
            </div>
            <div>
              <MiniEnd />
            </div>
          </div>
          <div className="w-full lg:w-1/4 aspect-square overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover"
              src="/assets/avatar/avatar.jpeg"
              alt="Post Image"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3 border-l border-gray-500 hidden lg:block"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/6 border-r border-gray-500"></div>
        <div className="w-full lg:w-1/2 pl-2 pr-2">
          <hr />
        </div>
        <div className="w-full lg:w-1/3 border-l border-gray-500 hidden lg:block"></div>
      </div>
    </section>
  );
}

export default MiniPost;
