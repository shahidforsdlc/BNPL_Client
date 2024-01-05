import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input/Input";
import "react-phone-input-2/lib/style.css";

const initState = {
    BillerId: "",
    CustomerId: "",
    Bankcode: "",
    CatagoryId: "",
};

const BankVerification = ({ checkStage, setCheckStage }) => {
    const [fields, setFields] = useState(initState);
    const [errors, setErrors] = useState(initState);
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [termsErr, setTermsErr] = useState("");

    //onChange function
    const onChange = (e) => {
        let newErrors = { ...errors };
        setFields({ ...fields, [e.target.id]: e.target.value });

        // Validation for BillerId
        if (e.target.id === "BillerId") {
            if (e.target.value.length === 0) {
                newErrors["BillerId"] = "Please Enter BillerID";
            } else {
                newErrors["BillerId"] = "";
            }
        }

        // Validation for CustomerId
        if (e.target.id === "CustomerId") {
            if (
                !/^[a-zA-Z0-9]+$/.test(e.target.value) ||
                e.target.value.length > 10
            ) {
                newErrors["CustomerId"] =
                    "Invalid Customer ID. Use only alphanumeric characters and limit to 10 characters.";
            } else {
                newErrors["CustomerId"] = "";
            }
        }

        // Validation for Bankcode
        if (e.target.id === "Bankcode") {
            if (!/^[a-zA-Z]+$/.test(e.target.value) || e.target.value.length > 5) {
                newErrors["Bankcode"] =
                    "Invalid Bankcode. Use only alphabetic characters and limit to 5 characters.";
            } else {
                newErrors["Bankcode"] = "";
            }
        }

        // Validation for CatagoryId
        if (e.target.id === "CatagoryId") {
            if (!/^\d+$/.test(e.target.value) || e.target.value.length > 3) {
                newErrors["CatagoryId"] =
                    "Invalid Catagory ID. Use only numeric characters and limit to 3 characters.";
            } else {
                newErrors["CatagoryId"] = "";
            }
        }
        setErrors(newErrors);
    };

    //All Validation
    const isValid = () => {
        let valid = true;
        let newErrors = { ...errors };

        // Validation for BillerId
        if (fields["BillerId"].length === 0) {
            valid = false;
            newErrors["BillerId"] = "Please Enter BillerID";
        } else {
            newErrors["BillerId"] = "";
        }

        // Validation for CustomerId
        if (
            fields["CustomerId"].length === 0 ||
            !/^[a-zA-Z0-9]+$/.test(fields["CustomerId"]) ||
            fields["CustomerId"].length > 10
        ) {
            valid = false;
            newErrors["CustomerId"] =
                "Invalid Customer ID. Use only alphanumeric characters and limit to 10 characters.";
        } else {
            newErrors["CustomerId"] = "";
        }

        // Validation for Bankcode
        if (
            fields["Bankcode"].length === 0 ||
            !/^[a-zA-Z]+$/.test(fields["Bankcode"]) ||
            fields["Bankcode"].length > 5
        ) {
            valid = false;
            newErrors["Bankcode"] =
                "Invalid Bankcode. Use only alphabetic characters and limit to 5 characters.";
        } else {
            newErrors["Bankcode"] = "";
        }

        // Validation for CatagoryId
        if (
            fields["CatagoryId"].length === 0 ||
            !/^\d+$/.test(fields["CatagoryId"]) ||
            fields["CatagoryId"].length > 3
        ) {
            valid = false;
            newErrors["CatagoryId"] =
                "Invalid Catagory ID. Use only numeric characters and limit to 3 characters.";
        } else {
            newErrors["CatagoryId"] = "";
        }

        // Additional validation for terms checkbox
        if (!isTermsChecked) {
            valid = false;
            // Assuming you have a state variable for terms error message
            setTermsErr("Please agree to the terms and conditions");
        } else {
            setTermsErr("");
        }
        setErrors(newErrors);
        return valid;
    };

    //handleVerify
    const handleVerify = () => {
        if (isValid()) {
            console.log(fields);
            setCheckStage(true);
        }
    };

    //handleTermsAndCondition
    const handleTermsCheckboxChange = () => {
        setIsTermsChecked(!isTermsChecked);
    };

    return (
        <>
            {/* Bank Account Details Section  */}
            <div className="w-full border rounded-md p-5 space-y-4 mt-4">
                <div className="flex justify-center items-center underline-offset-2 text-lg font-bold text-[#1700E2]">
                    Bank Account Details
                </div>
                <div className="grid xs:grid-cols-2 sm:gap-4 mt-4 gap-y-2 lg:mx-0 xl:grid-cols-3">

                    {/* BillerId */}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id="BillerId"
                                label="Biller Id"
                                error={errors["BillerId"].length > 0}
                                value={fields["BillerId"]}
                                onChange={onChange}
                            />
                        </div>
                        {errors["BillerId"].length > 0 && (
                            <div className="text-[#FA1C07] text-sm">{errors["BillerId"]}</div>
                        )}
                    </div>

                    {/* CustomerId */}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id="CustomerId"
                                label="Customer Id"
                                error={errors["CustomerId"].length > 0}
                                value={fields["CustomerId"]}
                                onChange={onChange}
                            />
                        </div>
                        {errors["CustomerId"].length > 0 && (
                            <div className="text-[#FA1C07] text-sm">
                                {errors["CustomerId"]}
                            </div>
                        )}
                    </div>

                    {/* BankCode */}
                    <div className="h-[80px] w-full">
                        <div className="flex flex-col">
                            <Input
                                id="Bankcode"
                                label="Bankcode"
                                error={errors["Bankcode"].length > 0}
                                value={fields["Bankcode"]}
                                onChange={onChange}
                            />
                        </div>
                        {errors["Bankcode"].length > 0 && (
                            <div className="text-[#FA1C07] text-sm">{errors["Bankcode"]}</div>
                        )}
                    </div>
                     {/* CatagoryId */}
                    <div className="h-[80px] w-full flex justify-center items-center">
                        <div className="flex flex-col">
                            <Input
                                id="CatagoryId"
                                label="Catagory Id"
                                error={errors["CatagoryId"].length > 0}
                                value={fields["CatagoryId"]}
                                onChange={onChange}
                            />
                        </div>
                        {errors["CatagoryId"].length > 0 && (
                            <div className="text-[#FA1C07] text-sm">
                                {errors["CatagoryId"]}
                            </div>
                        )}
                    </div>
                </div>
                <div className="h-[80px] w-full flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <input
                            type="checkbox"
                            id="termsCheckbox"
                            checked={isTermsChecked}
                            onChange={handleTermsCheckboxChange}
                        />
                        <label htmlFor="termsCheckbox" className="text-sm">
                            I agree to the terms and conditions
                        </label>
                        {termsErr && (
                            <div className="text-[#FA1C07] text-sm">{termsErr}</div>
                        )}
                    </div>
                </div>

                {/* Verify Button */}
                <div className="flex justify-center items-center gap-5 py-5">
                    <Button onClick={() => handleVerify()}>Verify</Button>
                </div>
            </div>
        </>
    );
};

export default BankVerification;
