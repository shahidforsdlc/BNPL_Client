import React, { useState } from 'react';
import Button from "./Button";

const ApprovedNotification = ({ approvedAmount, onDismiss }) => {
    const [virtualAccountCreated, setVirtualAccountCreated] = useState(false);

    const handleCreateVirtualAccount = () => {
        alert('Virtual account created')
        setVirtualAccountCreated(true);
    };

    return (
        <div className="w-full border rounded-md p-5 space-y-4 mt-4">
            <div className="flex justify-center items-center underline-offset-2 text-lg font-bold text-[#1700e2]">
                Loan Approved
            </div>

            <div className="mb-4">
                <p>Your loan request has been approved!</p>
                <p>Approved Amount: {approvedAmount}</p>
            </div>

            {!virtualAccountCreated ? (
                <>
                    <div className="mb-4">
                        <p>Would you like to create a virtual account for prefunding?</p>
                    </div>

                    <div className="flex justify-center items-center gap-5 py-5">
                        <button
                            className="flex items-center gap-2 bg-gradient-to-r from-[#2626F4] hover:bg-gradient-to-r active:bg-gradient-to-r active:from-[#00DDE2] active:to-[#2626F4] hover:from-[#2626F4] hover:to-[#00DDE2] to-[#171795] rounded px-4 py-2 text-white"
                            onClick={handleCreateVirtualAccount}
                        >
                            Create Virtual Account
                        </button>
                        <button
                            className="flex items-center gap-2 bg-gradient-to-r from-[#2626F4] hover:bg-gradient-to-r active:bg-gradient-to-r active:from-[#00DDE2] active:to-[#2626F4] hover:from-[#2626F4] hover:to-[#00DDE2] to-[#171795] rounded px-4 py-2 text-white"
                            onClick={onDismiss}
                        >
                            Dismiss
                        </button>
                    </div>
                </>
            ) : (
                <div className="mb-4">
                    <p>Virtual account created successfully!</p>
                </div>
            )}
        </div>
    );
};

export default ApprovedNotification;
