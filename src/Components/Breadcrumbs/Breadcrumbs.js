import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs font-semibold tracking-tighter my-8 pl-10 ">
      <ul>
        <li>
          <a>UI/UX</a>
        </li>
        <li>
          <NavLink to={"/"}>Refer & Earn</NavLink>
        </li>
        <li>
          <NavLink to={"/friendsReferred"}>Friends Referred</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
