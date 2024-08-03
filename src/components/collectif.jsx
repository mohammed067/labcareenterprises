import React from "react";
import Collective from "../svgs/collective";
import Street1 from "./street1";
import { useScroll, useTransform, motion } from "framer-motion";
const Collectif = () => {
  const { scrollYProgress } = useScroll();
  const at = useTransform(scrollYProgress, [0, 0.2], ["0px","-50px"]);
  return (
    <div>
      <motion.div
        className="bg-black pt-[75px] pb-[75px] px-4 md:sticky md:top-0 md:z-10 md:w-[100vw]  "
        style={{
          translateY: at,
        }}
      >
        <div>
          <div className="flex flex-col  bg-black w-full gap-10 ">
            
            <div className="lg:text-[10rem]  font-mont font-bold text-[#FEF9E7] text-center">ABOUT US</div>
            <div className="md:flex md:w-full   justify-center gap-[4rem] px-4 lg:px-[4rem] 2xl:gap-0 ">
              <div className="   ">
                <p className="text-white uppercase  lg:w-[35rem] 2xl:w-[700px] ">
                  <strong className="text-[#FFB703] uppercase ">
                  LabCare Enterprises is your trusted partner in providing high-quality laboratory consumables.{" "}
                  </strong>{" "}
                  We specialize in delivering reliable and innovative products to healthcare facilities, research institutions, and laboratories.
                </p>{" "}
              </div>
              <div>
                <img
                  className=""
                  src="./images/aboutus.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-solid border-[#4D4C46] pt-[15px] xl:pt-[13rem] "></div>
        </div>
      </motion.div>
      <Street1 />

    </div>
  );
};

export default Collectif;
