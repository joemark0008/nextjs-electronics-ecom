import React from "react";

function HeroCard() {
  return (
    <>
      <div className="">
        <div className="p-6 max-w-sm bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
          <div className="flex justify-start items-center ">
            <svg
              className=" mb-3 mr-2 w-10 h-10 text-red-600 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Need a help in Claim?
              </h5>
            </a>
          </div>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            See our guideline
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default HeroCard;
