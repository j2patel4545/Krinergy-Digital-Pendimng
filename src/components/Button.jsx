import React from 'react'

const Button = ({ styles }) => {
  return (
   <a href="">
     <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get Contact
    </button>
   </a>
  )
}

export default Button
