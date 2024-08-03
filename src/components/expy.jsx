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
    "/images/test1.jpg",
    "/images/test1.jpg",
    "/images/del2.jpeg",
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
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0.8, 0.5]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5], [0.5, 0.8]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 1], [0.5, 0.8]);

  useEffect(() => {
    console.log("Current image index:", currentImageIndex);
    console.log("Current image path:", Images[currentImageIndex]);
  }, [currentImageIndex]);

  return (
    <div className="hidden md:block bg-black ">
      <div className="relative bg-black h-[240vh] lg:h-[270vh] 2xl:h-[100vh] top-0">
        <div>
          <div className="border-b border-[#4E4C47]  "></div>
        </div>
        <div>
          <div className="py-[80px]">
            <div className="text-[12px] text-center font-mont uppercase opacity-50 text-white">
              Delivering Excellence in Laboratory Supplies
            </div>
            <div>
              <div className="text-[#FEF9E7] text-[30px] lg:text-[62px] leading-7 lg:leading-[3.5rem] lg:mt-6 font-nem font-medium text-center uppercase">
                {" "}
                Your Trusted Partner <br /> in Lab Consumables
              </div>
              <div>
                {isTrans === 1 && (
                  <motion.div
                    initial={{ translateY: 20, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#FFB703] text-[30px] lg:text-[62px] leading-7 lg:leading-[3.5rem] font-nem text-center font-medium uppercase"
                  >
                    Unmatched Quality
                  </motion.div>
                )}
                {isTrans === 2 && (
                  <motion.div
                    initial={{ translateY: 20, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#FFB703] text-[30px] lg:text-[62px] lg:leading-[3.5rem] leading-7 font-nem text-center font-medium uppercase"
                  >
                    Reliable Delivery
                  </motion.div>
                )}
                {isTrans === 3 && (
                  <motion.div
                    initial={{ translateY: 20, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#FFB703] text-[30px] lg:text-[62px] lg:leading-[3.5rem] leading-7 font-nem text-center font-medium uppercase"
                  >
                    Expert Support
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
            <div className="flex flex-col w-[50%] h-[200vh] 2xl:h-[120vh] ">
              <Newcard
                heading={"Comprehensive Product Range"}
                para={
                  "Offering a wide variety of laboratory consumables, including blood sample collection tubes, microbiology kits, and biochemistry lab supplies, sourced from top manufacturers."
                }
                images={"./images/arrow.svg"}
                button={"Learn More"}
              />

              <div>
                <div className="flex flex-col text-center w-full items-center py-7 px-6 ">
                  <div className="font-mont font-bold leading-[.85] uppercase text-white text-[54px] min-w-[15rem] w-full break-words ">
                    Tailored Solutions
                  </div>
                  <div className="opacity-[.7] text-white mt-[1.75rem] mx-auto whitespace-pre-line text-[12px] w-[13rem]  ">
                    Customized solutions to meet the unique needs of your laboratory, ensuring you have the right products for your operations.
                  </div>
                  <div className="flex text-[16px] font-mont font-medium uppercase text-opacity-[1] leading-[1] pb-[.25rem] mt-[2.5rem] border-b-[1px] gap-[25px] border-solid border-[#F0AD06] text-[#F0AD06]">
                    <div>
                      {" "}
                      <img src="./images/arrow.svg" />
                    </div>
                    <div className="">Explore Now</div>
                  </div>
                </div>
                <div className="border-b-[1px] gap-[25px] border-solid border-[white]"></div>
              </div>

              <Newcard
                heading={"Reliable Delivery"}
                para={
                  "Our reliable delivery service ensures that you receive your supplies on time, every time. We understand the importance of timely deliveries to keep your laboratory running smoothly and efficiently."
                }
                images={"./images/arrow.svg"}
                button={"Contact Us"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expy;
