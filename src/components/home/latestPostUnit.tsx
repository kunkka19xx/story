import React from "react";
import CategoryIcon from "./categoryIcon";
import { MiniPost } from "@/model/MiniPostModel";

interface PostProps {
  post: MiniPost;
  idx: number;
}
const LatestPostUnit: React.FC<PostProps> = ({ post, idx }) => {
  return (
    <>
      <div
        className={`${
          idx % 2 === 1
            ? "mb-16 flex flex-wrap lg:flex-row-reverse"
            : "mb-16 flex flex-wrap"
        }`}
      >
        <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
          <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg">
            <img
              src={
                post.image
                  // ? post.image.slice(post.image.lastIndexOf("/assets"))
                  // : "https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg"
              }
              className="w-full"
              alt=""
            />
            <a href={"/detail/".concat(post.id.toString())}>
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
          <a href={"/detail/".concat(post.id.toString())}>
            <h3 className=" hover:first-letter:text-red-600 hover:text-3xl mb-4 text-2xl font-bold">
              {post.title}
            </h3>
          </a>
          <div className="mb-4 flex items-center text-sm font-medium text-danger ">
            <CategoryIcon categories={post.categories}></CategoryIcon>
          </div>
          <p className="mb-6 text-sm text-neutral-700">
            Published <u>{post.createdAt}</u> by&nbsp;
            <a href="#!">{post.author}</a>
          </p>
          <p className="mb-6 text-neutral-700">{post.miniContent.concat("...")}</p>
        </div>
      </div>
    </>
  );
};

export default LatestPostUnit;
