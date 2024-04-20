import React from 'react'
import Logo from '../Assets/logo.png'

const HeaderComponent = () => {
  return (
    <div className='flex w-full items-center justify-center mt-6'>
      <img src={Logo} alt="Logo" />
    </div>
  )
}

export default HeaderComponent
