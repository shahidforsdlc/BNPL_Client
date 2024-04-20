import React, { useState } from "react";
import HeaderComponent from "../Components/HeaderComponent";

const Stacks = () => {


  return (
    <>
      {/* <div className='flex justify-center  h-screen'>
      <div style={{ width: '800px' }}>
        <HeaderComponent />
        <div className='flex justify-center mt-2'>
          <span className='text-xl font-bold'>Stacks</span>
        </div>
        <div className='flex flex-row justify-center gap-80'>
          <span className='text-lg font-semibold'>Pay</span>
          <span className='text-lg font-semibold'>NGN 1</span>
        </div>
        <div className='flex items-center justify-center'>
          <hr style={{ width: '60%', height: '1px', backgroundColor: 'black' }} />
        </div>
        <div className='flex  '>
          <span>Pay With :</span>
        </div>
      </div>
    </div> */}
      <div className="flex justify-center">
        <div style={{ width: "800px" }} className="flex justify-center">
          <div className="h-screen">
            <HeaderComponent />
            <div className="flex justify-center mt-2">
              <span className="text-xl font-bold">Stacks</span>
            </div>
            <div className="flex flex-row justify-between gap-72">
              <span className="text-lg font-semibold">Pay</span>
              <span className="text-lg font-semibold">NGN 1</span>
            </div>
            <div className="flex items-center justify-center">
              <hr
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "black",
                }}
              />
            </div>
            <div className="flex justify-start mt-2">
              <span className="text-md font-medium">Pay With :</span>
            </div>
            <div>
              <div className="flex items-center flex-row">
                <div className="flex items-center ">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio h-5 w-5 text-zinc-600"
                  />
                  <span className={`ml-2 `}> Cards</span>
                </div>
                <div className="flex items-center ml-4 ">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio h-5 w-5 text-zinc-600"
                  />
                  <span className={`ml-2 `}> Transfer</span>
                </div>
                <div className="flex items-center ml-4">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio h-5 w-5 text-zinc-600"
                  />
                  <span className={`ml-2 `}> Spen Now Pay Later</span>
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <label className={"bold  text-md mb-2 "}>
                    Bank Verification Number
                  </label>
                </div>
                <div class="flex justify-between space-x-2 mt-4">
                  <input
                    type="text"
                    class="form-input border rounded w-10 p-2 border-zinc-300 dark:border-zinc-600 text-center"
                    maxlength="1"
                  />
                  <input
                    type="text"
                    class="form-input border rounded w-10 p-2 border-zinc-300 dark:border-zinc-600 text-center"
                    maxlength="1"
                  />
                  <input
                    type="text"
                    class="form-input border rounded w-10 p-2 border-zinc-300 dark:border-zinc-600 text-center"
                    maxlength="1"
                  />
                  <input
                    type="text"
                    class="form-input border rounded w-10 p-2 border-zinc-300 dark:border-zinc-600 text-center"
                    maxlength="1"
                  />
                  <input
                    type="text"
                    class="form-input border rounded w-10 p-2 border-zinc-300 dark:border-zinc-600 text-center"
                    maxlength="1"
                  />
                  <input
                    type="text"
                    class="form-input border rounded w-10 p-2 border-zinc-300 dark:border-zinc-600 text-center"
                    maxlength="1"
                  />
                  <input
                    type="text"
                    class="form-input border rounded w-10 p-2 border-zinc-300 dark:border-zinc-600 text-center"
                    maxlength="1"
                  />
                  <input
                    type="text"
                    class="form-input border rounded w-10 p-2 border-zinc-300 dark:border-zinc-600 text-center"
                    maxlength="1"
                  />
                  <input
                    type="text"
                    class="form-input border rounded w-10 p-2 border-zinc-300 dark:border-zinc-600 text-center"
                    maxlength="1"
                  />
                  <input
                    type="text"
                    class="form-input border rounded w-10 p-2 border-zinc-300 dark:border-zinc-600 text-center"
                    maxlength="1"
                  />
                </div>
                <div class="flex items-center justify-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-zinc-600"
                  />
                  <label class="ml-2 text-zinc-700 dark:text-zinc-300">
                    {" "}
                    I agree to Terms & Condition.{" "}
                  </label>
                </div>
                <div className="flex items-center justify-center">
                  <button class="w-24 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-3xl mt-5">
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stacks;
