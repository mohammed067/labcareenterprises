import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ svg, images, svg1, media, arrow, border }) => {
  const [ishover, setHover] = useState(0);
  const [IsVisit, setVisit] = useState(0);
  return (
    <div className=" bg-black">
      <div className="flex flex-col bg-black gap-[8px] py-5 ">
        <div
          className="flex items-center w-full justify-center h-[30px] md:h-[100px] md:w-full"
          onMouseEnter={() => {
            setHover(1);
          }}
          onMouseLeave={() => {
            setHover(0);
          }}
        >
          <div className="lg:text-[6rem] text-[1.2rem] md:text-[4rem] text-[#FEF9E7]  font-mont font-bold ">{svg}</div>
          <motion.div
            className="w-[10rem]  h-[6rem] hidden lg:flex "
            animate={{
              width: ishover == 1 ? "10rem" : "0rem",
            }}
          >
            <img
              className=" object-cover w-full h-full  "
              src={images}
            />
          </motion.div>
          <div className="lg:text-[6rem] text-[1.2rem] md:text-[4rem] text-[#FEF9E7] font-mont font-bold  ">{svg1}</div>
        </div>

        <div className="flex  items-center w-full justify-center gap-2 lg:hidden">
          <div className="flex gap-5 text-[#F0AD06] text-[12px] font-mont uppercase">
            {media}
          </div>
          <div className=" rounded-full font-mont w-[19px] h-[19px] bg-[#F0AD06] text-[12px] font-bold text-black text-center flex items-center justify-center ">
            {arrow}
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-solid border-[#4D4C46] ">
        {border}
      </div>
    </div>
  );
};

export default Card;
