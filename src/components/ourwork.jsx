import React from "react";
import Our from "../svgs/our";
import Map from "../svgs/map";

const Ourwork = () => {
  return (
    <div className="text-white bg-black ">
      <div className="lg:flex relative  ">
        <div className="flex flex-col w-full justify-center items-center gap-6 h-[33rem] md:h-[40rem] lg:h-[70rem] z-[999] ">
          <div className="">
            <Our />
          </div>
          <div className="text-center text-[12px] font-mont font-normal leading-[1] w-[265px] uppercase md:w-[65%] ">
            A GLOBAL NETWORK OF 50+ ICONIC AND EMERGING INDEPENDENT PUBLISHERS.
            (France, UK, Germany, Italy, Spain, Belgium... and more to come)
          </div>
          <div className="grid grid-cols-2 grid-rows-6 mt-10 gap-y-[25px] md:gap-y-[85px] w-full md:grid-cols-3 md:grid-rows-4 lg:mt-[85px]  ">
            <div className="h-full w-full flex  justify-center items-center">
              <img
                className="w-full max-w-[40%] "
                src="./images/nylon.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/sandwitch.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/ideat.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/good.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/views.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/fubiz.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/fishye.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/voxe.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/milk.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/moods.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/voyage.webp"
                alt=""
              />
            </div>
            <div className="h-full w-full flex justify-center items-center ">
              {" "}
              <img
                className="w-full max-w-[40%] "
                src="./images/more.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:sticky lg:top-10 lg:h-[143vh] ">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Ourwork;
