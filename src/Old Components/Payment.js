import React, { useState, useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { City, State, Country } from "country-state-city";
import CityPicker from "./Input/CityPicker";
import StatePicker from "./Input/StatePicker";
import CountryPicker from "./Input/CountryPicker";
import Input from "./Input/Input";


const Payment = () => {

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

    const onChange = (e) => {
        let newErrors = { ...errors };
        console.log("set valuse------------", e.target.id, e.target.value);
        setFeilds({ ...fields, [e.target.id]: e.target.value });
        var lbltext = document.getElementById("lbl" + e.target.id).innerHTML;

        console.log("label------", lbltext, fields[e.target.id]);

        if (e.target.value.toString().trim().length == 0) {
            if (e.target.id != "address2") {
                newErrors[e.target.id] = `Invalid ${lbltext}`;
            }
        } else {
            newErrors[e.target.id] = "";
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

        if (e.target.id === "firstName" || e.target.id === "lastName" || e.target.id === "fullName") {
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

        //For country selection
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
        console.log("state and counteyr", code, scode);
        setCities(City.getCitiesOfState(code, scode));
        // setStates(State.getStatesOfCountry(code));
    }, [fields["state"], fields["country"]]);


    return (
        <>
            <div className="w-full border rounded-md p-5  space-y-4  mt-4 ">
                <div className="w-full flex justify-center items-center">
                    <div className="flex flex-row w-[60%] justify-center gap-1 bg-black p-2 border rounded-md items-center  text-lg font-bold ">
                        <FcGoogle className="text-red-500 " />
                        <p className="text-white">Pay</p>
                    </div>
                </div>
                <div className="flex justify-center ga-2 items-center">
                    <div className="border w-1/3 " />
                    <div className="">Or Pay Using</div>
                    <div className="border  w-1/3 " />
                </div>
                <div className="grid xs:grid-cols-1 sm:gap-1 mt-4 gap-y-0  lg:mx-0 lg:grid-cols-2">
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                cardLayout={true}
                                maxLength={"16"}
                                label={"Card Number"}
                                id={"cardNumber"}
                                value={fields["cardNumber"]}
                                error={
                                    errors["cardNumber"] &&
                                        errors["cardNumber"].length > 0
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    onChange(e);
                                }}
                                placeholder="Card Number"
                            />
                            {errors["cardNumber"] &&
                                errors["cardNumber"].length > 0 ? (
                                <div className="text-[#fa1c07] text-sm">
                                    {errors["cardNumber"]}
                                </div>
                            ) : null}
                        </div>
                    </div>
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
                                label={"CVV"}
                                maxLength={"3"}
                                id={"cvv"}
                                value={fields["cvv"]}
                                error={
                                    errors["cvv"] && errors["cvv"].length > 0
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    onChange(e);
                                }}
                                placeholder="CVV"
                            />
                            {errors["cvv"] && errors["cvv"].length > 0 ? (
                                <div className="text-[#fa1c07] text-sm">
                                    {errors["cvv"]}
                                </div>
                            ) : null}
                        </div>
                    </div>

                </div>
                <div className="grid xs:grid-cols-1 sm:gap-1 mt-4 gap-y-0  lg:mx-0 ">
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id={"fullName"}
                                label="Full Name"
                                error={
                                    errors["fullName"].length > 0 ? true : false
                                }
                                placeholder="Full Name"
                                value={fields["fullName"]}
                                onChange={(e) => {
                                    onChange(e);
                                }}
                            />
                        </div>
                        {errors["fullName"].length > 0 ? (
                            <div className="text-[#fa1c07] text-sm">
                                {errors["fullName"]}
                            </div>
                        ) : null}
                    </div>
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
                            <p className="text-[#fa1c07] text-sm">
                                {errors["country"]}
                            </p>
                        ) : null}
                    </div>
                    {fields["country"] != "United Kingdom" ? (
                        <div className="h-[80px] w-full">
                            <div className="flex flex-col space-y-1">
                                {states.length > 0 ? (
                                    <StatePicker
                                        label="State"
                                        onChange={onChange}
                                        placeholder="Enter State"
                                        name="state"
                                        error={
                                            errors["state"].length > 0 ? true : false
                                        }
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
                                        error={
                                            errors["state"].length > 0 ? true : false
                                        }
                                        id="state"
                                        country={fields["country"]}
                                        value={fields["state"]}
                                    />
                                )}
                            </div>
                            {errors["state"].length > 0 ? (
                                <div className="text-[#fa1c07] text-sm">
                                    {errors["state"]}
                                </div>
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
                            <div className="text-[#fa1c07] text-sm">
                                {errors["city"]}
                            </div>
                        ) : null}
                    </div>
                </div>
                {/* <div className="flex justify-center items-center gap-5 py-5">
                      <Button
                        onClick={() => setCurrent(1)}
                        loading={loading}
                        title={`Pay $${prop?.amount}`}
                        className="w-[125px]"
                      />
                      
                    </div> */}
            </div>
        </>
    )
}

export default Payment
