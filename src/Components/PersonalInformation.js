import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import PhoneInput from "react-phone-input-2";
import GenderSelect from "./Input/GenderSelect";
import DobDatePicker from "./Input/DobDatePicker";
import { City, State, Country } from "country-state-city";
import Input from "./Input/Input";
import "react-phone-input-2/lib/style.css";
import parsePhoneNumber from "libphonenumber-js";
import CityPicker from "./Input/CityPicker";
import StatePicker from "./Input/StatePicker";
import CountryPicker from "./Input/CountryPicker";


const PersonalInformation = ({ checkStage2, setCheckStage2 }) => {
    var nonumber = /\d+/;
    var numberReg = /^[0-9]*$/;
    var nospecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const init = {
        firstName: "",
        lastName: "",
        fullName: "",
        dob: "",
        country: "",
        iso: "",
        gender: "",
        postCode: "",
        flat: "",
        house: "",
        address: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        countryCode: "",
        mobile: "",
        expirationDate: "",
        cardNumber: "",
        cvv: "",
    };


    const [fields, setFeilds] = useState(init);
    const [errors, setErrors] = useState(init);
    const [isMobileValid, setIsMobileValid] = useState(false);

    const isValid = () => {
        let isValid = true;
        let newErrors = { ...errors };

        // Validation for firstName
        if (
            fields["firstName"].length === 0 ||
            nonumber.test(fields["firstName"]) ||
            nospecial.test(fields["firstName"])
        ) {
            newErrors["firstName"] = "Invalid first name";
        } else {
            newErrors["firstName"] = "";
        }

        // Validation for lastName
        if (
            fields["lastName"].length === 0 ||
            nonumber.test(fields["lastName"]) ||
            nospecial.test(fields["lastName"])
        ) {
            newErrors["lastName"] = "Invalid last name";
        } else {
            newErrors["lastName"] = "";
        }

        // Validation for fullName
        if (
            fields["fullName"].length === 0 ||
            nonumber.test(fields["fullName"]) ||
            nospecial.test(fields["fullName"])
        ) {
            newErrors["fullName"] = "Invalid fullName";
        } else {
            newErrors["fullName"] = "";
        }

        // Validation for postCode
        if (
            fields["postCode"].length === 0 ||
            nonumber.test(fields["postCode"]) ||
            nospecial.test(fields["postCode"])
        ) {
            newErrors["postCode"] = "Invalid postCode";
        } else {
            newErrors["postCode"] = "";
        }

        // Validation for Dob
        if (!init["dob"] || init["dob"].length === 0) {
            newErrors["dob"] = "Please select a date of birth";
        } else {
            newErrors["dob"] = "";
        }

        // Validation for gender
        if (!init["gender"] || init["gender"].length === 0) {
            newErrors["gender"] = "Please select a gender";
        } else {
            newErrors["gender"] = "";
        }

        // Validation for mobile
        if (!init["mobile"] || init["mobile"].length === 0) {
            newErrors["mobile"] = "Mobile number is required";
        } else {
            const mobileRegex = /^[0-9]{10}$/;
            if (!mobileRegex.test(init["mobile"])) {
                newErrors["mobile"] = "Invalid mobile number";
            } else {
                newErrors["mobile"] = "";
            }
        }

        // Validation for flat Number
        if (!init["flat"] || init["flat"].length === 0) {
            newErrors["flat"] = "Flat number is required";
        } else {
            newErrors["flat"] = "";
        }

        // Validation for House Number
        if (!init["house"] || init["house"].length === 0) {
            newErrors["house"] = "House No/Name is required";
        } else {
            newErrors["house"] = "";
        }

        // Validation for Address1
        if (!init["address1"] || init["address1"].length === 0) {
            newErrors["address1"] = "Address Line 1 is required";
        } else {
            newErrors["address1"] = "";
        }

        // Validation for Country
        if (!init["country"] || init["country"].length === 0) {
            newErrors["country"] = "Country is required";
        } else {
            newErrors["country"] = "";
        }

        // Validation for State
        if (!init["state"] || init["state"].length === 0) {
            newErrors["state"] = "State is required";
        } else {
            newErrors["state"] = "";
        }
        if (!init["city"] || init["city"].length === 0) {
            newErrors["city"] = "City is required";
        } else {
            newErrors["city"] = "";
        }

        //// Validation for Card Number
        if (
            !init["cardNumber"] ||
            init["cardNumber"].length !== 12 ||
            !/^\d+$/.test(init["cardNumber"])
        ) {
            newErrors["cardNumber"] = "Card Number is required";
        } else {
            newErrors["cardNumber"] = "";
        }

        // Validation for cvv
        if (
            !init["cvv"] ||
            init["cvv"].length !== 3 ||
            !/^\d+$/.test(init["cvv"])
        ) {
            newErrors["cvv"] = "CVV is required";
        } else {
            newErrors["cvv"] = "";
        }

        setErrors(newErrors);
    };

    const onChange = (e) => {
        let newErrors = { ...errors };
        console.log("set valuse------------", e.target.id, e.target.value);
        setFeilds({ ...fields, [e.target.id]: e.target.value });
        var lbltext = document.getElementById("lbl" + e.target.id).innerHTML;


        if (e.target.id === "address2") {
            if (e.target.value.toString().trim().length == 0) {
                if (e.target.id != "address2") {
                    newErrors[e.target.id] = `Invalid ${lbltext}`;
                }
            } else {
                newErrors[e.target.id] = "";
            }
        }

        if (e.target.id == "gender") {
            if (e.target.value.length == 0) {
                newErrors["gender"] = "Please Select Gender";
            } else {
                newErrors["gender"] = "";
                console.log("gender:--", e.target.value);
                setFeilds({ ...fields, gender: e.target.value });
            }
        }

        if (
            e.target.id === "firstName" ||
            e.target.id === "lastName" ||
            e.target.id === "fullName"
        ) {
            if (
                e.target.value.trim().length == 0 ||
                nonumber.test(e.target.value.trim()) ||
                nospecial.test(e.target.value.trim())
            ) {
                newErrors[e.target.id] = `Invalid ${lbltext}`;
            } else {
                newErrors[e.target.id] = "";
            }
        }

        if (e.target.id == "mobile") {
            if (numberReg.test(e.target.value) == false) {
                newErrors[e.target.id] = "Can only accept Numbers";
            } else {
                newErrors[e.target.id] = "";
            }
        }


        if (e.target.id == "country") {
            let temp = { ...fields };

            if (e.target.value.length > 0) {
                console.log("while changeing state", temp);
                temp["country"] = e.target.value;
                temp["state"] = "";
                temp["city"] = "";
                temp["postCode"] = "";
                console.log("after", temp);
                setFeilds(temp);
            }
        }

        //For postcode selection
        if (e.target.id == "postCode") {
            let temp = { ...fields };
            if (fields["country"] === "" && e.target.value.length > 0) {
                newErrors["postCode"] = "Please Select Country";
            }
            // if(fields['country']==="United Kingdom" && !ukpostcodeReg.test(e.target.value) > 0 ) {
            //   newErrors['postCode'] ='Invalid Post Code'
            // }

            if (e.target.value.length > 0) {
                temp["postCode"] = e.target.value;
                temp["state"] = "";
                temp["city"] = "";
                console.log("after", temp);
                setFeilds(temp);
            }
        }

        //For State selection
        if (e.target.id == "state") {
            let temp = { ...fields };
            if (e.target.value.length > 0) {
                console.log("while changeing state", temp);
                temp["state"] = e.target.value;
                temp["city"] = "";
                console.log("after", temp);
                setFeilds(temp);
            }
        }

        //For city selection
        if (e.target.id == "city") {
            let temp = { ...fields };
            if (e.target.value.length > 0) {
                if (fields["country"] == "United Kingdom") {
                    console.log("while changeing state", temp);

                    temp["state"] = e.target.value;
                    temp["city"] = e.target.value;
                    console.log("after", temp);
                    setFeilds(temp);
                } else {
                    temp["city"] = e.target.value;
                    console.log("after", temp);
                    setFeilds(temp);
                }
            }
        }

        setErrors(newErrors);
    };

    //getting dob
    const onChangeDob = (e) => {
        let newErrors = { ...errors };
        setFeilds({ ...fields, ["dob"]: e });
        newErrors["dob"] = "";
        setErrors(newErrors);
    };

    //getting dob error
    const getDobDeatils = (e) => {
        let newErrors = { ...errors };
        newErrors["dob"] = "Invalid Dob";
        setErrors(newErrors);
    };

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    //getting state
    useEffect(() => {
        if (fields["country"] && fields["country"].length > 0) {
            let code = Country.getAllCountries()
                .filter((e) => e.name == fields["country"])
                .map((e) => e.isoCode)
                .toString();
            setFeilds({ ...fields, iso: code });
            setStates(State.getStatesOfCountry(code));
        }
    }, [fields["country"]]);

    // //getting state
    useEffect(() => {
        let code = Country.getAllCountries()
            .filter((e) => e.name == fields["country"])
            .map((e) => e.isoCode)
            .toString();
        console.log("code-----", code);
        let statesM = State.getStatesOfCountry(code);
        let scode = statesM
            .filter((e) => e.name == fields["state"])
            .map((e) => e.isoCode)
            .toString();
        setCities(City.getCitiesOfState(code, scode));
        // setStates(State.getStatesOfCountry(code));
    }, [fields["state"], fields["country"]]);

    const onSubmit = () => {
        isValid();
    };

    return (
        <>
            <div className="w-full border rounded-md p-5  space-y-4  mt-4 ">
                <div className="flex justify-center items-center underline-offset-2 text-lg font-bold text-[#1700e2]">
                    Your Personal Information
                </div>

                <div className="grid xs:grid-cols-2 sm:gap-4 mt-4 gap-y-2  lg:mx-0 xl:grid-cols-3">

                    {/* First Name */}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id={"firstName"}
                                label="First Name"
                                error={errors["firstName"].length > 0 ? true : false}
                                value={fields["firstName"]}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                            />
                        </div>
                        {errors["firstName"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">
                                {errors["firstName"]}
                            </div>
                        ) : null}
                    </div>
                    {/* Last Name */}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id={"lastName"}
                                label="Last Name"
                                error={errors["lastName"].length > 0 ? true : false}
                                value={fields["lastName"]}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                            />
                        </div>
                        {errors["lastName"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">{errors["lastName"]}</div>
                        ) : null}
                    </div>

                    {/* Date of birth */}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <DobDatePicker
                                id={"dob"}
                                func2={(e) => {
                                    getDobDeatils(e);
                                }}
                                value={fields["dob"].length > 0 ? fields["dob"] : undefined}
                                label="Date Of Birth"
                                error={errors["dob"].length > 0 ? true : false}
                                func={(e) => {
                                    onChangeDob(e);
                                }}
                            />
                        </div>
                        {errors["dob"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">{errors["dob"]}</div>
                        ) : null}
                    </div>
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col w-full">
                            <GenderSelect
                                label="Gender"
                                placeholder="Select Gender"
                                error={errors["gender"].length > 0 ? true : false}
                                value={fields["gender"]}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                                id="gender"
                                name="gender"
                            />
                        </div>
                        {errors["gender"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">{errors["gender"]}</div>
                        ) : null}
                    </div>

                    <div className="h-[80px] w-full">
                        <div className="flex flex-col space-y-1">
                            <div className={`flex `}>
                                <label
                                    id={`lblmobile`}
                                    for={"mobile"}
                                    className=" text-txt font-semibold text-black "
                                >
                                    Mobile Number
                                </label>

                                <span className="text-red-500 ml-1">*</span>
                            </div>
                            <PhoneInput
                                country={"gb"}
                                placeholder="Enter mobile number"
                                value={fields["mobile"]}
                                onChange={(value, country) => {
                                    let newErrors = { ...errors };

                                    const phoneNumber = parsePhoneNumber(
                                        value.substring(country?.dialCode.length),
                                        country.countryCode.toUpperCase()
                                    );
                                    if (phoneNumber) {
                                        console.log("Phone number-----------", phoneNumber);
                                        console.log("is validp hone", phoneNumber.isValid());
                                        console.log("is possible", phoneNumber.isPossible());

                                        if (!phoneNumber.isPossible()) {
                                            setIsMobileValid(false);
                                            newErrors["mobile"] = "Invalid Mobile Number";
                                        } else if (
                                            country.countryCode.toUpperCase() == "GB" ||
                                            country.countryCode.toUpperCase() == "IN" ||
                                            country.countryCode.toUpperCase() == "US"
                                        ) {
                                            if (
                                                value.substring(country?.dialCode.length).length < 10
                                            ) {
                                                setIsMobileValid(false);
                                                newErrors["mobile"] = "Invalid Mobile Number";
                                            } else {
                                                setIsMobileValid(true);
                                                newErrors["mobile"] = "";
                                            }
                                        } else {
                                            setIsMobileValid(true);
                                            newErrors["mobile"] = "";
                                        }
                                    }

                                    setErrors(newErrors);
                                    setFeilds({ ...fields, mobile: value });

                                    value = "+" + value;

                                    console.log("phonenumber...", value, country?.dialCode);
                                }}
                                inputStyle={{
                                    display: "block",
                                    width: "100%",
                                    height: "45px",
                                    paddingTop: "1.122rem",
                                    paddingRight: "0.75rem",
                                    paddingBottom: "1.122rem",
                                    paddingLeft: "3rem",
                                    fontSize: "0.875rem",
                                    fontWeight: "400",
                                    lineHeight: "1.5",
                                    color: "#495057",
                                    backgroundColor: "#fff",
                                    backgroundClip: "padding-box",
                                    borderRadius: "6px",
                                    border:
                                        errors["mobile"].length > 0
                                            ? "1px solid red"
                                            : "1px solid #A6AEBB",
                                    appearance: "none",

                                    transition:
                                        "border-color 0.15s ease-in-out box-shadow 0.15s ease-in-out",
                                }}
                            />
                        </div>
                        {errors["mobile"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">{errors["mobile"]}</div>
                        ) : null}
                    </div>
                </div>
                <div className="flex justify-center items-center underline-offset-2 text-lg font-bold text-[#1700e2]">
                    Your Address Details
                </div>

                <div className="grid xs:grid-cols-2 sm:gap-4 mt-4 gap-y-2  lg:mx-0 xl:grid-cols-3">
                    <div className="flex flex-col h-[80px] mb-2 w-full">
                        <CountryPicker
                            id={"country"}
                            placeholder="Select Country Name"
                            label="Country"
                            error={errors["country"].length > 0 ? true : false}
                            value={fields["country"]}
                            onChange={(e) => {
                                onChange(e);
                            }}
                        />

                        {errors["country"].length > 0 ? (
                            <p className="text-[#fa1c07] text-sm">{errors["country"]}</p>
                        ) : null}
                    </div>

                    {/* Post Code */}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id={"postCode"}
                                label="Post Code"
                                error={errors["postCode"].length > 0 ? true : false}
                                value={fields["postCode"]}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                            />
                        </div>
                        {errors["postCode"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">{errors["postCode"]}</div>
                        ) : null}
                    </div>

                    {/* Flat number */}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id={"flat"}
                                label="Flat Number"
                                error={errors["flat"].length > 0 ? true : false}
                                value={fields["flat"]}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                            />
                        </div>
                        {errors["flat"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">{errors["flat"]}</div>
                        ) : null}
                    </div>

                    {/* House Number and mname*/}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id={"house"}
                                label="House No.#/Name"
                                placeholder="House No/ Name"
                                error={errors["house"].length > 0 ? true : false}
                                value={fields["house"]}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                            />
                        </div>
                        {errors["house"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">{errors["house"]}</div>
                        ) : null}
                    </div>

                    {/* Address 1*/}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id={"address1"}
                                label="Address Line 1"
                                error={errors["address1"].length > 0 ? true : false}
                                value={fields["address1"]}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                            />
                        </div>
                        {errors["address1"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">{errors["address1"]}</div>
                        ) : null}
                    </div>

                    {/* Address 2*/}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id={"address2"}
                                label="Address Line 2"
                                optional={true}
                                error={errors["address2"].length > 0 ? true : false}
                                value={fields["address2"]}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                            />
                        </div>
                        {errors["address2"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">{errors["address2"]}</div>
                        ) : null}
                    </div>

                    {/* CountryPicker */}
                    {fields["country"] != "United Kingdom" ? (
                        <div className="h-[80px] w-full">
                            <div className="flex flex-col space-y-1">
                                {states.length > 0 ? (
                                    <StatePicker
                                        label="State"
                                        onChange={onChange}
                                        placeholder="Enter State"
                                        name="state"
                                        error={errors["state"].length > 0 ? true : false}
                                        id="state"
                                        country={fields["country"]}
                                        value={fields["state"]}
                                    />
                                ) : (
                                    <Input
                                        label="State"
                                        onChange={onChange}
                                        placeholder="Enter State"
                                        name="state"
                                        error={errors["state"].length > 0 ? true : false}
                                        id="state"
                                        country={fields["country"]}
                                        value={fields["state"]}
                                    />
                                )}
                            </div>
                            {errors["state"].length > 0 ? (
                                <div className="text-[#fa1c07] text-sm">{errors["state"]}</div>
                            ) : null}
                        </div>
                    ) : null}

                    <div className="h-[80px] w-full">
                        <div className="flex flex-col space-y-1">
                            {cities.length > 0 &&
                                fields["country"] != "United States" &&
                                fields["country"] != "United Kingdom" ? (
                                <CityPicker
                                    label="City"
                                    onChange={onChange}
                                    placeholder="Enter City"
                                    name="city"
                                    id="city"
                                    error={errors["city"].length > 0 ? true : false}
                                    state={fields["state"]}
                                    country={fields["country"]}
                                    value={fields["city"]}
                                />
                            ) : (
                                <Input
                                    label="City/County"
                                    onChange={onChange}
                                    placeholder="City"
                                    name="city"
                                    id="city"
                                    error={errors["city"].length > 0 ? true : false}
                                    state={fields["state"]}
                                    country={fields["country"]}
                                    value={fields["city"]}
                                />
                            )}
                        </div>
                        {errors["city"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">{errors["city"]}</div>
                        ) : null}
                    </div>
                </div>

                <div className="flex justify-center items-center underline-offset-2 text-lg font-bold text-[#1700e2]">
                    Credit Card / Debit Card
                </div>
                {/* Expiration Date */}
                <div className="grid xs:grid-cols-2 sm:gap-4 mt-4 gap-y-2  lg:mx-0 xl:grid-cols-3">
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                type="date"
                                label={"Expiration Date"}
                                cardLayout={true}
                                maxLength={"4"}
                                id={"expirationDate"}
                                value={fields["expirationDate"]}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                                placeholder="Expiration Date(MMYY)"
                            />
                        </div>
                    </div>

                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                cardLayout={true}
                                maxLength={"16"}
                                label={"Card Number"}
                                id={"cardNumber"}
                                value={fields["cardNumber"]}
                                error={
                                    errors["cardNumber"] && errors["cardNumber"].length > 0
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    onChange(e);
                                }}
                                placeholder="Card Number"
                            />
                            {errors["cardNumber"] && errors["cardNumber"].length > 0 ? (
                                <div className="text-[#fa1c07] text-sm">
                                    {errors["cardNumber"]}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                cardLayout={true}
                                label={"CVV"}
                                maxLength={"3"}
                                id={"cvv"}
                                value={fields["cvv"]}
                                error={errors["cvv"] && errors["cvv"].length > 0 ? true : false}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                                placeholder="CVV"
                            />
                            {errors["cvv"] && errors["cvv"].length > 0 ? (
                                <div className="text-[#fa1c07] text-sm">{errors["cvv"]}</div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                  
                    {/* Sumbit Button */}
                    <button
                        className="flex items-center gap-2 bg-gradient-to-r from-[#2626F4] hover:bg-gradient-to-r active:bg-gradient-to-r active:from-[#00DDE2] active:to-[#2626F4] hover:from-[#2626F4] hover:to-[#00DDE2] to-[#171795] rounded px-4 py-2 text-white"
                        onClick={() => onSubmit()}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default PersonalInformation;
