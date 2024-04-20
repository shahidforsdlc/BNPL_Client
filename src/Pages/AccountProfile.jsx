import React, { useState } from "react";
import HeaderComponent from "../Components/HeaderComponent";

const AccountProfile = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [accountType, setAccountType] = useState(""); // State for account type
  const [isOpen, setIsOpen] = useState(false);
  const containerClass = "border border-zinc-300";
  const buttonClass = "flex items-center justify-between w-full text-left";
  // Function to toggle the collapsible content
  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  // List of banks
  const banks = ["Bank 1", "Bank 2", "Bank 3"];

  const handleBankSelection = (bank) => {
    setSelectedBank(bank);
    setIsOpen(false); // Close the collapsible content
  };

  // Function to handle account type selection
  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  return (
    <div className="flex justify-center">
      <div style={{ width: "800px" }} className="flex justify-center">
        <div className="h-screen w-full m-9">
          <HeaderComponent />
          <div className="flex justify-center mt-2">
            <span className="text-xl font-bold">Salary Account Profiling</span>
          </div>
          <div className="max-w-md mx-auto">
            {selectedBank ? (
              <div className="max-w-lg mx-auto p-4 ">
                <div className="mb-4">
                  <label
                    htmlFor="bankName"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={selectedBank}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <fieldset className="mb-6 flex flex-row gap-4">
                  <legend className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Account Type
                  </legend>
                  <div className="flex items-center mb-4">
                    <input
                      id="current"
                      name="accountType"
                      type="radio"
                      checked={accountType === "Current"}
                      onChange={() => handleAccountTypeChange("Current")}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-zinc-300 dark:border-zinc-600"
                    />
                    <label
                      htmlFor="current"
                      className="ml-3 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      Current
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="saving"
                      name="accountType"
                      type="radio"
                      checked={accountType === "Saving"}
                      onChange={() => handleAccountTypeChange("Saving")}
                      className="focus:ring-red-500 h-4 w-4 text-red-600 border-zinc-300 dark:border-zinc-600"
                    />
                    <label
                      htmlFor="saving"
                      className="ml-3 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      Saving
                    </label>
                  </div>
                </fieldset>
                <div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-32 flex justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-3xl"
                    >
                      Authenticate
                    </button>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-lg ">
                  <h2 class="text-lg  text-center font-semibold text-zinc-700 mb-4">
                    Enter OTP
                  </h2>
                  <div class="flex space-x-2 mb-4">
                    <input
                      type="text"
                      class="w-12 p-2 text-center border rounded"
                      maxlength="1"
                    />
                    <input
                      type="text"
                      class="w-12 p-2 text-center border rounded"
                      maxlength="1"
                    />
                    <input
                      type="text"
                      class="w-12 p-2 text-center border rounded"
                      maxlength="1"
                    />
                    <input
                      type="text"
                      class="w-12 p-2 text-center border rounded"
                      maxlength="1"
                    />
                    <button class="bg-zinc-200 text-zinc-700 px-4 py-2 rounded hover:bg-zinc-300">
                      Resend OTP
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button class="w-32  bg-green-500 text-white p-1 rounded-2xl hover:bg-green-600">
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Show bank selection section if no bank is selected
              <div className={`bg-zinc-100 p-4 rounded-t-lg w-full mt-5`}>
                <button className={buttonClass} onClick={toggleCollapsible}>
                  <span className="font-semibold">
                    List of Banks present in BVN
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    isOpen ? "" : "hidden"
                  } bg-white border-t-0 p-4 rounded-b-lg`}
                >
                  <ul className="space-y-2">
                    {banks.map((bank, index) => (
                      <li key={index} onClick={() => handleBankSelection(bank)}>
                        {bank}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
