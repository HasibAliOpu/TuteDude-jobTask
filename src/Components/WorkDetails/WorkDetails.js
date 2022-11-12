import React from "react";
import users from "../../assets/users.png";
import tag from "../../assets/tag.png";
import rupee from "../../assets/rupee.png";
import discount from "../../assets/discount.png";
import wallet from "../../assets/wallet.png";
import { NavLink } from "react-router-dom";

const WorkDetails = () => {
  return (
    <div className="md:my-10 mb-10 md:ml-40 ml-6">
      <h1 className="text-2xl md:text-3xl text-neutral py-10 font-semibold">
        How does it work?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center gap-5">
          <div className="bg-rose-50 px-4 py-6  rounded-full">
            <img src={users} alt="users-icon" />
          </div>
          <div>
            <h2 className="font-semibold">Invite your Friends</h2>
            <h5 className="text-sm subpixel-antialiased  text-gray-500">
              Share the link tutedude.com with <br /> your friends
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-rose-50 p-5  rounded-full">
            <img src={tag} alt="tag-icon" />
          </div>
          <div>
            <h2 className="font-semibold">Friend purchases any course</h2>
            <h5 className="text-sm subpixel-antialiased  text-gray-500">
              Using your ERFERRAL CODE in the <br /> payments page
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-rose-50 p-5 rounded-full">
            <img src={rupee} alt="rupee-icon" />
          </div>
          <div>
            <h2 className="font-semibold">You get ₹ 200 as referral money</h2>
            <h5 className="text-sm subpixel-antialiased  text-gray-500">
              On total purchase teh friend <br /> makes, into your wallet
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-rose-50 p-5  rounded-full">
            <img src={discount} alt="discount-icon" />
          </div>
          <div>
            <h2 className="font-semibold">Your Friend gets ₹ 200 Off</h2>
            <h5 className="text-sm subpixel-antialiased  text-gray-500">
              On his overall fee on successful <br /> purchase using your
              referral code
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-rose-50 p-5  rounded-full">
            <img src={wallet} alt="wallet-icon" />
          </div>
          <div>
            <h2 className="font-semibold">Transfer money from wallet</h2>
            <h5 className="text-sm subpixel-antialiased  text-gray-500">
              When the wallet balance reaches <br /> ₹200 or more, you can
              withdraw it
            </h5>
          </div>
        </div>
      </div>
      <p className="text-neutral text-lg font-semibold py-10">
        <NavLink to="/friendsReferred" className="hover:underline">
          Friends Who Enrolled
        </NavLink>
      </p>
      <p className="text-neutral text-lg font-semibold ">
        <a href="/" className="hover:underline">
          Terms & Conditions
        </a>
      </p>
    </div>
  );
};

export default WorkDetails;
