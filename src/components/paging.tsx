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
  }, [focus]);

  const handlePageClick = (index: number) => {
    setFocus(x[index]);
    if (onPageChange) {
      onPageChange(x[index]);
    }
  };

  const handlePageClickPrev = () => {
    if (x[0] === 1 && focus == 1) return;
    if (x[0] > 1) {
      const updatedX = x.map((value) => value - 1);
      setX(updatedX);
    }
    const val = focus - 1;
    setFocus(val);
    // console.log(updatedX);
    if (onPageChange) {
      onPageChange(val);
    }
  };

  const handlePageClickNext = () => {
    const updatedX = x.map((value) => value + 1);
    setX(updatedX);
    const val = focus + 1;
    setFocus(val);
    if (onPageChange) {
      onPageChange(val);
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

          {x.map((page, index) => (
            <li key={index}>
              <a
                className={`relative block rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                  focus === page
                    ? "bg-primary-100 text-primary-700 hover:bg-neutral-100 text-rose-950 font-semibold border border-gray-400 bg-indigo-200 dark:hover:bg-neutral-700 dark:hover:text-gray-500"
                    : "bg-primary-100 text-primary-700 hover:bg-neutral-100 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-gray-500"
                }`}
                href="#"
                onClick={() => handlePageClick(index)}
              >
                {page}
              </a>
            </li>
          ))}

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
