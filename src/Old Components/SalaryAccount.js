import React, { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input/Input';

const SalaryAccount = () => {
  const [linkedBanks, setLinkedBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [statementGenerated, setStatementGenerated] = useState(false);
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [otpError, setOtpError] = useState('');


  useEffect(() => {
    const fakeLinkedBanks = ['Bank A', 'Bank B', 'Bank C'];
    setLinkedBanks(fakeLinkedBanks);
  }, []);



  const handleBankSelection = (bank) => {
    setSelectedBank(bank);
  };

  const handleAuthenticateAccount = () => {
    setStatementGenerated(true); 
    const fakeOtp = '123456';
    setOtp(fakeOtp);
  };

  const handleOtpVerification = () => {
   
    if (otp === '123456') {
        setIsAuthenticated(true); 
        setOtpError('');
      } else {
        setIsAuthenticated(false);
        setOtpError('Invalid OTP. Please try again.');
      }
  };

  return (
    <div className="w-full border rounded-md p-5 space-y-4 mt-4">
      <div className="flex justify-center items-center underline-offset-2 text-lg font-bold text-[#1700e2]">
        Salary Account Profiling
      </div>

      {/* Display Linked Banks */}
      <div className="grid grid-cols-3 gap-4">
        {linkedBanks.map((bank, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`bank-${index}`}
              name="linkedBanks"
              value={bank}
              checked={selectedBank === bank}
              onChange={() => handleBankSelection(bank)}
            />
            <label htmlFor={`bank-${index}`} className="ml-2">
              {bank}
            </label>
          </div>
        ))}
      </div>

      {/* Authenticate Account */}
      {selectedBank && (
        <>
          <div className="flex justify-center items-center gap-5 py-5">
            <Button onClick={handleAuthenticateAccount}>Authenticate Account</Button>
          </div>

          {/* Account Authentication Form */}
          {statementGenerated && (
            <>
              <div className="flex flex-col items-center mb-4">
                <label htmlFor="otp">Enter OTP:</label>
                <Input
                  type="text"
                  placeholder="OTP"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  error={otpError}
                />
              </div>

              <div className="flex justify-center items-center gap-5 py-5">
                <Button onClick={handleOtpVerification}>Verify OTP</Button>
              </div>
            </>
          )}

          {/* Display Result */}
          {isAuthenticated && (
            <div className="flex justify-center items-center text-green-600 font-bold">
              Account Authenticated Successfully!
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SalaryAccount;
