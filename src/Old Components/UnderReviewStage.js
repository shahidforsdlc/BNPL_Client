import React, { useState } from 'react';


const UnderReviewStage = () => {
    const [showNotification, setShowNotification] = useState(true);

    return (
        <div className="w-full border rounded-md p-5 space-y-4 mt-4">
            <div className="flex justify-center items-center underline-offset-2 text-lg font-bold text-[#1700e2]">
                Under Review
            </div>
                
            {showNotification && (
                <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-8" role="alert">
                    <p className="font-bold">Info:</p>
                    <p className="text-sm">
                        Your request is under review. You will be notified once the review process is complete.
                    </p>
                </div>
            )}

        </div>
    );
};

export default UnderReviewStage;
