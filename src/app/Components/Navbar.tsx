import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className=" border bg-white border-base-300 fixed z-50 w-full">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="/">Project</Link>
              </li>
              <li>
                <Link href="/">About Me</Link>
              </li>
              <li>
                <Link href="/">Download CV</Link>
              </li>
            </ul>
            <a className="text-xl hidden lg:flex">alitWira</a>
          </div>
        </div>
        <a className="pe-4 text-xl navbar-end lg:hidden">alitWira</a>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link href="/">Beranda</Link>
            </li>
            <li>
              <Link href="/">Project</Link>
            </li>
            <li>
              <Link href="/">About Me</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/"
                className="bg-neutral rounded-full px-4 text-white hover:bg-neutral/90"
              >
                Download CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
