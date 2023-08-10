import Header from "@/components/header";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer";
import MiniPost from "@/components/mini-post/miniPost";
import Paging from "@/components/paging";
import OutStanding from "@/components/right/outStanding";
import TagGroup from "@/components/right/tagGroup";
import { PostContent } from "@/model/PostModel";

function Story() {
  const [miniPostData, setMiniPostData] = useState<PostContent[]>();

  useEffect(() => {
    fetchPostByCategory("story");
  }, []);

  async function fetchPostByCategory(name: string) {
    try {
      const response = await fetch(`/api/posts/category/${name}`);
      const data = await response.json();
      if (response.status !== 200) {
        const message = data.message;
        const cause = data.cause;
        window.location.href = `/error?message=${encodeURIComponent(
          message
        )}&cause=${encodeURIComponent(cause)}`;
      }
      setMiniPostData(data);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  }

  if (!miniPostData) return null;

  return (
    <section className="min-h-screen flex flex-col ">
      <div className="z-50 pb-14">
        <Header></Header>
      </div>
      <div className="flex flex-row flex-grow">
        <div className="lg:w-1/6"></div>
        <div className="text-center lg:w-1/2 pl-2 pr-2 pt-2 pb-2 flex flex-col">
          <h3 className="text-yellow-900 font-light uppercase text-xl mb-2 mt-2">
            Thank for watching my story.
          </h3>
        </div>

        <div className="lg:w-1/3  hidden lg:block"></div>
      </div>
      <div className="flex flex-row flex-grow">
        <div className="lg:w-1/6 border-r border-gray-400"></div>
        {/* <div className="lg:w-1/2 pl-2 pr-2 pt-2 pb-2"> */}
        <div className="lg:w-1/2 pl-2 pr-2 pt-2 pb-2 flex flex-col">
          <div>
            {miniPostData.map((_, index) => (
              <MiniPost key={index} post={miniPostData[index]} />
            ))}
          </div>
          <div className="mt-2 mb-2">
            <Paging></Paging>
          </div>
        </div>

        <div className="lg:w-1/3 border-l border-gray-400 hidden lg:block">
          <div className="fixed">
            <div id="out-standing-title" className="ml-2 mt-0 mb-1 text-center">
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
                <TagGroup
                  tags={["fake", "dummy", "dog", "log tag", "tag"]}
                ></TagGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default Story;
