import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import Send from "../../svgs/send";
import World2 from "../../svgs/world2";
import Logo3 from "../../svgs/logo3";
import Logo4 from "../../svgs/logo4";
import { useInView, useScroll, useTransform } from "framer-motion";

const Email = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const inview = useInView(ref);

  const hight = useTransform(scrollYProgress, [0.6, 1], [false, true]);
  const hight2 = useTransform(scrollYProgress, [0.7, 1], [false, true]);

  const getScrollYValue = () => {};

  useEffect(() => {
    window.addEventListener("scroll", getScrollYValue);
  }, [scrollYProgress]);
  return (
    <div className="bg-[#FEF9E7]" ref={ref}>
      <div className="flex flex-col gap-[185px]">
        <Marquee pauseOnHover className="hover:text-[#F0AD06]">
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <Send />{" "}
          <span className=" text-[50px] md:text-[110px] font-mont font-bold uppercase ">
            Send us an email
          </span>
          <div></div>
        </Marquee>
        <div className="flex justify-center font-mont uppercase flex-col w-full items-center text-[12px] ">
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
      </div>

      <div className=" sticky top-10 py-10 z-[10000]   ">
        <div className="h-full w-full relative">
          <Logo3
            color={hight ? "#FEF9E7" : "#010101"}
            color2={!hight2 ? "#FEF9E7" : "#010101"}
          />
        </div>
      </div>

      <div className="max-h-[130vh] object-cover ">
        <video
          className=""
          autoPlay
          loop
          muted
          src="./videos/GENTLEMAN JACK.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Email;
