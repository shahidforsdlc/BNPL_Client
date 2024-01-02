import { City, State, Country } from "country-state-city";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const CityPicker = (props) => {

 
  //Variables
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

//  getting country
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  // //getting state
  useEffect(() => {
    console.log("countries-------",countries)
    let code =Country.getAllCountries()
      .filter((e) => e.name == props.country)
      .map((e) => e.isoCode)
      .toString();
      console.log("code-----",code)
      let statesM= State.getStatesOfCountry(code);
      let scode = statesM
      .filter((e) => e.name == props.state)
      .map((e) => e.isoCode)
      .toString();
      console.log("state and counteyr",code,scode)
    setCities(City.getCitiesOfState(code, scode));
   // setStates(State.getStatesOfCountry(code));
  }, [props]);

  // // getting city
  // useEffect(() => {
  //   if(props.country.length>0 && props.state.length>0){
  //   let ccode = countries
  //     .filter((e) => e.name == props.country)
  //     .map((e) => e.isoCode)
  //     .toString();
  //   let scode = states
  //     .filter((e) => e.name == props.state)
  //     .map((e) => e.isoCode)
  //     .toString();
  //     console.log("state and counteyr",ccode,scode)
  //   setCities(City.getCitiesOfState(ccode, scode));
  //   console.log("city", City.getCitiesOfState(ccode, scode));
  //   }
  // }, [props,props.random]);

  return (
    <div class="relative  mt-[2px] ">
       
      <label
        id={`lbl${props.id}`}
        for="floating_outlined"
        className=" text-[15px] font-semibold text-black "
      >
        {props.label} {!props.optional? <span className="text-red-500">*</span>:null}
      </label>
      
      <select
        disabled={props.disabled}
        className={`block  rounded-[6px] px-2.5 pb-2.5 pt-3 w-full 
        ${props.disabled?"bg-lightgray":"bg-transparent"}
        h-[45px] text-txt  ${props.value.length==0?
      "text-inputBorder":"text-black"}   border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none  focus:outline-none focus:ring-0 peer`}
        name={props.id}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        placeholder="Select City"
        type="text"
      >
        <option  value="" disabled selected>
        Select Your City
        </option>
        {cities.map((e, key) => {
          return (
            <option  className="text-black" key={key} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>

      <FaChevronDown
        className={`absolute cursor-pointer pointer-events-none top-10 h-4 w-6 right-2  ${
          props.error ? "fill-[red]" : "fill-inputBorder"
        }`}
      />
    </div>
  );
};

export default CityPicker;
