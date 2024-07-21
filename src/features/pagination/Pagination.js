import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import React from "react";

function Pagination({ handlePagination, setPage, page, limit, totalItems }) {
  const totalPages = Math.ceil(totalItems / limit);
  return (
    <div className="w-full">
      <div className="flex flex-1 justify-between sm:hidden">
        <div
          onClick={(e) =>
            handlePagination(page - 1 > 0 ? page - 1 : totalPages)
          }
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </div>
        <div
          onClick={(e) =>
            handlePagination(page + 1 > totalPages ? 1 : page + 1)
          }
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{(page - 1) * limit + 1}</span> to
            <span className="font-medium">
              {" "}
              {page * limit > totalItems ? totalItems : page * limit}
            </span>{" "}
            of <span className="font-medium">{totalItems}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <div
              onClick={(e) =>
                handlePagination(page - 1 > 0 ? page - 1 : totalPages)
              }
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {/* way to make an array of any length */}
            {Array.from({ length: Math.ceil(totalItems / limit) }).map(
              (ele, index) => (
                <div
                  onClick={(e) => handlePagination(index + 1)}
                  aria-current="page"
                  className={`relative z-10 inline-flex items-center cursor-pointer ${
                    index + 1 === page
                      ? "bg-indigo-600 text-white"
                      : "text-gray-400"
                  } px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  {index + 1}
                </div>
              )
            )}
            <div
              onClick={(e) =>
                handlePagination(page + 1 > totalPages ? 1 : page + 1)
              }
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
