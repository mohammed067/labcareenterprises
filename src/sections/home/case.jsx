import { React, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";

const Case = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div className="bg-black  text-white p-5">
      <div className="flex flex-col w-full justify-center items-center text-[54px] font-mont font-bold leading-[.85] lg:text-[70px] uppercase text-white  md:justify-start md:items-start">
      <div  className="max-h-[7rem] overflow-hidden"> 
      <motion.div className="max-h-[7rem] overflow-hidden"
          animate={{
           
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.8
           }}
        >
          Our 
        </motion.div></div> 
        <div className="max-h-[7rem] overflow-hidden">  
        <motion.div 
          animate={{
            
            y: inView ? 0 : 95,
          }}
          transition={{ duration: 0.8
           }}
        >
          cutomers
        </motion.div></div>
      </div>
      <div className="flex flex-col w-full justify-center md:justify-start md:items-start items-center text-[#FFB703]  text-[16px] font-[500] mt-5">
        <motion.div ref={ref}>
          <button>All our expertise</button>
        </motion.div>
      </div>
      <Marquee  >
  
      </Marquee>
      
      <marquee>
        <div className="flex gap-8">
        <img className="w-[8rem] min-h-[8rem] max-h-[8rem]   pr-4" src="./images/img1.png" alt="" />
        <img className="w-[8rem] min-h-[8rem] max-h-[8rem]   pr-4" src="./images/img2.png" alt="" />
        <img className="w-[8rem] min-h-[8rem] max-h-[8rem]   pr-4" src="./images/img3.jpg" alt="" />
        <img className="w-[8rem] min-h-[8rem] max-h-[8rem]   pr-4" src="./images/img4.png" alt="" />
        <img className="w-[8rem] min-h-[8rem] max-h-[8rem]   pr-4" src="./images/img5.jpg" alt="" />
        <img className="w-[8rem] min-h-[8rem] max-h-[8rem]   pr-4" src="./images/img6.png" alt="" />
        <img className="w-[8rem] min-h-[8rem] max-h-[8rem]   pr-4" src="./images/img7.png" alt="" />
        </div>
      
</marquee>
    </div>
  );
};

export default Case;
