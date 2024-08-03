import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

const Lastwork = () => {
  const { scrollYProgress } = useScroll();
  const at = useTransform(scrollYProgress, [0.2, 0.8], ["0px", "-160px"]);
  return (
    <div>
      {/* <div className="hidden md:flex bg-black px-4  w-full relative items-center justify-between py-2  " >
        <div className="text-[17px] font-normal opacity-50 font-mont text-white ">
          Last work
        </div>
        <div className="text-[30px] font-medium uppercase leading-[.85] whitespace-pre-line text-white w-[20rem] ">
          Recent case studies
        </div>
      </div>
      <div className="bg-black grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 px-4 gap-5 relative items-center justify-center ">
        <div className=" md:hidden text-[17px] font-normal opacity-50 font-mont text-white ">
          Last work
        </div>
        <div className=" md:hidden text-[30px] font-medium uppercase leading-[.85] whitespace-pre-line text-white w-[15rem] ">
          Recent case studies
        </div>




      </div> */}
      <div className="bg-black px-4">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
        <div className="relative">
          <div className="bg-black absolute top-0  h-full opacity-65 w-full z-[2000]"/>
        <img src="./images/bloodsample.jpg" className="w-full" alt="" />
        <div className="text-[1.2rem] md:text-[3rem] text-[#FEF9E7] font-mont font-semibold top-0 pr-4 right-0 absolute  ">blood collection tubes</div>
        </div>
        </div>
      
         <div className="relative">
         <div className="bg-black absolute top-0  h-full    opacity-65 w-full z-[2000]"/>
         <img src="./images/microbiology.jpeg" className="h-full" alt="" />
         <div className="text-[1.2rem] md:text-[3rem] text-[#FEF9E7] font-mont font-semibold top-0 pr-4 right-0 absolute">Microbiology Kits</div>
         </div>
         <div className="relative">
         <div className="bg-black absolute top-0  h-full    opacity-65 w-full z-[2000]"/>
         <img className="" src="./images/biochemistry.jpeg" alt="" />
         <div className="text-[1.2rem] md:text-[3rem] text-[#FEF9E7] font-mont font-semibold top-0 pr-4 right-0 absolute">Biochemistry Lab Supplies</div>
         </div>
         <div className="relative">
         <div className="bg-black absolute top-0  h-full    opacity-65 w-full z-[2000]"/>
         <img src="./images/diagnostickit.jpeg" alt="" />
         <div className="text-[1.2rem] md:text-[3rem] text-[#FEF9E7] font-mont font-semibold top-0 pr-4 right-0 absolute">Diagnostic Kits</div>
         </div>
      
       
        
      </div>
      </div>
  
    </div>
  );
};

export default Lastwork;
