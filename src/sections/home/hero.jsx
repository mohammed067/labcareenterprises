import React from "react";
import { motion } from "framer-motion";

import Logo1 from "../../svgs/logo1";

import World from "../../svgs/world";

const Hero = () => {
 



  // const handleMouseEnter = () => {
  //   setHover(1);
  // };

  // const handleMouseLeave = () => {
  //   setHover(0);
  // };

  return (
    <div className=" relative z-10 ">
      <video
        className="min-h-[100vh] lg:min-h-[105vh] absolute top-0 left-0 w-[100vw] object-cover"
        autoPlay
        loop
        muted
        src="./videos/intro.mp4"
      ></video>
     
      <div className="relative z-20 flex w-full h-[91svh] justify-center md:justify-around gap-5 flex-col items-center font-[500]">
        <div className=" w-full flex justify-center items-center">
          <Logo1 />
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-1 items-center lg:flex-row text-white font-mont leading-3 text-[10px] md:text-[12px] ">
            <div>The First Global </div>{" "}
            <div>
              <World />
            </div>{" "}
            <div className="uppercase">network to bring together</div>
          </div>
          <div className=" font-mont uppercase text-white text-center text-[30px] leading-8 lg:text-[40px] lg:leading-[2.45rem] lg:w-[35rem]">
            <h3>The world’s most iconic independent publishers</h3>
          </div>
        </div>
      </div>

      {/* <Featurescard no={1} title={"string"} content={"gywhfsabh"} />
       <Featurescard no={1} title={"string"} content={"gywhfsabh"} />
  <Featurescard no={1} title={"string"} content={"gywhfsabh"} />*/}
    </div>
  );
};

export default Hero;
