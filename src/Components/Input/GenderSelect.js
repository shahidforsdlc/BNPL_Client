import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';

export default function GenderSelect(props) {
    const [genderarr, setGenderarr] = useState([
        { id: "1", name: "Male" },
        { id: "2", name: "Female" },
        { id: "3", name: "Other" },
    ]);
    console.log(props.plac)
    return (
        <React.Fragment>
            <div class="relative  mt-[2px]">
              
                    <label id={"lbl"+props.id} className=" text-[15px] font-semibold text-black" for="floating_outlined"> {props.label} <span className="text-red-500">*</span> </label>
                    <div className={`relative w-full  ${props.disabled?"bg-lightgray":"bg-transparent"}`}>
                        <select
                      disabled={props.disabled}
                      className={`block ${props.value && props.value.length==0?"text-inputBorder":"text-black"} text-txt   rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900  ${props.disabled?"bg-lightgray":"bg-transparent"}  border ${
                        props.error ? "border-[red]" : "border-inputBorder "
                      } appearance-none  focus:outline-none focus:ring-0 peer`}
                            name={props.name}
                            onChange={props.onChange}
                            value={props.value}
                            id={props.id}
                            placeholder="Select Gender"
                            type="text"
                        >
                            <option className='' value="" disabled selected>
                             <div className='text-gray-500'>
                                {props.placeholder}
                                </div>
                            </option>
                            {genderarr.map((e, key) => {
                                return (
                                    <option key={key} value={e.name}>
                                        {e.name}
                                    </option>
                                );
                            })}
                        </select>
                        <FaChevronDown 
                            className={`absolute cursor-pointer pointer-events-none top-4 right-3 ${props.error ? "fill-[red]" : "fill-inputBorder"}`}
                        />
                    </div>
            </div>
        </React.Fragment>
    )
}
