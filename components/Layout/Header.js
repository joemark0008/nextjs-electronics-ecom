import Link from "next/link";
import React from "react";
import { useCart } from "react-use-cart";

function Header() {
  const { totalUniqueItems } = useCart();
  return (
    <>
      <div className="sticky top-0 z-20">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                LOGO
              </span>
            </a>
            <div className="flex items-center">
              <a
                href="tel:5541251234"
                className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
              >
                (555) 412-1234
              </a>
              <Link href="/cart">
                <button
                  className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Cart"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span className="absolute inset-0 object-right-top -mr-6">
                    <div
                      suppressHydrationWarning={true}
                      className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white"
                    >
                      {totalUniqueItems}
                    </div>
                  </span>
                </button>
              </Link>
              {/* <a
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a> */}
            </div>
          </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
            <div className="flex items-center">
              <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                  <Link href="/">
                    <a
                      className="text-gray-900 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/cart">
                    <a className="text-gray-900 dark:text-white hover:underline">
                      Cart
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Category
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
