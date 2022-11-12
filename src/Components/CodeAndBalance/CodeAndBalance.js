import React from "react";

const CodeAndBalance = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="card bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <div className="flex gap-16">
            <div className="">
              <p className="text-neutral text-sm">Referral Earning</p>
              <h3 className="text-3xl pt-3 font-semibold">₹ 2,500</h3>
            </div>
            <div className="">
              <p className="text-neutral text-sm">Total Referrals</p>
              <h3 className="text-3xl pt-3 font-semibold">7</h3>
            </div>
            <div className="">
              <p className="text-neutral text-sm">Wallet Balance</p>
              <h3 className="text-3xl pt-3 font-semibold">₹ 500</h3>
            </div>
          </div>
          <div className="card-actions justify-center pt-8">
            <button className="btn btn-neutral rounded-full text-white normal-case font-medium tracking-wider">
              Withdraw Balance
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-neutral">
          Your Referral Code
        </h1>
        <div className="bg-gradient-to-r from-[#ED4C5C] to-[#c513c5] w-1/2 p-[3px] rounded-xl mt-6">
          <p className=" bg-white text-2xl text-neutral px-16 py-4 text-center rounded-lg tracking-widest whitespace-pre">
            E D C H 5 4
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeAndBalance;
