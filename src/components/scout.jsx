
import React from "react";

const Scout = () => {

  return (
    <div>
      <div className="bg-black">
        <div className="py-20 lg:sticky lg:top-0  lg:w-full lg:flex lg:items-center lg:justify-center ">
          <div
       
            className="font-mont overflow-hidden text-center text-[#FEF9E7] text-[50px] font-bold leading-[.85] uppercase lg:w-[52rem] lg:text-[100px] z-10 lg:pt-[5rem] "
          >
            We scout worldwide for rising stars
          </div>
        </div>
        <div className="grid grid-cols-1 px-5 gap-y-3 lg:w-full  h-[280vh] md:h-[460vh]  z-[999] ">
          <div className="relative  ">
            {" "}
            <div className="z-10 brightness-75">
              <img className="lg:w-[40%]" src="/images/clothes.webp" alt="" />
            </div>{" "}
            <div className="absolute top-[5rem] left-[6rem]  md:left-[16rem] md:top-[14rem] ">
              <img className="w-[50%] md:w-full z-20 " src="./images/first.svg" alt="" />
            </div>
          </div>
          <div className="relative  ">
            {" "}
            <div className="z-10 brightness-75 lg:flex lg:justify-end lg:items-end w-full ">
              <img className="lg:w-[40%]" src="./images/girl2.webp" alt="" />
            </div>{" "}
            <div className="absolute top-[9.75rem] left-[7rem] md:left-[17rem] md:top-[25rem] ">
              <img
                className="w-[50%] md:w-[13rem] z-20 "
                src="./images/voyage.webp"
                alt=""
              />
            </div>{" "}
          </div>
          <div className="relative">
            {" "}
            <div className="z-10 brightness-75  lg:flex lg:justify-center lg:items-center w-full ">
              <img className="w-full" src="./images/garden.webp" alt="" />
            </div>{" "}
            <div className="absolute top-[5rem] left-[7rem]   md:left-[21rem] md:top-[13rem] ">
              <img className="w-[60%] z-20 " src="./images/second.svg" alt="" />
            </div>{" "}
          </div>
          <div className="relative">
            {" "}
            <div className="z-10 brightness-75 lg:flex lg:justify-end lg:items-end w-full ">
              <img className="lg:w-[40%]" src="./images/egg.webp" alt="" />
            </div>{" "}
            <div className="absolute top-[12rem] left-[5rem] md:left-[21rem] md:top-[13rem] ">
              <img className="w-[50%] z-20 " src="./images/mapstr.png" alt="" />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scout;
