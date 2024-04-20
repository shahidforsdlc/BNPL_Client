import React, { useState } from "react";
import HeaderComponent from "../Components/HeaderComponent";

const EmploymentStatus = () => {
  const [status, setStatus] = useState("");

  // Handle change in select dropdown
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <div style={{ width: "800px" }}>
        <div className="h-screen w-full m-9">
          <HeaderComponent />
          <div className="flex justify-center mt-2">
            <span className="text-xl font-bold">Employment Status</span>
          </div>

          <div className="bg-white p-4  rounded-lg max-w-4xl mx-auto">
            <div class="max-w-sm mx-auto p-4">
              <div class="mb-4">
                <select
                  id="employment-status"
                  name="employment-status"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-zinc-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Employed</option>
                  <option>Self-employed</option>
                  <option>Unemployed</option>
                  <option>Student</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="employerAddress1"
                  className="block text-sm font-medium text-zinc-700"
                >
                  Employer Name
                </label>
                <input
                  type="text"
                  id="employerAddress1"
                  name="employerAddress1"
                  className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="employerAddress1"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Employer Address
                  </label>
                  <input
                    type="text"
                    id="employerAddress1"
                    name="employerAddress1"
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="employerAddress2"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Employer Address
                  </label>
                  <input
                    type="text"
                    id="employerAddress2"
                    name="employerAddress2"
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="dateOfEmployment"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Date of Employment
                  </label>
                  <input
                    type="date"
                    id="dateOfEmployment"
                    name="dateOfEmployment"
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="letterOfEmployment"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Attach Letter of Employment
                  </label>
                  <input
                    type="file"
                    id="letterOfEmployment"
                    name="letterOfEmployment"
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-52">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentStatus;
