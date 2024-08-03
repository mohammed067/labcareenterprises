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
    <div className="bg-black 2xl:flex flex-col 2xl:justify-center">
      <div className="">
        <motion.div
          className="bg-black pt-[75px] pb-[75px] px-4 md:sticky md:top-0 md:z-10 md:w-[100vw] h-[80vh] md:h-[130vh] px-[3rem] "
          style={{
            translateY: at,
          }}
        >
          <div className="bg-black" >
            <div className="flex flex-col  gap-10 2xl:gap-0 2xl:gap-y-10 ">
              {/* <Expert /> */}
              <div className="lg:text-[10rem] text-center text-[#FEF9E7] font-mont font-semibold">SERVICES</div>
              <div className="md:flex md:w-full justify-center md:gap-[3.25rem] lg:gap-[3.25rem] h-[70vh] 2xl:justify-between md:h-[65vh]  2xl:pt-[39rem] ">
                <div className="md:text-[1rem] ">
                  <p className="text-white uppercase md:w-[328px] lg:w-[440px] xl:w-[640px] 2xl:w-[800px] 2xl:pt-[12rem]">
                    <strong className="text-[#FFB703] uppercase  ">
                      At LabCare Enterprises, we are committed to providing top-quality laboratory consumables to hospitals and healthcare facilities.
                    </strong>{" "}
                    We offer a comprehensive range of products that ensure accuracy, reliability, and safety in laboratory operations
                  </p>{" "}
                </div>
                <div className=" ">
                  <img
                    className="w-full h-[209px] md:h-[380px] md:w-[25rem]  2xl:h-[1230px] 2xl:w-[66rem]  object-cover    "
                    src="./images/del1.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className=" relative z-[100]">
          <div className="block md:hidden" >  <Social /> </div>
          <div className="hidden md:block " ><Expy /></div>
          <div className="" ><Lastwork /></div>
          <Famous />
          <Scrolling />
          <Email />
        </div>
      </div>



    </div>
  );
};

export default Expertise;
