
import React, { useState, useEffect } from 'react';
import Button from "./Button";
import Input from "./Input/Input";


const init = {
    date: "",
    name: "",
    address: "",
    state: "",
    country: "",
}


const EmploymentStatus = () => {

    const [employmentStatus, setEmploymentStatus] = useState("");
    const [dateOfEmployment, setDateOfEmployment] = useState("");
    const [fields, setFields] = useState(init);
    const [errors, setErrors] = useState(init);
    const [letterOfEmployment, setLetterOfEmployment] = useState("");
    const [states, setStates] = useState([]);


    const handleEmploymentStatusChange = (status) => {
        setEmploymentStatus(status);
        setDateOfEmployment("");
        setFields({ ...fields, date: "", name: "", address: "", state: "" });
        setLetterOfEmployment("");
    };

    const handleDateOfEmploymentChange = (e) => {
        setDateOfEmployment(e.target.value);
    };

    const handleEmployerDetailsChange = (field, value) => {
        setFields((prevFields) => ({ ...prevFields, [field]: value }));
    };

    const handleLetterOfEmploymentChange = (e) => {
        setLetterOfEmployment(e.target.value);
    };

    const handleNext = () => {
        let newErrors = { ...errors };

        if (employmentStatus === "unemployed" || employmentStatus === "self-employed") {
            alert("Service availability is currently unavailable. Request terminated.");
        } else {
            // Proceed with the next steps or form submission
            console.log("Data submitted:", {
                employmentStatus,
                dateOfEmployment,
                fields,
                letterOfEmployment,
            });
        }

        // Validate date
        if (!dateOfEmployment || dateOfEmployment.trim() === "") {
            newErrors.date = "Please enter the date of employment";
        } else {
            newErrors.date = "";
        }

        // Validate name
        if (!fields.name || fields.name.trim() === "") {
            newErrors.name = "Please enter the employer's name";
        } else {
            newErrors.name = "";
        }

        // Validate address
        if (!fields.address || fields.address.trim() === "") {
            newErrors.address = "Please enter the employer's address";
        } else {
            newErrors.address = "";
        }


        // Validate state
        if (!fields.state || fields.state.trim() === "") {
            newErrors.state = "Please select the state";
        } else {
            newErrors.state = "";
        }

        // Update the errors state
        setErrors(newErrors);
    };


    return (
        <>
            {/* Employment Status Section */}
            <div className="w-full border rounded-md p-5 space-y-4 mt-4">
                <div className="flex justify-center items-center underline-offset-2 text-lg font-bold text-[#1700e2]">
                    Employment Status Page
                </div>

                {/* Employment Status Options */}
                <div className="flex justify-center items-center gap-5 py-5 ">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="employmentStatus"
                            value="unemployed"
                            checked={employmentStatus === "unemployed"}
                            onChange={() => handleEmploymentStatusChange("unemployed")}
                        />
                        <span className="ml-2">Unemployed</span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="employmentStatus"
                            value="self-employed"
                            checked={employmentStatus === "self-employed"}
                            onChange={() => handleEmploymentStatusChange("self-employed")}
                        />
                        <span className='ml-2'>Self Employment</span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="employmentStatus"
                            value="employed"
                            checked={employmentStatus === "employed"}
                            onChange={() => handleEmploymentStatusChange("employed")}
                        />
                        <span className="ml-2">Employed</span>
                    </label>
                </div>



                {/* Employer Details */}
                {employmentStatus === "employed" && (
                    <div >
                        <div className="mb-5">
                            <label >
                                {/* Employment Date */}
                                <Input
                                    label="Date of Employment"
                                    type="date"
                                    id={"date"}
                                    error={errors["date"].length > 0 ? true : false}
                                    value={dateOfEmployment}
                                    onChange={handleDateOfEmploymentChange}
                                />
                            </label>
                        </div>
                        <div className="mb-5">
                            {/* Employee Name */}
                            <Input
                                label="Employer's Name:"
                                value={fields.name}
                                onChange={(e) => handleEmployerDetailsChange("name", e.target.value)}
                                error={errors["name"].length > 0 ? true : false}
                            />
                        </div>
                        <div className="mb-5">
                            {/* Employee Address */}
                            <Input
                                label="Employer's Address"
                                error={errors["address"].length > 0 ? true : false}
                                value={fields.address}
                                onChange={(e) => handleEmployerDetailsChange("address", e.target.value)}
                            />
                        </div>
                        <div>
                            {/* State */}
                            <Input
                                label="State"
                                onChange={(e) => handleEmployerDetailsChange("state", e.target.value)}
                                placeholder="Enter State"
                                name="state"
                                error={errors["state"].length > 0 ? true : false}
                                id="state"
                                country={fields["country"]}
                                value={fields["state"]}
                            />
                        </div>
                    </div>
                )}

                {/* Letter of Employment */}
                {employmentStatus === "employed" && (
                    <div className="flex justify-center items-center gap-5 py-5">
                        <label className='font-bold'>Attach Letter of Employment:</label>
                        <textarea
                            label="Attach Letter of Employment:"
                            value={letterOfEmployment}
                            onChange={handleLetterOfEmploymentChange}
                            rows={4}
                            cols={50}
                            placeholder="Enter your letter of employment..."
                        />
                    </div>
                )}

                {/* Next Button */}
                <div className="flex justify-center items-center gap-5 py-5">
                    <Button onClick={handleNext}>Next</Button>
                </div>
            </div>
        </>
    );
};

export default EmploymentStatus;
