import React from "react";
import TechIcon from "./categoryIcon";
import CategoryIcon from "./categoryIcon";
import { LIST_POST, POST } from "../post/dummy/Post";
import LastestPostUnit from "./lastestPostUnit";

const Latest = () => {
  const post = POST;
  const listPost = LIST_POST;
  return (
    <div className="container mt-12 mx-auto md:px-6">
      <section className="mb-32">
        <h2 className="mb-16 text-center text-2xl font-bold">
          Latest articles
        </h2>

        {listPost.map((_, index) => (
          <LastestPostUnit
            key={index}
            post={listPost[index]}
            idx={index}
          ></LastestPostUnit>
        ))}
      </section>
    </div>
  );
};

export default Latest;
