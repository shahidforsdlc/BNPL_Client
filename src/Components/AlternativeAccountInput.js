import React, { useState } from 'react';
import Button from "./Button";
import Input from "./Input/Input";

const banks = [
    { id: 1, name: 'Bank A' },
    { id: 2, name: 'Bank B' },
    { id: 3, name: 'Bank C' },
    { id: 4, name: 'Bank D' },
    { id: 5, name: 'Bank E' },
];

const init={
    bank: "",
    accountNumber: "",
    pin: "",
    otp: "",
}

const AlternativeAccountInput = ({ onComplete }) => {
    const [selectedBank, setSelectedBank] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [pin, setPin] = useState("");
    const [otp, setOtp] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [fieldError, setFieldError] = useState('')
    const [errors, setErrors] = useState(init);

    const handleBankChange = (e) => {
        setSelectedBank(e.target.value);
        setAccountNumber("");
        setPin("");
        setOtp("");
    };

    const handleVerification = () => {
        if (accountNumber == '123456' && pin == '123' && otp == '654321') {
            setIsAuthenticated(true);
            setFieldError('')
        }
        else {
            setIsAuthenticated(false);
            setFieldError('Invalid Input');
        }
    }

    const handleAccountNumberChange = (e) => {
        setAccountNumber(e.target.value);
    };

    const handlePinChange = (e) => {
        setPin(e.target.value);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };


    return (
        <>
            {/* Bank Selector */}
            <div className="mb-4">
                <label>Select Bank:</label>
                <select
                    value={selectedBank}
                    onChange={handleBankChange}
                >
                    <option value="" disabled>Select a bank</option>
                    {banks.map(bank => (
                        <option key={bank.id} value={bank.name}>{bank.name}</option>
                    ))}
                </select>
                {errors.bank && <div className="text-red-500">{errors.bank}</div>}
            </div>

            {/* Account Number Input */}
            <div className="mb-4">
                <label>Account Number:</label>
                <Input
                    type="text"
                    value={accountNumber}
                    onChange={handleAccountNumberChange}
                    error={fieldError}
                    placeholder="Account Number"

                />
            </div>

            {/* PIN Input */}
            <div className="mb-4">
                <label>PIN:</label>
                <Input
                    type="password"
                    value={pin}
                    onChange={handlePinChange}

                    placeholder="PIN"
                    error={fieldError}
                />
            </div>

            {/* OTP Input */}
            <div className="mb-4">
                <label>OTP:</label>
                <Input
                    type="text"
                    value={otp}
                    onChange={handleOtpChange}
                    error={fieldError}
                    placeholder="OTP"
                />
            </div>

            {/* Next Button */}
            <div className="flex justify-center items-center gap-5 py-5">
                <Button onClick={handleVerification}>Next</Button>
            </div>

            {isAuthenticated && (
                <div className="flex justify-center items-center text-green-600 font-bold">
                    Account Authenticated Successfully!
                </div>
            )}
        </>
    );
};

export default AlternativeAccountInput;
