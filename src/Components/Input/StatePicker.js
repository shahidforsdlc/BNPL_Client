import { City, State, Country } from "country-state-city";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const StatePicker = (props) => {
    console.log("value---",props.value)
    const[state,setState]=useState("");
    const [states, setStates] = useState([]);
    const [countries, setCountries] = useState([]);
    //getting country
    useEffect(() => {
    
    }, []);

      //getting state
  useEffect(() => {
  //  setCountries(Country.getAllCountries());
    let code =Country.getAllCountries()
      .filter((e) => e.name == props.country)
      .map((e) => e.isoCode)
      .toString();
    setStates(State.getStatesOfCountry(code));
  }, [props]);


  
  return (
    <div class="relative  mt-[2px]">
      <label
      id={`lbl${props.id}`}
        for="floating_outlined"
        className=" text-[15px] font-semibold text-black "
      >
        {props.label}  {!props.optional?<span className="text-red">*</span>:null} 
      </label>
      <select
        disabled={props.disabled}
        className={`block ${props.value.length==0?"text-inputBorder":"text-black"} rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900  ${props.disabled?"bg-lightgray":"bg-transparent"}  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
        name={props.id}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        placeholder="Select state"
        type="text"
      >
        <option value="" disabled selected>
          Select your state
        </option>
        {states.map((e, key) => {
          return (
            <option  className="text-black" key={key} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>
        
      <FaChevronDown
        className={`absolute cursor-pointer pointer-events-none top-10 h-4 w-6 right-2   ${
          props.error ? "fill-[red]" : "fill-inputBorder"
        }`}
      />
    </div>
  );
};

export default StatePicker;
