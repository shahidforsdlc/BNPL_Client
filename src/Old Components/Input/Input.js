
import React from 'react';
const Input = (props) => {
    return (
      <div class="relative  mt-[2px]">
        <div className={`flex ${props.optional ? "justify-between" : ""} `}>
          <label
            id={`lbl${props.id}`}
            for={props.id}
            className=" text-[15px] font-semibold text-black "
          >
            {props.label}{" "}
            {props.id != "cardNumber" &&
              props.id != "cardNumber" &&
              props.id != "bankName" &&
              props.id != "expirationDate" &&
              props.id != "cvv"}
          </label>
          {!props.cardLayout &&
            (props.optional ? (
              <p className=" text-[15px]  text-inputBorder">Optional</p>
            ) : (
              props.id != "directorEmail" &&
              props.id != "debtComments" &&
              props.id != "debtOfferComments" &&
              props.id != "globalchat" && <span className="text-red-500 ml-1">*</span>
            ))}
        </div>
        <input
          maxLength={props.maxLength}
          type={`${props.type ? props.type : "text"}`}
          disabled={props.disabled}
          name={props.id}
          id={props.id}
          className={`block rounded-[6px] px-2.5 pb-2.5 pt-3 w-full h-[45px] text-txt text-gray-900  ${
            props.disabled ? "bg-lightgray" : "bg-white"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder"
          } appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer ${
            props.classname
          }
          ${props.customClass === 'businnesemail' ? 'mt-2 lg:mt-0 xl:mt-5 md:mt-0 sm:0 2xl:mt-0': ''}
          `}
          placeholder={`Enter ${
            props.placeholder
              ? `${props.placeholder}`
              : props.label == "Commitment"
              ? "Amount"
              : props.label
          }`}
          value={props.value}
          onChange={props.onChange}
        />
          <style jsx>{`
         input:-webkit-autofill,
         input:-webkit-autofill:hover,
         input:-webkit-autofill:focus,
         input:-webkit-autofill:active {
             -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
             -webkit-transition-delay: 9999s;
         }
        `}</style>
      </div>
    );
  };
  
  export default Input;