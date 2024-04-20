import React from "react";
import HeaderComponent from "../Components/HeaderComponent";

const PersonalInfo = () => {
  return (
    <div className="flex justify-center">
      <div style={{ width: "800px" }} className="flex justify-center">
        <div className="h-screen w-full m-9">
          <HeaderComponent />
          <div className="flex justify-center mt-2">
            <span className="text-xl font-bold">Personal Information</span>
          </div>
          <div className=" w-full" >
            <div class="mb-6 ">
              <label
                for="fullName"
                placeholder="Enter your Full Name"
                class="block text-zinc-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your Full Name"
                class="shadow  appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-6">
              <label
                for="dob"
                class="block text-zinc-700 text-sm font-bold mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-6">
              <label
                for="mobileNumber"
                class="block text-zinc-700 text-sm font-bold mb-2"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                placeholder="Mobile Number"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>{" "}
            <div class="mb-6">
              <label
                for="utilityBill"
                class="block text-zinc-700 text-sm font-bold mb-2"
              >
                Upload Utility Bill
              </label>
              <input
                type="file"
                id="utilityBill"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-center">
            <button class=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-52">
              Continue
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
