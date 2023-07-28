import React, { useState } from "react";

function CommentHeader() {
  const [author, setAuthor] = useState("Hao Nguyen");
  

  const changeAuthor = (newAuthor: string) => {
    setAuthor(newAuthor);
  };

  const handleClick = () => {
    if (author === "Hao Nguyen") setAuthor("Hang Nguyen");
    else setAuthor("Hao Nguyen");
  };

  return (
    <section className="">
      {/* author infor */}
      <div className="flex flex-row items-center mb-2">
        <div className="rounded-full overflow-hidden w-8 h-8">
          <img src="/assets/avatar/avatar.jpeg" alt="" className="" />
        </div>
        <div className="ml-3 flex items-center">
          <div className="">
            <span className="mr-2">{author}</span>
            <button
              onClick={handleClick}
              className="text-sm w-26 h-5 flex items-center bg-white-500 border border-black hover:bg-blue-500 hover:font-bold text-black font-thin py-2 px-4 rounded"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default CommentHeader;
