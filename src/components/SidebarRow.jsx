import React from 'react'

function SidebarRow({icon, label}) {
  return (
    <div 
      className='ml-1 flex m-1 group bg-gray-200 rounded-xl mt-2 hover:bg-gray-400 cursor-pointer
        hover:translate-x-1 focus-visible:first-line:'>
        <span className='p-1   rounded-2xl'>
            {icon}
        </span>
        <p className='hidden md:flex p-1 items-center h-11 text-xl text md:2xl font-semibold'>
            {label}
        </p>
    </div>
  )
}

export default SidebarRow