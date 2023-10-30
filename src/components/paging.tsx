import { SERVER_PATH_LOCAL } from "@/constants/server";
import router from "next/router";
import React, { useEffect, useState } from "react";

interface PageType {
  pageType: string;
  onPageChange?: (page: number) => void;
}

// function Paging() {
const Paging: React.FC<PageType> = ({ pageType, onPageChange }) => {
  const [x, setX] = useState([1, 2, 3]);
  const [focus, setFocus] = useState(1);

  useEffect(() => {
    console.log(focus);
  }, [focus]);

  const handlePageClick = (index: number) => {
    setFocus(x[index]);
    if (onPageChange) {
      onPageChange(x[index]);
    }
  };

  const handlePageClickPrev = () => {
    if (x[0] === 1) return;
    const updatedX = x.map((value) => value - 1);
    setX(updatedX);
    const val = focus - 1;
    setFocus(val);
    console.log(updatedX);
    if (onPageChange) {
      onPageChange(val);
    }
  };

  const handlePageClickNext = () => {
    const updatedX = x.map((value) => value + 1);
    setX(updatedX);
    const val = focus + 1;
    setFocus(val);
    console.log(updatedX);
    if (onPageChange) {
      onPageChange(val);
    }
  };

  const handleClickGeneral = () => {
    if (pageType.toLocaleLowerCase() === "story") {
    }
  };

  return (
    <section>
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex w-full justify-center">
          <li>
            <a
              className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-gray-500"
              onClick={() => handlePageClickPrev()}
            >
              Previous
            </a>
          </li>
          <li>
            <a
              // className={`relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-gray-500 ${x === 1 ? 'active' : ''}`}
              className={`relative block rounded-full bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 hover:bg-neutral-100 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-gray-500`}
              href="#"
              onClick={() => handlePageClick(0)}
            >
              {x[0]}
            </a>
          </li>
          <li>
            <a
              className={`relative block rounded-full bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 hover:bg-neutral-100 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-gray-500`}
              href="#"
              onClick={() => handlePageClick(1)}
            >
              {x[1]}
            </a>
          </li>
          <li>
            <a
              className={`relative block rounded-full bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 hover:bg-neutral-100 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-gray-500`}
              href="#"
              onClick={() => handlePageClick(2)}
            >
              {x[2]}
            </a>
          </li>
          <li>
            <a
              className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-gray-500"
              href="#"
              onClick={() => handlePageClickNext()}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Paging;
