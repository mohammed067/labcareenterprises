import { useScroll, useTransform, motion } from 'framer-motion';
import React from 'react'

const Lastwork1 = () => {
    const { scrollYProgress } = useScroll();
  const at = useTransform(scrollYProgress, [0.2, 0.8], ["0px","-200px"]);
  return (
    <div>
    <div className='hidden md:flex' >
    <div className='text-[17px] font-normal opacity-50 font-mont text-white ' >Last work</div>
    <div className='text-[30px] font-medium uppercase leading-[.85] whitespace-pre-line text-white w-[15rem] ' >Recent case studies</div>
    </div>
    <div className='bg-black grid grid-cols-1 px-4 '  >

    <div className='relative top-0 ' ><img src="./images/laptop.webp" alt="" />
    <div className='absolute top-[1rem] left-[7rem] ' >
   <div> <img className='w-[50%]' src="./images/A.webp" alt="" /></div>
   <div className=" absolute  top-[5rem] left-[-2rem] text-[16px] text-white cursor-pointer uppercase font-mont border-b-[2px] border-white border-solid   " >Get the case study ↓</div>
    </div>
    </div>
    <motion.div className='relative' 
    style={{
        translateY: at,
      }}
    ><img src="./images/red.webp" alt="" />
       
    
      <div className='absolute  top-[1rem] left-[7rem]' >
   <div> <img className='w-[50%]' src="./images/aperol.webp" alt="" /></div>
   <div className=" absolute  top-[5rem] left-[-2rem] text-[16px] text-white cursor-pointer uppercase font-mont border-b-[2px] border-white border-solid   " >Get the case study ↓</div>
    </div>
    
    </motion.div>
    <div className='relative top-0 ' ><img src="./images/gentle.webp" alt="" />
    
      <div className='absolute top-[1rem] left-[7rem] ' >
   <div> <img className='w-[50%]' src="/images/jack.webp" alt="" /></div>
   <div className=" absolute  top-[5rem] left-[-2rem] text-[16px] text-white cursor-pointer uppercase font-mont border-b-[2px] border-white border-solid   " >Get the case study ↓</div>
    </div>
    
    </div>
    <motion.div className='relative' 
    style={{
        translateY: at,
      }}
    ><img src="./images/yellow.webp" alt="" />
    
      <div className='absolute top-[1rem] left-[7rem] ' >
   <div> <img className='w-[50%]' src="./images/holiday.webp" alt="" /></div>
   <div className=" absolute  top-[5rem] left-[-2rem] text-[16px] text-white cursor-pointer uppercase font-mont border-b-[2px] border-white border-solid   " >Get the case study ↓</div>
    </div>
    
    </motion.div>
    </div>
    </div>
  )
}

export default Lastwork1