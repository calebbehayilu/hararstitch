import React from "react";

const Nav = () => {
  return (
    <nav
      className="flex items-center justify-between shadow-dark-mild lg:pt-4"
      data-twe-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div
          className="flex mt-2 flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent8"
          data-twe-collapse-item
        >
          <div className="flex flex-col justify-evenly items-center w-screen">
            <a href="#">
              <img src="/harar_stitch(no name).png" width={100} alt="" />
            </a>
            <ul className="list-style-none flex gap-3 items-center ps-0 lg:mt-1 lg:flex-row">
              <li
                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className="text-black dark:text-white lg:px-2"
                  aria-current="page"
                  href="#"
                  data-twe-nav-link-ref
                >
                  Home
                </a>
              </li>
              <li
                className="my-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  Shop
                </a>
              </li>
              <li
                className="my-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  Contact Us
                </a>
              </li>
              <li
                className="my-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref
              >
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
