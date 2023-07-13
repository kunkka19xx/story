import React from "react";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav>
        <div className="h-16 flex  justify-items-center items-center bg-gradient-to-r from-indigo-500 opacity-100">
          <div className="">
            <a href="/main/home" className="px-6 hover:text-red-400 hover:italic">
              Home
            </a>
            <a href="/main/top" className="px-6 hover:text-red-400 hover:italic">
              Top Post
            </a>
            <a href="/main/story" className="px-6 hover:text-red-400 hover:italic">
              Life Story
            </a>
            <a href="/main/tech" className="px-6 hover:text-red-400 hover:italic">
              Tech
            </a>
            <a href="/main/contact" className="px-6 hover:text-red-400 hover:italic">
              Contact
            </a>
          </div>
          <div className="relative w-96  ml-auto mr-10">
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
      </nav>
    </header>
  );
}

export default Header;
