import Footer from "@/components/footer";
import { APPLICATION_JSON, METHOD_POST } from "@/constants/headerConstant";
import Header from "@/components/header";
import React, { useState } from "react";
import { PostContent, defaultPost } from "@/model/PostModel";
import { CATEGORIES } from "@/constants/categoryConstant";

// interface PostProps {
//   post: PostContent;
// }

function CreatePost() {
  const [title, setTitle] = useState("");
  const [contentList, setContentList] = useState<
    { id: number; content: string; image: string }[]
  >([{ id: 1, content: "", image: "" }]);

  const [body, setBody] = useState<
    { id: number; content: string; image: string }[]
  >([{ id: 1, content: "", image: "" }]);

  const [imgList, setImgList] = useState<{ id: number; image: string }[]>([
    { id: 1, image: "" },
  ]);

  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState([""]);

  const [post, setPost] = useState<PostContent>();

  const handleAddContent = () => {
    const newId = contentList.length + 1;
    setContentList([...contentList, { id: newId, content: "", image: "" }]);
    setImgList([...imgList, { id: newId, image: "" }]);
    setBody([...body, { id: newId, content: "", image: "" }]);
    if (!post) {
      const newP = {
        ...defaultPost,
        id: 1000,
        title: title,
        content: body,
      };
      setPost(newP);
    } else {
      setPost({ ...post, content: body, tags: tags });
    }
  };

  const handleContentChange = (id: number, value: string) => {
    setContentList((prevContentList) =>
      prevContentList.map((item) =>
        item.id === id ? { ...item, content: value } : item
      )
    );

    setBody((prevBody) =>
      prevBody.map((item) =>
        item.id === id ? { ...item, content: value } : item
      )
    );
    if (!post) {
      const newP = {
        ...defaultPost,
        id: 1000,
        title: title,
        content: body,
      };
      setPost(newP);
    } else {
      setPost({ ...post, content: body, tags: tags });
    }
  };

  const handleImgChange = (
    id: number,
    image: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = image.target.files && image.target.files[0];
    if (file) {
      const fileContent = URL.createObjectURL(file);
      const reader = new FileReader();
      if (id === 1) {
        setImgList((prevImgList) =>
          prevImgList.map((item) =>
            item.id === 1
              ? { ...item, image: fileContent }
              : { ...item, image: fileContent }
          )
        );

        setBody((prevBody) =>
          prevBody.map((item) =>
            item.id === id ? { ...item, image: fileContent } : item
          )
        );
      } else {
        setImgList((prevImgList) =>
          prevImgList.map((item) =>
            item.id === id ? { ...item, image: fileContent } : item
          )
        );
        setBody((prevBody) =>
          prevBody.map((item) =>
            item.id === id ? { ...item, image: fileContent } : item
          )
        );
      }
      reader.readAsDataURL(file);
      if (!post) {
        const newP = {
          ...defaultPost,
          id: 1000,
          title: title,
          content: body,
        };
        setPost(newP);
      } else {
        setPost({ ...post, content: body, tags: tags });
      }
    }
  };

  const handleCheckboxChange = (value: string) => {
    if (categories.includes(value)) {
      setCategories(categories.filter((item) => item !== value));
    } else {
      setCategories([...categories, value]);
    }

    if (!post) {
      const newP = {
        ...defaultPost,
        id: 1000,
        title: title,
        content: body,
      };
      setPost(newP);
    } else {
      setPost({ ...post, categories: categories });
    }
  };

  const handleTagChange = (target: string) => {
    setTags(target.split(","));
    if (!post) {
      const newP = {
        ...defaultPost,
        id: 1000,
        title: title,
        content: body,
      };
      setPost(newP);
    } else {
      setPost({ ...post, content: body, tags: tags });
    }
  };

  const handleAddImage = () => {};

  const hanldeTitleChange = () => {
    if (!title) return;
    setTitle(title);
  };

  // handle post
  // call post api
  const handlePost = async () => {
    const response = await fetch("api/post", {
      method: METHOD_POST,
      body: JSON.stringify({ post }),
      headers: {
        "Content-Type": APPLICATION_JSON,
      },
    });
    const data = await response.json();
  };

  return (
    <section className="min-h-screen flex flex-col">
      <div className="z-50 pb-16">
        <Header></Header>
      </div>
      <div id="id-create-post" className="flex-grow wrap-on-small-screen">
        <div id="id-create-post-child" className="flex h-full">
          {" "}
          {/*flex-wrap*/}
          <div
            id="id-create-part"
            className="w-1/2 h-full border-r mt-2 mb-2 wrap-on-small-screen"
          >
            <div className="w-full">
              <h2 className="text-center text-lg font-sans">
                Let write some thing!
              </h2>
            </div>
            {/* title */}
            <div className="flex flex-col">
              <label className="mb-1 ml-1 font-semibold">Title:</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Write your post's title!"
                className="ml-3 mr-3 mb-3 border rounded-md h-10"
              ></input>
              {/* category */}
              <div className="flex">
                <div>
                  <label className="mb-1 ml-1 font-semibold">Categories:</label>
                </div>
                {CATEGORIES.map((_, index) => (
                  <div
                    key={index}
                    className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                  >
                    <input
                      className="relative float-left  mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none hover:outline-orange-300"
                      type="checkbox"
                      value=""
                      checked={categories.includes(CATEGORIES[index])}
                      onChange={() => handleCheckboxChange(CATEGORIES[index])}
                      id={"checkbox" + index}
                    />
                    <label
                      htmlFor={"checkbox" + index}
                      className="inline-block pl-[0.15rem] hover:cursor-pointer uppercase"
                    >
                      {CATEGORIES[index]}
                    </label>
                  </div>
                ))}
              </div>
              {/* tags */}
              <label className="mb-1 ml-1 font-semibold">Tags:</label>
              <input
                onChange={(e) => handleTagChange(e.target.value)}
                value={tags}
                placeholder="List your post's Tags. Separate by comma: ,"
                className="ml-3 mr-3 mb-3 border rounded-md h-10"
              ></input>

              <ol>
                {contentList.map((item) => (
                  <li key={item.id} className="flex flex-col">
                    <div>
                      <label className="mb-1 ml-1">Content {item.id}</label>
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
                        id="id-input-image"
                        onClick={handleAddImage}
                        value={item.image || undefined}
                        onChange={(e) => handleImgChange(item.id, e)}
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
          <div
            id="id-preview-part"
            className="w-1/2 mt-2 mb-2 wrap-on-small-screen"
          >
            <div className="w-full">
              <h2 className="text-center text-lg font-sans">Preview</h2>
            </div>
            <div
              id="id-title"
              className="mt-3 text-center wrap-on-small-screen"
            >
              <h2 className="text-xl mb-2 ">{title.toLocaleUpperCase()}</h2>
            </div>

            <div className="w-full flex flex-col">
              <ol>
                {contentList.map((item) => (
                  <li key={item.id} className="flex flex-col">
                    <p
                      className="ml-2 mr-2 text-sm"
                      dangerouslySetInnerHTML={{
                        __html: item.content.replace(/\n/g, "<br>"),
                      }}
                    >
                      {}
                    </p>
                    <img
                      className="ml-2 mr-2 mb-2 mt-2 rounded-lg border"
                      src={imgList[item.id - 1]["image"]}
                      alt=""
                    />
                  </li>
                ))}
              </ol>
            </div>
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
