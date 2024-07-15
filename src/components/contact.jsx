import React from "react";
import Lets from "../svgs/lets";
import Talk from "../svgs/talk";
import World2 from "../svgs/world2";
import Noti from "../svgs/noti";

const Contact = () => {
  return (
    <div className="block lg:flex lg:w-full w-[100vw] ">
      <div className="relative">
        <video
          className="h-[62vh] md:h-[73vh] lg:h-[102vh] lg:w-[50vw] object-cover "
          loop
          muted
          autoPlay
          src="./videos/GENTLEMAN JACK.mp4"
        ></video>
      </div>
      <div className="grid w-full absolute top-0 lg:top-[10rem] xl:top-[25.5rem] 2xl:top-[16rem] gap-[30px] left-0 pt-28 p-5 lg:w-[50%]  ">
        <div className="">
          <Lets />
          <Talk />
        </div>
        <div className="flex justify-center font-mont uppercase flex-col w-full items-center text-[12px] leading-[1] text-white  ">
          <div>
            <a href="">bonjour@theboncollectif.com</a>
          </div>
          <div className="flex items-center text-center gap-2">
            <p>13 Rue Vivienne, 75002 Paris </p> <World2 /> <p>France</p>{" "}
          </div>
          <div className="flex gap-3">
            <a className="underline" href="">
              Linkedin
            </a>
            <a className="underline" href="">
              Newsletter
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between lg:grid-cols-3   ">
          <div className="md:flex lg:block ">
            <div className="border-[1px] border-solid border-white w-[3rem] text-[12px] font-mont rounded-[3px] text-white text-center h-[1.25rem] ">
              ©2024
            </div>
            <div className="ml-6 text-white font-mont uppercase text-[12px]   lg:text-[12px] w-full ">
              {" "}
              Privacy Policy
            </div>
          </div>
          <div className=" flex justify-center">
            <Noti />
          </div>
          <div className="hidden lg:flex font-mont text-[12px] font-medium text-white uppercase lg:justify-end ">
            Site by Anas
          </div>
        </div>
      </div>
      <div></div>

      <div className="bg-black pb-12 p-4 lg:w-[50vw]  lg:pt-[7rem] xl:pt-[23rem] lg:h-[102vh] 2xl:pt-[16rem] ">
        <div className="uppercase opacity-100 py-[.625rem] text-[#7F7D74] font-mont text-[22px]  lg:text-[34px] border-b font-medium 2xl:py-0  ">
          First Name*
        </div>
        <div className="uppercase opacity-100 py-[.625rem] text-[#7F7D74] font-mont text-[22px] lg:text-[34px]  border-b font-medium 2xl:py-0 ">
          E-mail*
        </div>
        <div className="uppercase opacity-100 py-[.625rem] text-[#7F7D74] font-mont text-[22px] lg:text-[34px]  border-b font-medium 2xl:py-0 ">
          Company Name
        </div>
        <div className="uppercase opacity-100 py-[.625rem] text-[#7F7D74] font-mont text-[22px]  lg:text-[34px] border-b font-medium 2xl:pb-[8rem]  pb-[10rem] ">
          Message
        </div>
        <div className="flex-col  flex md:flex-row md:flex md:mt-[2rem] xl:mt-0 lg:flex-row lg:flex md:justify-between md:items-center 2xl:pt-[3rem] ">
          <div className="flex py-5 gap-3">
            <div className="border-[1px] w-[1rem] h-[1rem]"></div>
            <div className="font-mont text-[#7F7D74] uppercase text-[12px] ">
              you agree to our privacy policy
            </div>
          </div>
          <div className="uppercase font-mont border-b text-white w-[5.5rem] text-center pb-1 text-[16px] font-medium  ">
            Let's Talk
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
