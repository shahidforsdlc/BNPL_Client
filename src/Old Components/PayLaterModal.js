import React, { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Stepper from "./Stepper";
import { FiShoppingCart } from "react-icons/fi";
import "react-phone-input-2/lib/style.css";
import PersonalInformation from "./PersonalInformation";
import ChooseTenure from "./ChooseTenure";
import Payment from "./Payment";
import BankVerification from "./BankVerification";
import EmploymentStatus from "./EmploymentStatus";
import SalaryAccount from "./SalaryAccount";
import UnderReviewStage from "./UnderReviewStage";
import AlternativeAccountInput from "./AlternativeAccountInput";
import ApprovedNotification from "./ApprovedNotification";






function PayLaterModal(prop) {
  const { closeModal } = prop;
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [eligibilityStage, setEligibilityStage] = useState(1);
  const [checkStage, setCheckStage] = useState(false)
  const [checkStage2, setCheckStage2] = useState(false)
  const [isMobileValid, setIsMobileValid] = useState(false);

  //Eligibility
  const EligibilityStage1 = () => <div><BankVerification checkStage={checkStage} setCheckStage={setCheckStage} /></div>;
  const EligibilityStage2 = () => <div><PersonalInformation/></div>;
  const EligibilityStage3 = () => <div><EmploymentStatus/></div>;
  const EligibilityStage4 = () => <div><SalaryAccount/></div>;
  const EligibilityStage5 = () => <div><AlternativeAccountInput /></div>;
  const EligibilityStage6 = () => <div><UnderReviewStage/></div>;
  const EligibilityStage7 = () => <div><ApprovedNotification/></div>;
  //Tenure
  const Tenure = (prop) => <div><ChooseTenure amount={prop.amount} /></div>;  
  //Payment
  const PaymentComp = () => <div><Payment /></div>;


  //handlePreviousButton
  const handlePreviousStage = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
    else if (eligibilityStage > 1) {
      setEligibilityStage(eligibilityStage - 1)
    }
  };

  //handleNextButton
  const handleNextStage = () => {
    console.log(checkStage, checkStage2)
    if (eligibilityStage < 7 && checkStage) {

      setEligibilityStage(eligibilityStage + 1);

    } else if (current === 1 && checkStage) {

      setEligibilityStage(1);
      setCurrent(2);
    }
    else if (current === 2 && checkStage) {

      setEligibilityStage(1);
      setCurrent(3);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed   inset-0 z-50 outline-none focus:outline-none">
        <div className="relative ">
          <div
            className="border-0 rounded-xl scrollbar-hide  shadow-lg p-7 relative flex flex-col w-full h-[100vh] overflow-x-hidden overflow-y-auto   bg-modal outline-none focus:outline-none bg-white"
            style={{
              backdropFilter: "blur(79px)",
              width: "800px",
            }}>
            <div className="relative ">
              <button
                className="cursor-pointer absolute p-1 -right-7 -top-7 bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModal()}>
                <span className="bg-transparent text-[#111827] h-6 w-6 text-2xl block outline-none focus:outline-none">
                  <CiCircleRemove />
                </span>
              </button>
            </div>

            <div className="bg-white rounded mb-1">
              <>
                <div className="w-full border-b-2 border-black flex justify-between mt-3">
                  <p className="font-bold text-xl">BNPL</p>
                  <p className="flex items-center gap-2">
                    <FiShoppingCart className="w-6-h-6" />${prop.amount}
                  </p>
                </div>

                <Stepper height={100} width={640} current={current} />

                {/* All eligibility Components */}
                {current === 1 ? (
                  <>
                    {eligibilityStage === 1 && <EligibilityStage1 />}
                    {eligibilityStage === 2 && <EligibilityStage2 />}
                    {eligibilityStage === 3 && <EligibilityStage3 />}
                    {eligibilityStage === 4 && <EligibilityStage4 />}
                    {eligibilityStage === 5 && <EligibilityStage5 />}
                    {eligibilityStage === 6 && <EligibilityStage6 />}
                    {eligibilityStage === 7 && <EligibilityStage7 />}
                  </>
                ) : null}

                {current === 2 ? (
                  <Tenure amount={prop.amount} />
                ) : null}

                {current === 3 ? (
                  <PaymentComp />
                ) : null}
              </>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousStage}
                disabled={current === 1 && eligibilityStage === 1}
                className="flex items-center gap-2 bg-gradient-to-r from-[#2626F4] hover:bg-gradient-to-r active:bg-gradient-to-r active:from-[#00DDE2] active:to-[#2626F4] hover:from-[#2626F4] hover:to-[#00DDE2] to-[#171795] rounded px-4 py-2 text-white"
              >
                <AiOutlineArrowLeft size={20} />
                Previous
              </button>
              <button
                onClick={handleNextStage}
                className="flex items-center gap-2 bg-gradient-to-r from-[#2626F4] hover:bg-gradient-to-r active:bg-gradient-to-r active:from-[#00DDE2] active:to-[#2626F4] hover:from-[#2626F4] hover:to-[#00DDE2] to-[#171795] rounded px-4 py-2 text-white"
              >
                Next
                <AiOutlineArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayLaterModal;
