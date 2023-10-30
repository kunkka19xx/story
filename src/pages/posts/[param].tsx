import Footer from "@/components/footer";
import Header from "@/components/header";
import MiniPost from "@/components/mini-post/miniPost";
import Paging from "@/components/paging";
import OutStanding from "@/components/right/outStanding";
import TagGroup from "@/components/right/tagGroup";
import { SERVER_PATH_LOCAL } from "@/constants/server";
import { PostContent } from "@/model/PostModel";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function ListPost() {
  // const [miniPostData, setMiniPostData] = useState<PostContent[]>();
  const router = useRouter();
  const parameter = router.query.param;
  const [posts, setPosts] = useState<PostContent[]>();
  // useEffect(() => {
  //   if (parameter) {
  //     fetchPostsWithFilter(parameter.toString());
  //   }
  //   // else setMiniPostData(LIST_POST);
  // }, [parameter]);

  useEffect(() => {
    // fetchPostByCategory("tech");
    handlePageChange(1);
  }, [parameter]);

  const handlePageChange = (page: number) => {
    if (parameter) {
      console.log(parameter.toString())
      console.log(page)

      fetchPostsWithFilter(parameter.toString(), page - 1, 10);
    }
  };

  async function fetchPostsWithFilter(
    parameter: string,
    page: number,
    size: number
  ) {
    try {
      const response = await fetch(
        `${SERVER_PATH_LOCAL}/post/public/find?${parameter}&page=${page}&size=${size}`
      );
      const data = await response.json();
      if (response.status !== 200) {
        const message = data.message;
        const cause = data.cause;
        window.location.href = `/error?message=${encodeURIComponent(
          message
        )}&cause=${encodeURIComponent(cause)}`;
      }
      setPosts(data["data"]["content"]);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  }

  if (!posts) return null;

  return (
    <section className="min-h-screen flex flex-col ">
      <div className="z-50 pb-16">
        <Header></Header>
      </div>
      <div className="flex flex-row">
        <div className="lg:w-1/6"></div>
        <div className="text-center lg:w-1/2 pl-2 pr-2 pb-2 flex flex-col">
          <h3 className="text-yellow-900 font-semibold uppercase text-xl mb-2 mt-2">
            {parameter?.toString().split("=")[0].trim()}:{" "}
            <a
              className="text-sky-600 hover:text-rose-700 hover:italic"
              href={"/posts/".concat(parameter ? parameter.toString() : "")}
            >
              {parameter?.toString().split("=")[1]}
            </a>
          </h3>
        </div>

        <div className="lg:w-1/3  hidden lg:block"></div>
      </div>
      <div className="flex flex-row flex-grow">
        <div className="lg:w-1/6 border-r border-gray-400"></div>
        {/* <div className="lg:w-1/2 pl-2 pr-2 pt-2 pb-2"> */}
        <div className="lg:w-1/2 pl-2 pr-2 pt-2 pb-2 flex flex-col">
          <div className="flex-grow">
            {posts.map((_, index) => (
              <MiniPost key={index} post={posts[index]} />
            ))}
          </div>
          <div className="mt-2">
            <Paging
              onPageChange={handlePageChange}
              pageType={
                parameter ? parameter.toString().split("=")[0].trim() : ""
              }
            ></Paging>
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
                <TagGroup tags={["java", "tech", "story", "tag"]}></TagGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default ListPost;
