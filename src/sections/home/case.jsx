import { React, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";

const Case = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div className="bg-black  text-white p-5">
      <div className="flex flex-col w-full justify-center items-center text-[54px] font-mont font-bold leading-[.85] lg:text-[110px] uppercase text-white  md:justify-start md:items-start">
      <div  className="max-h-[7rem] overflow-hidden"> 
      <motion.div className="max-h-[7rem] overflow-hidden"
          animate={{
           
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.8
           }}
        >
          Our case
        </motion.div></div> 
        <div className="max-h-[7rem] overflow-hidden">  
        <motion.div 
          animate={{
            
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.8
           }}
        >
          studies
        </motion.div></div>
      </div>
      <div className="flex flex-col w-full justify-center md:justify-start md:items-start items-center text-[#FFB703]  text-[16px] font-[500] mt-5">
        <motion.div ref={ref}>
          <button>All our expertise</button>
        </motion.div>
      </div>
      <Marquee>
        <img className="w-[20rem] pr-4" src="./images/img1.webp" alt="" />
        <img className="w-[20rem] pr-4" src="./images/img2.webp" alt="" />
        <img className="w-[20rem] pr-4" src="./images/img3.webp" alt="" />
        <img className="w-[20rem] pr-4" src="./images/img4.webp" alt="" />
        <img className="w-[20rem] pr-4" src="./images/img5.webp" alt="" />
      </Marquee>
    </div>
  );
};

export default Case;
