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
          <p className="text-xl font-semibold tracking-wide">{name}</p>
          <p className="text-end">{date}</p>
        </div>
        <p className="tracking-wide">Courses Enrolled({courseEnrolled})</p>
        <p>{courses}</p>
        <p>
          Referral Amount{" "}
          <span className="text-2xl font-semibold">{amount}</span>
        </p>
      </div>
    </div>
  );
};

export default EnrollFriend;
