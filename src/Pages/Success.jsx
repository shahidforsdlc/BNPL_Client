import React from 'react'
import Successful from '../Assets/successful.png'

const Success = () => {
  return (
    <div className="flex justify-center">
        <div style={{ width: "800px" }} className="flex justify-center">
        <div className="h-screen">
        <div className='flex w-full items-center justify-center mt-6'>
            <img  src={Successful}  alt='load'/>
            </div>
            <div className='flex justify-center'>
                <span className='text-xl font-bold'>
                   Approved
                </span>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Success
