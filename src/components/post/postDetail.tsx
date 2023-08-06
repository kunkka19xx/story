import React, { useEffect, useState } from "react";
import Info from "./info";
import Content from "./content";
import Comment from "./comment";
import Buttonbar from "../buttonbar";
import Footer from "../footer";
import { useRouter } from "next/router";
import { PostContent } from "@/model/PostModel";

function PostDetail() {
  const [post, setPost] = useState<PostContent | null>(null);
  const router = useRouter();
  const postId = router.query.postId;

  useEffect(() => {
    if (postId) {
      fetchPostDetails();
    }
  }, [postId]);

  async function fetchPostDetails() {
    try {
      const response = await fetch(`/api/detail/${postId}`);
      const data = await response.json();
      if (response.status !== 200) {
        const message = data.message;
        const cause =data.cause;
        window.location.href = `/error?message=${encodeURIComponent(
          message
        )}&cause=${encodeURIComponent(cause)}`;
      }
      setPost(data);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  }

  if (!post) return null;

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-row flex-grow">
        <div className="w-1/4 border-r border-gray-300 hide-on-small-screen"></div>
        <div id="id-detail-content" className="w-1/2 pl-2 pr-2">
          <div>
            <Info post={post}></Info>
          </div>
          <hr />
          <div>
            <Buttonbar></Buttonbar>
          </div>
          <hr />
          <div>
            <Content content={post.content}></Content>
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
