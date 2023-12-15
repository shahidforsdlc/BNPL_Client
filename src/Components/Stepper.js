import React from "react";
import { FiCheck } from "react-icons/fi";
const Stepper = (props) => {
  const steps = ["Select Tenure", "Check Eligibility", "Payment"];

  return (
    <div className="flex sm:flex-row flex-col items-center justify-center w-full m-1">
      {steps.map((item, index) => (
        <div
          key={item}
          className={`flex ${
            steps.length - 1 > index ? "flex-auto" : "flex-none"
          } items-center m-1`}
        >
          <div className={`relative flex ${steps.length - 1 > index ? "items-center justify-center" : "items-start justify-start"}`}>
          <div
                  className={`${
                    props.current - 1 >= index
                      ? "rounded-full transition duration-500 border-[5px]  border-[rgba(38, 38, 234, 0.3)]    bg-[#1700e2] w-6 h-6 flex items-center justify-center"
                      : "rounded-full transition duration-500 border-[5px]  border-gray-200 bg-gray-300 w-6 h-6 flex items-center justify-center"
                  }
                      `}
                >
                  {props.current - 1 >= index ? (
                    <div className="">
                      <FiCheck color="#00DDE2" size="15px" />
                    </div>
                  ) : null}
                </div>

            <div
              id={item}
              className={`${props.current - 1 >= index ? "text-[#1700e2]" : "text-gray-300"} absolute top-6 whitespace-nowrap text-center sm:text-[14px] sm:text-left sm:bg-white sm:relative sm:top-0`}
            >
              {item}
            </div>
          </div>

          {steps.length - 1 > index && (
            <div
              className={`ml-1 border-dashed border-t-2 min-w-[15%] flex-grow ${
                props.current - 2 >= index ? "border-[#1700e2]" : "border-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
