import React from "react";
import Expert from "../svgs/expert";
import Social from "./social";
import { motion, useScroll, useTransform } from "framer-motion";
import Expy from "./expy";
import Lastwork from "./lastwork";
import Famous from "./famous";
import Scrolling from "../sections/home/scrolling";
import Email from "../sections/home/email";

const Expertise = () => {
  const { scrollYProgress } = useScroll();
  const at = useTransform(scrollYProgress, [0, 0.2], ["0px", "-50px"]);
  return (
    <div className="bg-black">
      <motion.div
        className="bg-black pt-[75px] pb-[75px] px-4 md:sticky md:top-0 md:z-10 md:w-[100vw] h-[80vh] md:h-[130vh] "
        style={{
          translateY: at,
        }}
      >
        <div className="bg-black" >
          <div className="flex flex-col  gap-10 2xl:gap-0 2xl:gap-y-10 ">
            <Expert />
            <div className="md:flex md:w-full md:gap-[3.25rem] lg:gap-[3.25rem] h-[70vh] md:h-[65vh]  ">
              <div className="flex font-mont text-[21px]  pb-[3rem] md:text-[20px] lg:text-[31px] xl:text-[32px] font-medium w-[98%] md:justify-end xl:h-[30rem] 2xl:h-[24rem]  md:items-end md:w-auto justify-center items-center leading-[1] ">
                <p className="text-white uppercase md:w-[328px] lg:w-[440px] xl:w-[640px] 2xl:w-[700px] ">
                  <strong className="text-[#FFB703] uppercase ">
                    We make working with independent publishers
                  </strong>{" "}
                  simple, powerful, global and scalable.
                </p>{" "}
              </div>
              <div className="md:flex md:justify-end md:items-end pb-5 2xl:pb-[10rem] ">
                <img
                  className="w-full h-[209px] md:h-[380px] md:w-[25rem] lg:w-[25rem] lg:h-[310px] 2xl:h-[330px] 2xl:w-[46rem]  object-cover  xl:w-full xl:h-[50%] "
                  src="./images/boy.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className=" relative z-[100]">
    <div className="block md:hidden" >  <Social /> </div> 
    <div className="hidden md:block " ><Expy/></div>
        <div className="" ><Lastwork/></div>
        <Famous/>
        <Scrolling/>
        <Email/>
      </div>
    </div>
  );
};

export default Expertise;
