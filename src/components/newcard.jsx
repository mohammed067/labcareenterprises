import React from 'react'

const Newcard = ({heading,para,images,button,border}) => {
  return (
    <div>
    <div className='flex flex-col text-center w-full items-center py-7 px-6 ' >
    <div className='font-mont font-bold leading-[.85] uppercase text-white text-[54px] lg:text-[110px] ' >{heading}</div>
    <div className='opacity-[.7] text-white mt-[1.75rem] mx-auto whitespace-pre-line text-[12px] w-[full] lg:w-[320px] ' >{para}</div>
    <div className='flex text-[16px] font-mont font-medium uppercase text-opacity-[1] leading-[1] pb-[.25rem] mt-[2.5rem] border-b-[1px] gap-[25px] border-solid border-[#F0AD06] text-[#F0AD06]' >
    <div> <img src={images}/></div>
    <div className='' >{button}</div>
    </div> 
    </div>
    <div className='border-b-[1px] gap-[25px] border-solid border-[white]' >{border}</div>
    </div>
  )
}

export default Newcard