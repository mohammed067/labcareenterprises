import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Whiteheart from '../svgs/whiteheart';

const Famous = () => {


  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div className='bg-black text-white '
    >
    <div className="flex flex-col w-full justify-center items-center overflow-hidden text-center text-[42px]  font-mont font-[700] md:text-[40px] uppercase leading-[0.85] md:leading-[1] py-[3rem] md:py-[10rem] ">
       <div className="max-h-[10rem] md:max-h-[10rem] overflow-hidden " > <motion.div animate={{

          y: inView ? 0 : 95,
        }}
        transition={{ duration: 0.8 }}>Famous brands</motion.div></div>
        <div className="max-h-[10rem] overflow-hidden ">
        <motion.div animate={{
          
          y: inView ? 0 : 95,
        }}
        transition={{ duration: 0.8 }}>
        <div className="flex  items-center"> <div className='' ><Whiteheart/></div> We work with</div></motion.div> </div>
        
      </div>
      <motion.div className='grid grid-cols-3 grid-rows-4 py-20 gap-4 gap-y-20 items-center justify-center '
      ref={ref}
      >
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/jack.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/aperol.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/lvmp.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/A.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/accor.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/addidas.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/bombay.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/chanel.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/ps.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/cupra.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/mi.webp" alt="" /></div>
      <div className='flex  justify-center ' ><img className='w-[50%] md:w-[20%] ' src="./images/ikea.webp" alt="" /></div>
      
      </motion.div>
    </div>
  )
}

export default Famous