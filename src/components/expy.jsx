import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Newcard from "./newcard";

const Expy = () => {
  const Up = useRef(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const inView = useInView(ref);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const Images = [
    "/images/watch.webp",
    "/images/green.webp",
    "/images/style.webp",
  ];

  const updateImageIndex = (progress) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      if (progress > 0.01 && progress <= 0.2) {
        setCurrentImageIndex(1);
      } else if (progress > 0.2 && progress <= 0.4) {
        setCurrentImageIndex(2);
      } else if (progress > 0.4) {
        setCurrentImageIndex(3);
      } else {
        setCurrentImageIndex(0);
      }
    } else {
      if (progress > 0.4 && progress <= 0.1) {
        setCurrentImageIndex(1);
      } else if (progress > 0.2) {
        setCurrentImageIndex(2);
      } else {
        setCurrentImageIndex(0);
      }
    }
  };

  useEffect(() => {
    const unsubscribeScrollYProgress = scrollYProgress.onChange((progress) => {
      updateImageIndex(progress);
      console.log(progress, "pppppp");
    });

    return () => {
      unsubscribeScrollYProgress();
    };
  }, [scrollYProgress]);

  const [isTrans, setTrans] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrans((prev) => (prev % 3) + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);
  // const xx = useTransform(scrollYProgress, [0, 1], ["200px", "0px"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0.8, 0.5]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5], [0.5, 0.8]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 1], [0.5, 0.8]);

  useEffect(() => {
    console.log("Current image index:", currentImageIndex);
    console.log("Current image path:", Images[currentImageIndex]);
  }, [currentImageIndex]);

  return (
    <div className="hidden md:block bg-black ">
      <div className="relative bg-black h-[240vh] lg:h-[270vh] top-0">
        <div>
          <div className="border-b border-[#4E4C47]  "></div>
        </div>
        <div>
          <div className="py-[80px]">
            <div className="text-[12px] text-center font-mont uppercase opacity-50 text-white">
              Curating the finest media mix to captivate, engage and reach your
              target audience
            </div>
            <div>
              <div className="text-[#FEF9E7] text-[30px] lg:text-[62px] leading-7 lg:leading-[3.5rem] lg:mt-6 font-nem font-medium text-center uppercase">
                {" "}
                we guarantee <br /> your brand
              </div>
              <div>
                {isTrans === 1 && (
                  <motion.div
                    initial={{ translateY: 20, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#FFB703] text-[30px] lg:text-[62px] leading-7 lg:leading-[3.5rem] font-nem text-center font-medium uppercase"
                  >
                    Audience Relevance
                  </motion.div>
                )}
                {isTrans === 2 && (
                  <motion.div
                    initial={{ translateY: 20, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#FFB703] text-[30px] lg:text-[62px] lg:leading-[3.5rem] leading-7 font-nem text-center font-medium uppercase"
                  >
                    Safety
                  </motion.div>
                )}
                {isTrans === 3 && (
                  <motion.div
                    initial={{ translateY: 20, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#FFB703] text-[30px] lg:text-[62px] lg:leading-[3.5rem] leading-7 font-nem text-center font-medium uppercase"
                  >
                    Premium Exclusivity
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="py-14  ">
          <div className="flex justify-between ">
            <div ref={ref} className="top-0 sticky h-[100vh] ">
              <div className="overflow-hidden h-full">
                <motion.img
                  ref={Up}
                  style={{
                    // translateY: xx,
                    opacity:
                      currentImageIndex === 0
                        ? opacity1
                        : currentImageIndex === 1
                        ? opacity2
                        : opacity3,
                  }}
                  className="w-[30rem] h-[40rem] lg:w-[45rem] lg:h-[45rem] object-cover rounded-[2px]"
                  src={Images[currentImageIndex]}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col w-[50%] h-[200vh] ">
              <Newcard
                heading={"Social display"}
                para={
                  "Brand or crafted assets displayed through the social pages of our most relevant publishers amplified widely by our team with specific targeting and goals."
                }
                images={"./images/arrow.svg"}
                button={"Let's do this"}
              ></Newcard>

              <div>
                <div className="flex flex-col text-center w-full items-center py-7 px-6 ">
                  <div className="font-mont font-bold leading-[.85] uppercase text-white text-[54px] min-w-[15rem] w-full break-words ">
                    Media amplification
                  </div>
                  <div className="opacity-[.7] text-white mt-[1.75rem] mx-auto whitespace-pre-line text-[12px] w-[13rem]  ">
                    Get a broader audience through our high-end network. We
                    create brand-safe content to amplify your activations.{" "}
                  </div>
                  <div className="flex text-[16px] font-mont font-medium uppercase text-opacity-[1] leading-[1] pb-[.25rem] mt-[2.5rem] border-b-[1px] gap-[25px] border-solid border-[#F0AD06] text-[#F0AD06]">
                    <div>
                      {" "}
                      <img src="./images/arrow.svg" />
                    </div>
                    <div className="">Let's do this</div>
                  </div>
                </div>
                <div className="border-b-[1px] gap-[25px] border-solid border-[white]"></div>
              </div>

              <Newcard
                heading={"Bespoke brand content"}
                para={
                  "We craft a powerful big idea and its activations, and deliver action brand content, deepening the connection between your brand and our communities. Through the finest mix media to captivate, engage and reach your target audience."
                }
                images={"./images/arrow.svg"}
                button={"Let's do this"}
              ></Newcard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expy;
