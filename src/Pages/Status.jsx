import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';

const Status = () => {
  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="flex justify-center">
      <div style={{ width: "800px" }} className="flex justify-center">
        <div className="h-screen w-full m-9" >
          <HeaderComponent />
          <div className="flex justify-center mt-2">
            <span className="text-xl font-bold">Employment Status</span>
          </div>
          <div className="mx-auto p-4 " >
            <div className="mb-4">
              <label htmlFor="virtualAccountNumber" className="block text-zinc-700 font-semibold mb-2">Virtual Account Number</label>
              <div className="relative">
                <input type="text" id="virtualAccountNumber" value="654645646XXXX" className="w-full p-2 border border-zinc-300 rounded-md pr-10" disabled/>
                <button className="absolute top-0 right-0 bottom-0 bg-gray-300 px-2" onClick={() => copyToClipboard("654645646XXXX")}>Copy</button>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="accountHolderName" className="block text-zinc-700 font-semibold mb-2">Account Holder Name</label>
              <div className="relative">
                <input type="text" id="accountHolderName" value="John Doe" className="w-full p-2 border border-zinc-300 rounded-md pr-10" disabled/>
                <button className="absolute top-0 right-0 bottom-0 bg-gray-300 px-2" onClick={() => copyToClipboard("John Doe")}>Copy</button>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="bankName" className="block text-zinc-700 font-semibold mb-2">Bank Name</label>
              <div className="relative">
                <input type="text" id="bankName" value="State Bank of India" className="w-full p-2 border border-zinc-300 rounded-md pr-10" disabled/>
                <button className="absolute top-0 right-0 bottom-0 bg-gray-300 px-2" onClick={() => copyToClipboard("State Bank of India")}>Copy</button>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="bankAddress" className="block text-zinc-700 font-semibold mb-2">Bank Address</label>
              <div className="relative">
                <input type="text" id="bankAddress" value="India" className="w-full p-2 border border-zinc-300 rounded-md pr-10" disabled/>
                <button className="absolute top-0 right-0 bottom-0 bg-gray-300 px-2" onClick={() => copyToClipboard("India")}>Copy</button>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="routingNumber" className="block text-zinc-700 font-semibold mb-2">Routing Number</label>
              <div className="relative">
                <input type="text" id="routingNumber" value="SBIN0012547" className="w-full p-2 border border-zinc-300 rounded-md pr-10" disabled/>
                <button className="absolute top-0 right-0 bottom-0 bg-gray-300 px-2" onClick={() => copyToClipboard("SBIN0012547")}>Copy</button>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="bankBicCode" className="block text-zinc-700 font-semibold mb-2">Bank/BIC Code</label>
              <div className="relative">
                <input type="text" id="bankBicCode" value="SBIN0012547" className="w-full p-2 border border-zinc-300 rounded-md pr-10" disabled/>
                <button className="absolute top-0 right-0 bottom-0 bg-gray-300 px-2" onClick={() => copyToClipboard("SBIN0012547")}>Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
