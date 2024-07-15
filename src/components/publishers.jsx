import React from "react";
import Whiteheart from "../svgs/whiteheart";
import Ourwork from "./ourwork";
import Scout from "./scout";
import Scout1 from "./scout1";
import Publicscroll from "./publicscroll";
import Email from "../sections/home/email";

const Publishers = () => {
  
  return (
    <div>
      <div className="bg-black h-[70vh] ">
        <div className="">
          <video
            className="min-h-[27rem] object-cover absolute lg:h-[44rem] "
            loop
            muted
            autoPlay
            src="./videos/GENTLEMAN JACK.mp4"
          ></video>
          <div className="absolute top-0 left-0 right-0 font-bold h-[27rem] lg:h-[44rem] flex-col md:text-[50px] text-[44px] lg:text-[100px] text-center w-full flex justify-center items-center leading-[.85] uppercase bg-black select-none mix-blend-multiply  ">
            <div className="text-[#ffff] font-mont md:flex lg:inline-block ">
              We bring{" "}
              <div className=" flex ">
                <div>together</div>
                <div className="md:hidden flex lg:flex " ><Whiteheart /></div>
              </div>{" "}
            </div>
            <div className="text-[#ffff] font-mont w-full justify-center md:w-[80%] lg:w-[70%] items-center">
          <div className="hidden md:flex md:w-full md:justify-center md:items-center lg:hidden " ><Whiteheart />iconic <br /></div> <div className="flex md:hidden w-full items-center justify-center lg:flex " > iconic <br /> </div> independent  publishers{" "}
            </div>
          </div>
        </div>
      </div>
      <Ourwork/>
      <div className=" flex lg:hidden " ><Scout/></div>
      <div className="hidden lg:block w-full "><Scout1/></div>
      <Publicscroll/>
      <Email/>

    </div>
  );
};

export default Publishers;
