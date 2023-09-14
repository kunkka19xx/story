import React, { useEffect, useState } from "react";

import LatestPostUnit from "./latestPostUnit";
import { SERVER_PATH_LOCAL } from "@/constants/server";

const Latest = () => {
  // const listPost = LIST_POST.slice(0, 5);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchLatestPost();
  }, []);

  async function fetchLatestPost() {
    try {
      const response = await fetch(`${SERVER_PATH_LOCAL}/post/public/latest`);
      const data = await response.json();
      if (response.status !== 200) {
        const message = data.message;
        const cause = data.cause;
        window.location.href = `/error?message=${encodeURIComponent(
          message
        )}&cause=${encodeURIComponent(cause)}`;
      }
      setPosts(data["data"]);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  }

  return (
    <div className="container mt-5 mx-auto md:px-6">
      <section className="mb-6">
        <h2 className="mb-16 text-center text-3xl font-bold">
          Latest articles
        </h2>
        {posts.map((_, index) => (
          <LatestPostUnit
            key={index}
            post={posts[index]}
            idx={index}
          ></LatestPostUnit>
        ))}
      </section>
    </div>
  );
};

export default Latest;
