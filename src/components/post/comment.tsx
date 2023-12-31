import React, { useRef, useState } from "react";
import CommentHeader from "./commentHeader";

function Comment() {
  const [comment, setComment] = useState("");
  // const [postedComment, setPostedComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [commentPosted, setCommentPosted] = useState(false);
  const postedCommentFocus = useRef<HTMLDivElement | null>(null);
  const [postedTime, setPostedTime] = useState("");

  const [postedTimes, setPostedTimes] = useState<string[]>([]);

  const handleCommentPost = () => {
    if (!comment) return;

    const newComments = [comment.replace(/\n/g, "<br>"), ...comments]; // Add the latest comment to the beginning of the array
    setComments(newComments);
    // setPostedComment(comment);
    setComment("");
    var postedTime = new Date().toLocaleString().toString();
    setCommentPosted(true);
    setPostedTime(postedTime);
    const newPostedTimes = postedTimes.concat(postedTime);
    setPostedTimes(newPostedTimes);
    // Simulate a delay to reset the "Post" button color after a short time
    setTimeout(() => {
      setCommentPosted(false);
      postedCommentFocus.current?.focus();
    }, 700); // Change the duration as per your requirement
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleCommentPost();
    }
  };

  return (
    <section>
      <div className="mt-1">
        <div className="relative mb-2" data-te-input-wrapper-init>
          <div className="flex mb-0">
            <div className="w-1/2 relative mb-2">
              <label className="text-gray-800 italic mb-1" htmlFor="">
                Email:
              </label>
              <input
                className="h-7 peer block border border-gray-500 w-[95%] rounded  bg-transparent px-1"
                type="text"
              />
            </div>
            <div className="w-1/2 relative mb-2">
              <label className="text-gray-800 italic mb-1" htmlFor="">
                Show Name:
              </label>
              <input
                className="h-7 peer block border border-gray-500 w-[98%] rounded  bg-transparent px-1"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <label className="text-gray-700 italic">Comment</label>
            </div>
            <div className="justify-end mr-2">
              <button
                onClick={handleCommentPost}
                // className = "{commentPosted? bg-green-500: bg-white-500}"
                className={`${
                  commentPosted
                    ? "bg-orange-400 hover:bg-orange-600 font-bold"
                    : "bg-white-500 hover:bg-blue-500 hover:font-bold"
                } text-black font-thin border border-black py-0.5 px-4 rounded`}
              >
                Post
              </button>
            </div>
          </div>
          <div className="mr-2">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={handleKeyDown}
              id="comment_id"
              className="peer block mt-1 p-2 w-full h-32 max-h-40 rounded border border-gray-500"
              value={comment}
            ></textarea>
          </div>
        </div>
      </div>

      {comments.map((commentText, index) => (
        <div
          className=""
          key={index}
          tabIndex={-1}
          ref={index === 0 ? postedCommentFocus : null}
        >
          <div id="id-comment-part" className="flex  items-center">
            <div id="id-comment-header" className="ml-5 w-1/4">
              <CommentHeader></CommentHeader>
            </div>
            <div
              id="id-posted-in"
              className="w-3/4 ml-3 flex flex-row justify-end mr-5 italic text-sm"
            >
              Posted:
              {postedTimes[postedTimes.length - index - 1]}
            </div>
          </div>
          <div className="flex">
            <div className="border-r-2 border-y-lime-600 ml-5"></div>
            <div
              className="text-sm text-yellow-950 ml-5 mt-1 mb-1 indent-4"
              dangerouslySetInnerHTML={{ __html: commentText }} // Set innerHTML to display formatted comment
            ></div>
          </div>
          <hr className="mb-2" />
        </div>
      ))}
    </section>
  );
}

export default Comment;
