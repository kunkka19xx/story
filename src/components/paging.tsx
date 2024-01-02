import React, { useEffect, useState } from "react";

interface PageType {
  pageType: number;
  onPageChange?: (page: number) => void;
}

// function Paging() {
const Paging: React.FC<PageType> = ({ pageType, onPageChange }) => {
  const [x, setX] = useState([1, 2, 3]);

  useEffect(() => {
    const startPage = Math.max(1, pageType - 1);
    setX([startPage, startPage + 1, startPage + 2]);
  }, [pageType]);

  const handlePageClick = (index: number) => {
    pageType = x[index];
    if (onPageChange) {
      onPageChange(x[index]);
    }
  };

  const handlePageClickPrev = () => {
    if (pageType > 1 && onPageChange) {
      onPageChange(pageType - 1);
    }
  };

  const handlePageClickNext = () => {
    if (onPageChange) {
      onPageChange(pageType + 1);
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
                  pageType === page
                    ? "bg-primary-100 text-primary-700 hover:bg-neutral-100 text-rose-950 font-semibold border border-gray-400 bg-indigo-200 dark:hover:bg-neutral-700 dark:hover:text-gray-500"
                    : "bg-primary-100 text-primary-700 hover:bg-neutral-100 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-gray-500"
                }`}
                href=""
                onClick={() => handlePageClick(index)}
              >
                {page}
              </a>
            </li>
          ))}

          <li>
            <a
              className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-gray-500"
              href=""
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
