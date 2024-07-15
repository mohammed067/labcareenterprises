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
        className="bg-black pt-[75px] pb-[75px] px-4 md:sticky md:top-0 md:z-10 md:w-[100vw] h-[100vh] "
        style={{
          translateY: at,
        }}
      >
        <div>
          <div className="flex flex-col  gap-10 ">
            <Collective />
            <div className="md:flex md:w-full md:gap-[14.25rem] lg:gap-[7.25rem] 2xl:gap-0 ">
              <div className="flex font-mont text-[22px] md:text-[20px] lg:text-[31px] xl:text-[32px] font-medium w-full md:justify-end xl:h-[30rem] 2xl:h-[20rem] md:items-end md:w-auto justify-center items-center leading-[1]   ">
                <p className="text-white uppercase md:w-[246px] lg:w-[440px] xl:w-[640px] 2xl:w-[700px] ">
                  <strong className="text-[#FFB703] uppercase ">
                    We are one global space to reach youth audiences{" "}
                  </strong>{" "}
                  and engage with them through their passions
                </p>{" "}
              </div>
              <div>
                <img
                  className="w-full h-[209px] md:h-[220px] md:w-[14rem] lg:w-[25rem] lg:h-[310px] 2xl:h-[330px] 2xl:w-[48rem]  object-cover  xl:w-full xl:h-[50%] "
                  src="./images/girl.webp"
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
