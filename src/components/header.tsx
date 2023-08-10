import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  const handleClickToggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav>
        <div className="h-14 flex  justify-items-center items-center bg-gradient-to-r from-indigo-400 bg-opacity-100">
          {/* header bar */}
          <button
                id="id-toggle-button"
                className="ml-2 hidden show-on-small-screen"
                onClick={handleClickToggle}
              >
                <span className="block [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 hover:h-7 hover:w-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
          <div className="hide-on-small-screen">
            <div className="flex ">
              <a
                href="/home"
                className="flex px-6 hover:text-red-400 hover:italic"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:h-8 hover:w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>{" "}
                ' Home
              </a>
              {/* <a href="/top" className="px-6 hover:text-red-400 hover:italic">
                Top Post
              </a> */}
              <a href="/tech" className="px-6 hover:text-red-400 hover:italic">
                Tech
              </a>
              <a href="/story" className="px-6 hover:text-red-400 hover:italic">
                Story
              </a>
              <a
                href="/service"
                className="px-6 hover:text-red-400 hover:italic"
              >
                Service
              </a>
              <a
                href="/contact"
                className="px-6 hover:text-red-400 hover:italic"
              >
                Contact
              </a>
            </div>
          </div>
          <div id="id-search-box" className="relative w-96  ml-auto mr-10">
            <form action="" className="flex h-full">
              <input
                type="text"
                className=" pr-16 w-full px-3 py-2 bg-white rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Search..."
              ></input>
              <div className="absolute inset-y-0 right-0 flex items-center pl-2 pr-0">
                <button
                  type="submit"
                  className=" bg-white hover:bg-blue-600 text-white font-semibold flex end-0 py-2 px-2 rounded-md"
                >
                  🔎
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* side bar */}

        <div
          id="id-side-bar"
          className={`${
            show
              ? 'visible  "h-72 bg-indigo-400 w-56 "'
              : 'hidden  "h-72 bg-indigo-400 w-56 "'
          }`}
        >
          <div className="flex flex-col w-full">
            <div className="h-10 hover:bg-gradient-to-r hover:from-amber-300">
              <a
                href="/home"
                className="flex ml-6 hover:text-red-400 hover:italic mt-2 mb-3 hover:font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:h-8 hover:w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>{" "}
                ' Home
              </a>
            </div>

            <hr className="mb-3" />
            {/* <a href="/top" className="px-6 hover:text-red-400 hover:italic">
                Top Post
              </a> */}
            <div className="h-10 hover:bg-gradient-to-r hover:from-amber-300">
              <a
                href="/tech"
                className="mb-2 ml-6 hover:text-red-400 hover:italic"
              >
                Tech
              </a>
            </div>
            <div className="h-10 hover:bg-gradient-to-r hover:from-amber-300">
              <a
                href="/story"
                className="mb-2 ml-6 hover:text-red-400 hover:italic"
              >
                Story
              </a>
            </div>
            <div className="h-10 hover:bg-gradient-to-r hover:from-amber-300">
              <a
                href="/service"
                className="mb-2 ml-6 hover:text-red-400 hover:italic"
              >
                Service
              </a>
            </div>
            <div className="h-10 hover:bg-gradient-to-r hover:from-amber-300">
              <a
                href="/contact"
                className="ml-6 hover:text-red-400 hover:italic"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
