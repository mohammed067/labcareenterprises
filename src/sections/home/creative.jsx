import { React, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Featurescard from "../../components/featurescard";
// import {} from "framer-motion";

const Creative = () => {
  const ref = useRef(null);
  const inView = useInView(ref,);
  const { scrollYProgress } = useScroll();
  const slide = useTransform(scrollYProgress, [0.3, 0.7], ["0px", "-50px"]);
  const slide2 = useTransform(
    scrollYProgress,
    [0.3, 0.7, 1],
    ["0px", "-50px", "-250px"]
  );
  return (
    <div
      id="main"
      className="flex flex-col z-[1000] justify-center items-center bg-black "
    >
      <motion.div
       
        className="uppercase font-mont flex flex-wrap justify-center text-center w-full max-w-[200px] text-white leading-3 pt-[4.75rem] pb-8 text-[12px] overflow-hidden gap-1"
      >
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
          collective
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
          of
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
          the
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
          best
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
          transition={{ duration: 0.6 }}
        >
          independent
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
      <motion.div
      ref={ref}
      >
        {" "}
        <img className="w-[18rem] md:w-[34rem]" src="./images/REC.png" alt="" />{" "}
      </motion.div>
      <div className=" relative h-[800vh]">
        <div className="grid grid-cols-1 grid-rows-3 text-center gap-3 justify-center pt-10  sticky -top-[17rem] left-0  ">
          <Featurescard
            no={"001"}
            title={"Creative excellence"}
            content={
              "We are a one stop source of creative excellence. Perfect stories and meaningful brand content, crafted by the greatest global creators, shared with your ideal audience."
            }
          />
          <motion.div  style={{ translateX: slide }}>
            <Featurescard
              className="w-400px"
              no={"002"}
              title={"Millennial Luxury-Lovers"}
              content={
                "We excel in reaching and engaging millennial luxury lovers through our network of influential publishers. They're the go-to source for curated content that deeply connects with their passions and values. "
              }
            />{" "}
          </motion.div>
          <motion.div  style={{ translateX: slide2 }}>
            <Featurescard
              no={"003"}
              title={"Devoted communities"}
              content={
                "Highly engaged communities of passionate people. These communities love our publishers' content for its authenticity. They actively interact, share and support the content that matches with their interests and values."
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Creative;
