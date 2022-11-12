import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs text-xs md:text-base font-semibold tracking-tighter my-8 pl-10 ">
      <ul>
        <li>
          <NavLink to={"/"}>UI&UX</NavLink>
        </li>
        <li>
          <NavLink to={"/referAndEarn"}>Refer & Earn</NavLink>
        </li>
        <li>
          <NavLink to={"/friendsReferred"}>Friends Referred</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
