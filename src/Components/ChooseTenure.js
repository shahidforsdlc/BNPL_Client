import React,{useState} from 'react'
import DurationBar from "./Durationbar";

const ChooseTenure = (prop) => {
    const [selectedDuration, setSelectedDuration] = useState(3);
    
    

  return (
    <>
      
      <div className="w-full bg-[#ebf1ff] border rounded-md   space-y-4  mt-4 ">
                    <div className="flex justify-center items-center underline-offset-2 text-lg font-bold text-[#1700e2]">
                      Choose your tenure
                    </div>
                    <DurationBar
                      selectedDuration={selectedDuration}
                      setSelectedDuration={setSelectedDuration}
                    />
                    <div className="w-full px-6 py-4 flex justify-between">
                      <div className="flex flex-col text-xs items-center">
                        <p className="font-bold">Monthly Payments</p>
                        <p className="font-normal text-base">
                          ${(prop.amount / selectedDuration).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex flex-col text-xs items-center">
                        <p className="font-bold">Total Payable</p>
                        <p className="font-normal text-base">${prop.amount}</p>
                      </div>
                    </div>

                    
                  </div>

    </>
  )
}

export default ChooseTenure
