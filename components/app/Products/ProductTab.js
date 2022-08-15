import React, { useState } from "react";
import ProductCard from "./ProductCard";

function ProductTab(props) {
  const [selected, setSelected] = useState("Phone");

  const active =
    " cursor-pointer  inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group";
  const inactive =
    "cursor-pointer  inline-flex p-4 text-gray-600 rounded-t-lg border-b-2  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group";

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 max-w-screen-xl mx-auto mt-10">
        <ul className="flex justify-center flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a
              onClick={() => {
                setSelected("Phone");
              }}
              className={`${selected == "Phone" ? active : inactive} `}
            >
              <svg
                aria-hidden="true"
                className=" mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              PHONE
            </a>
          </li>
          <li className="mr-2">
            <a
              onClick={() => {
                setSelected("Laptop");
              }}
              className={`${selected == "Laptop" ? active : inactive} `}
              aria-current="page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-5 h-5 text-gray-400 dark:text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M20 17.722c.595-.347 1-.985 1-1.722V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v11c0 .736.405 1.375 1 1.722V18H2v2h20v-2h-2v-.278zM5 16V5h14l.002 11H5z"
                ></path>
              </svg>
              LAPTOPS
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 w-5 h-5 text-gray-400 dark:text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                  clipRule="evenodd"
                />
              </svg>
              TABLET
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              POWER BANK
            </a>
          </li>
        </ul>
      </div>
      {selected == "Phone" && <ProductCard products={props} />}
      {selected == "Laptop" && <ProductCard products={props} />}
    </>
  );
}

export default ProductTab;
