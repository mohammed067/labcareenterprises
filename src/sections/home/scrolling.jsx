import { React, useRef } from "react";
import Marquee from "react-fast-marquee";
import World1 from "../../svgs/world1";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Scrolling = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div className="bg-[#FEF9E7] z-30">
      <Marquee>
      <div className="flex gap-5 items-center uppercase">
        <World1/> <span className="font-mont">join the bon collectif</span>
        <World1 /> <span className="font-mont">join the bon collectif</span>
        <World1/> <span className="font-mont">join the bon collectif</span>
        <World1/> <span className="font-mont">join the bon collectif</span>
        <World1/> <span className="font-mont">join the bon collectif</span>
        <World1/> <span className="font-mont">join the bon collectif</span>
        <World1/> <span className="font-mont">join the bon collectif</span>
        <World1/> <span className="font-mont">join the bon collectif</span>
        <World1/> <span className="font-mont">join the bon collectif</span>
        <World1/> <span className="font-mont">join the bon collectif</span>
        <World1/> <span className="font-mont">join the bon collectif</span>
        </div>
      </Marquee>

      <div className="flex flex-col w-full justify-center items-center overflow-hidden text-center  font-mont font-[700] md:text-[50px] uppercase leading-[1] md:leading-[1] py-[3rem]">
       <div className="max-h-[3.5rem] md:max-h-[10rem] overflow-hidden " > <motion.div animate={{

          y: inView ? 0 : 95,
        }}
        transition={{ duration: 0.8 }}>Ready to Enhance Your Lab Efficiency?</motion.div></div>
        <div className="max-h-[10rem] overflow-hidden ">
        <motion.div animate={{
          
          y: inView ? 0 : 95,
        }}
        transition={{ duration: 0.8 }}>
        <div className="flex  items-center"> Contact us today to learn more about our comprehensive offerings and how we can support your laboratory needs.</div></motion.div> </div>
        {/* <div className="max-h-[7rem] overflow-hidden ">
        <motion.div animate={{
         
          y: inView ? 0 : 95,
        }}
        transition={{ duration: 0.8 }}>Download your</motion.div></div> */}
       {/* <div  className="max-h-[7rem] overflow-hidden ">
        <motion.div animate={{
          
          y: inView ? 0 : 95,
        }}
        transition={{ duration: 0.8 }}>media kit.</motion.div></div> */}
      </div>
      
      <motion.div ref={ref} className="flex gap-5  font-mont justify-center items-center uppercase" >
        <button className=" uppercase text-[16px] font-mont font-medium cursor-pointer" > Request a quote </button>
        <div className="rounded-full font-mont w-[19px] h-[19px] bg-[#F0AD06] text-[12px] font-bold text-black text-center flex items-center justify-center ">
            ↓
          </div>
         <div className="border-b-[1px] border-solid border-[#4D4C46]" ></div>
      </motion.div>
    </div>
  );
};

export default Scrolling;
