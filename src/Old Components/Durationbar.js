// src/components/DurationBar.js
import React, { useState, useEffect } from 'react';

const DurationBar = ({ setSelectedDuration , selectedDuration }) => {
 

  const handleDurationChange = (event) => {
    const duration = parseInt(event.target.value, 10);
    setSelectedDuration(duration);
    
  };

  const durationOptions = [3, 6, 9, 12];

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className=" relative w-[80%] ">
        <input
          type="range"
          min="3"
          max="12"
          step="3"
          value={selectedDuration}
          onChange={handleDurationChange}
          className="w-full"
        />
        {durationOptions.map((item) => (
           <div
           key={item}
           style={{ left: `${((item - 3) / 9) * 100}%` }}
           className={`absolute whitespace-nowrap  -translate-x-1/2 text-xs  ${
             selectedDuration === item ? 'text-blue-500' : 'text-gray-500'
           }`}
         >
           {item} Months
         </div>
        ))}
      </div>
    </div>
  );
};

export default DurationBar;
