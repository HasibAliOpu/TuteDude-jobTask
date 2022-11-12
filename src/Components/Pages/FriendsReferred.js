import React from "react";
import EnrollFriend from "./EnrollFriend";

const FriendsReferred = () => {
  let enrolledFriends = [
    {
      id: "1",
      name: "Dhiraj Saxsena",
      date: "14 Sep, 2022",
      courseEnrolled: "6",
      courses: "UI/UX, Photoshop, Illustrator, Python, MERN , Java",
      amount: "₹185",
    },
    {
      id: "2",
      name: "subhash Mishra",
      date: "15 Sep, 2022",
      courseEnrolled: "23",
      courses: "UI/UX, Photoshop, Illustrator, Python, MERN , Java, C++",
      amount: "₹485",
    },
    {
      id: "3",
      name: "Prafull Kumar",
      date: "16 Sep, 2022",
      courseEnrolled: "23",
      courses: "UI/UX, Photoshop, Illustrator, Python, MERN , Java, C++",
      amount: "₹485",
    },
  ];
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <h1 className="text-neutral font-semibold subpixel-antialiased text-xs md:text-base ">
            Your Referral Code
          </h1>
          <p className="border border-purple-100 shadow-2xl hover:scale-105 duration-500 ease-in-out tracking-widest text-xs md:text-xl px-8 py-2 mt-2 rounded-lg whitespace-pre">
            E D C H 5 4
          </p>
        </div>
        <div className="shadow-2xl p-5 rounded-2xl">
          <h3 className="text-neutral subpixel-antialiased text-xs md:text-base">
            Wallet Balance
          </h3>
          <h3 className="font-semibold text-sm md:text-lg">₹ 500</h3>
        </div>
      </div>
      <div>
        <h1 className="text-lg md:text-2xl pl-10 mt-10 font-semibold text-neutral">
          Friends who enrolled ( 3 )
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 md:p-10">
          {enrolledFriends.map((enrolledFriend) => (
            <EnrollFriend
              key={enrolledFriend.id}
              enrolledFriend={enrolledFriend}
            />
          ))}
        </div>
      </div>
      <h1 className="text-neutral font-semibold pl-10">Terms & Conditions</h1>
    </div>
  );
};

export default FriendsReferred;
