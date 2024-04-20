import React from 'react'
import Load from '../Assets/load.png'

const Loading = () => {
  return (
    <div className="flex justify-center">
        <div style={{ width: "800px" }} className="flex justify-center">
        <div className="h-screen">
        <div className='flex w-full items-center justify-center mt-6'>
            <img  src={Load}  alt='load'/>
            </div>
            <div className='flex justify-center'>
                <span className='text-xl font-bold'>
                    Loading...
                </span>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Loading
