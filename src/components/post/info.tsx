import React, { useState } from "react";

/**
 * Post header
 * Have author name, avatar, ....
 * @returns
 */
function Info() {
  const [author, setAuthor] = useState("Hao Nguyen");
  const [title, setTitle] = useState(
    "This is post title. I need it more longer!"
  );

  const changeAuthor = (newAuthor: string) => {
    setAuthor(newAuthor);
  };

  const handleClick = () => {
    if(author === "Hao Nguyen") setAuthor("Hang Nguyen")
    else setAuthor("Hao Nguyen")
  }

  return (
    <section className="mb-5">
      {/* Title */}
      <div>
        <h1 className="text-lg mb-2">{title}</h1>
      </div>
      {/* author infor */}
      <div className="flex flex-row items-center">
        <div className="rounded-full overflow-hidden w-12 h-12">
          <img src="/assets/avatar/avatar.jpeg" alt="" className="" />
        </div>
        <div className="ml-3">
          <div className="flex items-center">
            <span className="mr-2">{author}</span>
            <button onClick={handleClick} className="w-26 h-8 flex items-center bg-white-500 border border-black hover:bg-blue-500 hover:font-bold text-black font-thin py-2 px-4 rounded">Follow</button>
          </div>
          <div>Post information</div>
        </div>
      </div>
    </section>
  );
}

export default Info;
