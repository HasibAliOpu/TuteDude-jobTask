import React from "react";

const EnrollFriend = ({ enrolledFriend }) => {
  const { name, date, courseEnrolled, courses, amount } = enrolledFriend;

  return (
    <div
      className="card bg-gradient-to-r to-[#800080] from-[#FF864C] shadow-xl text-white
    "
    >
      <div className="card-body">
        <div className="flex">
          <p className="text-sm md:text-xl md:font-semibold tracking-wide">
            {name}
          </p>
          <p className="text-end text-sm md:text-base">{date}</p>
        </div>
        <p className="tracking-wide text-sm md:text-base">
          Courses Enrolled({courseEnrolled})
        </p>
        <p className="text-sm md:text-base">{courses}</p>
        <p className="text-sm md:text-base">
          Referral Amount{" "}
          <span className="text-lg md:text-2xl md:font-semibold">{amount}</span>
        </p>
      </div>
    </div>
  );
};

export default EnrollFriend;
