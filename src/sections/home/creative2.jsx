import { React, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Featurescard from "../../components/featurescard";
// import {} from "framer-motion";

const Creative2 = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const slide = useTransform(scrollYProgress, [0.2, 0.3], ["0px", "-130px"]);
  const slide2 = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4],
    ["0px", "-130px", "-350px"]
  );
  return (
    <div
      id="main"
      className="flex flex-col justify-center  items-center bg-black max-w-[100%] h-full "
    >
      <motion.div className="uppercase font-mont flex flex-wrap lg:flex-nowrap  justify-center text-center w-full max-w-[200px] text-white leading-3 pt-[4.75rem] pb-8 text-[12px] overflow-hidden gap-1 lg:gap-[5rem]  lg:pt-[6.5rem] lg:max-w-full 2xl:pt-[13rem] xl:pt-[8.5rem] xl:gap-[8rem] 2xl:gap-[10rem]   ">
        <motion.span
          variants={{
            hello: { opacity: 0, y: 75 },
            welcome: { opacity: 1, y: 0 },
          }}
          initial="hello"
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 75,
          }}
          transition={{ duration: 0.1 }}
        >
          A
        </motion.span>
        <motion.span
          variants={{
            hello: { opacity: 0, y: 75 },
            welcome: { opacity: 1, y: 0 },
          }}
          initial="hello"
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 75,
          }}
          transition={{ duration: 0.2 }}
        >
         what
        </motion.span>
        <motion.span
          variants={{
            hello: { opacity: 0, y: 75 },
            welcome: { opacity: 1, y: 0 },
          }}
          initial="hello"
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 75,
          }}
          transition={{ duration: 0.3 }}
        >
          make
        </motion.span>
        <motion.span
          variants={{
            hello: { opacity: 0, y: 75 },
            welcome: { opacity: 1, y: 0 },
          }}
          initial="hello"
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 75,
          }}
          transition={{ duration: 0.4 }}
        >
          us
        </motion.span>
        <motion.span
          variants={{
            hello: { opacity: 0, y: 75 },
            welcome: { opacity: 1, y: 0 },
          }}
          initial="hello"
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 75,
          }}
          transition={{ duration: 0.5 }}
        >
          unique..?
        </motion.span>
        {/* <motion.span
          variants={{
            hello: { opacity: 0, y: 75 },
            welcome: { opacity: 1, y: 0 },
          }}
          initial="hello"
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 75,
          }}
          transition={{ duration: 0.6 }}
        >
          independent
        </motion.span> */}
        <motion.span
          variants={{
            hello: { opacity: 0, y: 75 },
            welcome: { opacity: 1, y: 0 },
          }}
          initial="hello"
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 75,
          }}
          transition={{ duration: 0.7 }}
        >
          premium
        </motion.span>
        <motion.span
          variants={{
            hello: { opacity: 0, y: 75 },
            welcome: { opacity: 1, y: 0 },
          }}
          initial="hello"
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 75,
          }}
          transition={{ duration: 0.8 }}
        >
          publishers
        </motion.span>
      </motion.div>
      <div className=" relative md:h-[800vh] lg:h-[300vh]">
        <div className="overflow-hidden flex flex-col items-center justify-center sticky lg:-top-[400px] md:-top-[100px] ">
          <motion.div ref={ref}>
            {" "}
            <img
              className="w-[34rem] lg:w-[66rem] "
              src="./images/REC.png"
              alt=""
            />{" "}
            
          </motion.div>

        
          <div className=" relative ">
            <div className="flex text-center gap-3 justify-start pt-10 overflow-x-hidden sticky top-0 w-[100vw] left-0 pl-5">
              <Featurescard
                no={"001"}
                title={"UNMATCHED QUALITY"}
                content={
                  "As a leading dealer of hospital lab supplies, we offer a comprehensive range of high-quality products designed to meet the stringent demands of healthcare professionals. Our supplies ensure accurate results and dependable performance in every lab."
                }
              />
              <motion.div style={{ translateX: slide }}>
                <Featurescard
                  no={"002"}
                  title={"RELIABLE HOSPITAL SUPPLIES"}
                  content={
                    "We specialize in providing hospitals with premium lab supplies, ensuring high-quality performance and enhanced patient care. "
                  }
                />{" "}
              </motion.div>
              <motion.div style={{ translateX: slide2 }}>
                <Featurescard
                  no={"003"}
                  title={"DEDICATED CUSTOMER SERVICE"}
                  content={
                    "Our clients are our priority. We provide exceptional customer service and expert advice to help you find the right products for your specific needs. Our dedication to service excellence fosters long-term, trusted relationships with all our customers"
                  }
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Creative2;
