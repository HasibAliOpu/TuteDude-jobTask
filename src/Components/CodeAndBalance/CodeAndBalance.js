import React from "react";

const CodeAndBalance = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="card bg-base-100 shadow-xl mx-6 md:mx-auto">
        <div className="card-body">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p className="text-neutral text-xs md:text-sm">
                Referral Earning
              </p>
              <h3 className="text-lg md:text-3xl md:pt-3 font-semibold">
                ₹ 2,500
              </h3>
            </div>
            <div>
              <p className="text-neutral text-xs md:text-sm">Total Referrals</p>
              <h3 className="text-lg md:text-3xl md:pt-3 font-semibold">7</h3>
            </div>
            <div>
              <p className="text-neutral text-xs md:text-sm">Wallet Balance</p>
              <h3 className="text-lg md:text-3xl md:pt-3 font-semibold">
                ₹ 500
              </h3>
            </div>
            <div className="md:pt-3 md:col-span-3 md:mx-auto">
              <button className="btn text-xs md:text-base btn-neutral rounded-full text-white normal-case font-medium tracking-wider">
                Withdraw Balance
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl text-center md:text-start font-semibold text-neutral">
          Your Referral Code
        </h1>
        <div className="bg-gradient-to-r from-[#ED4C5C] to-[#c513c5] md:w-1/2 p-[3px] rounded-xl mt-6 mx-5">
          <p className=" bg-white text-2xl text-neutral px-16 py-4 text-center rounded-lg tracking-widest whitespace-pre">
            E D C H 5 4
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeAndBalance;
