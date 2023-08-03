import Footer from "@/components/footer";
import Header from "@/components/header";
import MiniPost from "@/components/mini-post/miniPost";
import Paging from "@/components/paging";
import OutStanding from "@/components/right/outStanding";
import TagGroup from "@/components/right/tagGroup";
import React from "react";

function Home() {
  const miniPostData = new Array(9).fill(null);

  return (
    <section className="min-h-screen flex flex-col ">
      <div className="z-50 pb-16">
        <Header></Header>
      </div>
      <div className="flex flex-row flex-grow">
        <div className="lg:w-1/6 border-r border-gray-400"></div>
        <div className="lg:w-1/2 pl-2 pr-2 pt-2 pb-2">
          <div>
            {miniPostData.map((_, index) => (
              <MiniPost key={index} />
            ))}
          </div>
          <div className="mt-2">
            <Paging></Paging>
          </div>
        </div>

        <div className="lg:w-1/3 border-l border-gray-400 hidden lg:block">
          <div className="fixed">
            <div id="out-standing-title" className="ml-2 mt-2 mb-1 text-center">
              <h3 className="font-semibold font-sans ">Most impressive post</h3>
            </div>

            <div className="flex">
              <div className="w-1/6"></div>
              <div id="out-standing-post" className="w-3/4">
                <OutStanding />
              </div>
            </div>
            <hr className="mt-4" />
            <div id="tag-title" className="ml-2 mt-3 mb-2 text-center">
              <h3 className="font-semibold font-sans ">
                Discover more of what matters to you
              </h3>
            </div>

            <div id="may-you-like-tag" className="flex">
              <div className="w-1/6"></div>
              <div className="w-3/4">
                <TagGroup></TagGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default Home;
