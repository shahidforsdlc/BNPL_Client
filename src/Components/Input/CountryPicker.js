import React from "react";
import { Country } from "country-state-city";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
const CountryPicker = (props) => {
  const [countries, setCountries] = useState([]);
  //getting country
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  return (
    <div class={`relative  mt-[2px] ${props.customClass === 'countryresidence' ? 'flex flex-col gap-0 sm:gap-1 md:gap-0': ''}`}>
      <label
        id={`lbl${props.id}`}
        for="floating_outlined"
        className="  text-[15px] font-semibold text-black "
      >
        {props.label}{" "}
        {!props.optional ? <span className="text-red-500">*</span> : null}
      </label>
      <select
        disabled={props.disabled}
        className={`block ${
          props.value && props.value.length == 0
            ? "text-inputBorder"
            : "text-black"
        } text-txt rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px]  text-gray-900  ${
          props.disabled ? "bg-lightgray" : "bg-transparent"
        }  border-[0.3px] ${
          props.error ? "border-[red]" : "border-[#A6AEBB]"
        } appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
        name={props.id}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        placeholder="Select Country"
        type="text"
      >
        <option value="" disabled selected>
          {props.placeholder ? props.placeholder : "Select Your " + props.label}
        </option>
        {countries.map((e, key) => {
          return (
            <option className="text-black" key={key} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>

      <FaChevronDown
        className={`absolute 
        ${props?.largeLabel?"top-16":"top-10"} 
        ${props.customClass === 'countryresidence' ? 'sm:top-9 md:top-10 lg:top-9 xl:top-10 2xl:top-10' : 'top-10'}
         h-4 w-7 cursor-pointer right-2 pointer-events-none ${
          props.error ? "fill-[red]" : "fill-inputBorder"
        }`}
      />
    </div>
  );
};

export default CountryPicker;
