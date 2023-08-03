import Footer from "@/components/footer";
import Header from "@/components/header";
import Post from "@/components/post/post";
import React from "react";

function Top() {

  const content = {
    id:1,
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aperiam cum totam sapiente odit explicabo cupiditate dicta perferendis magni officiis voluptatum consequatur incidunt aliquid, rerum perspiciatis suscipit autem inventore, error fuga obcaecati vel consequuntur commodi tempore! Debitis, libero asperiores, rem fuga repudiandae impedit quo, ut ea itaque at quidem. Iure!"
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* <div className="sticky top-0 pb-16">
        <Header></Header>
      </div> */}
      <div className="z-50 pb-16">
        <Header></Header>
      </div>

      <div className="flex flex-row flex-grow">
        <div className="w-1/6 border-r border-gray-500"></div>
        <div className="w-2/3 pl-2 pr-2">
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>

        </div>
        <div className="w-1/6 border-l border-gray-500"></div>
      </div>
      <Footer />
    </div>
  );
}


export default Top;
