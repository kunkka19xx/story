import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState } from "react";

function CreatePost() {
  const [contentList, setContentList] = useState<
    { id: number; content: string; img: string }[]
  >([{ id: 1, content: "", img: "" }]);

  const handleAddContent = () => {
    const newId = contentList.length + 1;
    setContentList([...contentList, { id: newId, content: "", img: "" }]);
  };

  const handleContentChange = (id: number, value: string) => {
    setContentList((prevContentList) =>
      prevContentList.map((item) =>
        item.id === id ? { ...item, content: value } : item
      )
    );
  };

  const handleAddImage = () => {};
  const handlePost = () => {};

  return (
    <section className="min-h-screen flex flex-col">
      <div className="z-50 pb-16">
        <Header></Header>
      </div>
      <div className="flex-grow">
        <div className="flex flex-wrap">
          <div className="w-1/2 min-h-screen border-r mt-2 mb-2">
            <h2 className="text-center text-lg font-sans">
              Let write some thing!
            </h2>
            <div className="flex flex-col">
              <label className="mb-1 ml-1" htmlFor="">
                Title
              </label>
              <textarea
                placeholder="Write your post's title!"
                className="ml-3 mr-3 mb-3 border rounded-md h-10"
              ></textarea>
              <ol>
                {contentList.map((item) => (
                  <li key={item.id} className="flex flex-col">
                    <div>
                      <label className="mb-1 ml-1" htmlFor="">
                        Content {item.id}
                      </label>
                    </div>

                    <textarea
                      className="ml-3 mr-3 mb-3 border rounded-md h-80 max-h-96"
                      placeholder={`Write your post's content ${item.id}!`}
                      value={item.content}
                      onChange={(e) =>
                        handleContentChange(item.id, e.target.value)
                      }
                    ></textarea>
                    <div className="w-full ">
                      <input 
                        onClick={handleAddImage}
                        className=" float-right bg-zinc-200 mr-3 text-sm  w-1/2 mb-1 rounded  hover:bg-purple-300 hover:italic hover:text-black"
                        type="file"
                      ></input>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-wrap w-full">
              <button
                onClick={handleAddContent}
                className="bg-zinc-200 ml-3 mr-1 text-sm h-6 w-32 rounded border border-black hover:bg-purple-300 hover:italic hover:text-black"
              >
                Add Content
              </button>

              <button
                onClick={handlePost}
                className="bg-zinc-200 text-sm right-0 h-6 w-32 rounded border border-black hover:bg-purple-300 hover:italic hover:text-black"
              >
                Post
              </button>
            </div>
          </div>
          <div className="w-1/2 mt-2 mb-2">
            <h2 className="text-center text-lg font-sans">Preview</h2>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
}

export default CreatePost;
