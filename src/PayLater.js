import React, { useState } from "react";
import PayLaterModal from "./Components/PayLaterModal";

function PayLater({amount}) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
     {showModal && (
        <PayLaterModal
          closeModal={closeModal}
          amount ={amount || 0}
          currency={"usd"}
          
        />
      )}
    
      <div onClick={()=>openModal()} className={`flex flex-col items-center justify-center bg-[#0037ff] cursor-pointer text-white font-bold py-2 px-8 rounded sm:text-base lg:text-lg xl:text-xl`}>
      <span className="text-lg">BNPL</span>
      <span className="text-sm mt-1">powered by wipeon</span>
    </div>
    </>
    
   
  );
}

export default PayLater;
