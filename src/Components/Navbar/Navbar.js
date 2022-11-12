import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" className="text-gray-500">
                My Assignment
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500">
                Chat with Mentor
              </a>
            </li>
            <li tabIndex={0}>
              <a href="/" className="justify-between">
                <img src={user} alt="" />
                ProfileName
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-purple-300 font-semibold">
                <li>
                  <a href="/">My Profile</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a href="/" className="pl-20 md:pl-0 btn btn-ghost normal-case text-xl">
          <img src={logo} alt="company-logo" className="w-3/5 md:w-full" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/" className="text-gray-400">
              My Assignment
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-400">
              Chat with Mentor
            </a>
          </li>
          <li tabIndex={0}>
            <a href="/" className="justify-between font-semibold">
              <img src={user} alt="user-icon" />
              ProfileName
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </svg>
            </a>
            <ul className="p-2 bg-purple-300 font-semibold">
              <li>
                <a href="/">My Profile</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
