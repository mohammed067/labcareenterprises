import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

const Scout1 = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.9], ["1", "1.2"]);
  return (
    <div>
      <div className="bg-black">
        <div className="py-20 lg:sticky lg:top-0  lg:w-full lg:flex lg:items-center lg:justify-center ">
          <motion.div
            style={{ scale: scale }}
            className="font-mont overflow-hidden text-center text-[#FEF9E7] text-[50px] font-bold leading-[.85] uppercase lg:w-[52rem] lg:text-[4rem] z-10 lg:pt-[5rem] "
          >
           Explore our diverse range of high-quality products through our gallery,
          </motion.div>
        </div>
        <div className="grid grid-cols-1 px-5 gap-y-3 lg:w-full  h-[310vh] xl:h-[340vh] 2xl:h-[450vh]  z-[999] ">
          <div className="relative  ">
            {" "}
            <div className="z-10 brightness-75">
              <img className="w-[50%]" src="/images/blood.jpg" alt="" />
            </div>{" "}
            <div className="absolute top-[13.5rem] xl:top-[12.5rem] left-[15.5rem]   ">
              {/* <img className="w-[75%] xl:w-full z-20 " src="./images/first.svg" alt="" /> */}
            </div>
          </div>
          <div className="relative  ">
            {" "}
            <div className="z-10 brightness-75 lg:flex lg:justify-end lg:items-end w-full ">
              <img className="w-[40%] " src="./images/lab.jpg" alt="" />
            </div>{" "}
            {/* <div className="absolute top-[13rem] left-[45.5rem] xl:left-[65.5rem] xl:top-[18rem] ">
              <img
                className="w-[80%]  xl:w-full z-20 "
                src="./images/voyage.webp"
                alt=""
              />
            </div>{" "} */}
          </div>
          <div className="relative">
            {" "}
            <div className="z-10 brightness-75  lg:flex lg:justify-center lg:items-center w-[60%]">
              <img className="w-[40%]" src="./images/syringe.png" alt="" />
            </div>{" "}
            <div className="absolute top-[4rem] left-[16rem] xl:left-[23rem] xl:top-[5rem] ">
              <img className="w-[60%] xl:w-[70%] z-20 " src="./images/second.svg" alt="" />
            </div>{" "}
          </div>
          <div className="relative">
            {" "}
            <div className="z-10 brightness-75 lg:flex lg:justify-end lg:items-end w-full   ">
              <img className=" w-[55%]" src="./images/dengue.jpg" alt="" />
            </div>{" "}
            <div className="absolute top-[35rem] left-[39rem] xl:left-[56rem] xl:top-[45rem]">
              <img className="w-[55%] xl:w-[70%] z-20 " src="./images/mapstr.png" alt="" />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scout1;
