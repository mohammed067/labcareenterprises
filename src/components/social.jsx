
import React, { useEffect, useRef, useState } from "react";
import Newcard from "./newcard";
const Social = () => {




  const positions = [0, -18, -34, -51];
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const translateTimeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % positions.length);
    }, 1000); // Adjust the timing as needed

    return () => clearTimeout(translateTimeout);
  }, [currentIndex]);

 
  return (
    <div>
      <div className="p-[35px] bg-black ">
        <div className="font-mont leading-[1] uppercase text-[31px] font-medium text-center text-white  ">
          we guarantee your brand
        </div>
        <div className="overflow-hidden max-h-[19px]  items-center text-center   ">
          <div
            className=" flex flex-col items-center w-full text-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(${positions[currentIndex]}px)` }}
          >
            <div className="text-[20px] font-medium uppercase leading-[.85]  text-[#FFB703] ">
              Audience Relevance
            </div>
            <div className="text-[20px] font-medium uppercase leading-[.85] text-[#FFB703] ">
              Safety
            </div>
            <div className="text-[20px] font-medium uppercase leading-[.85] text-[#FFB703] ">
              Premium Exclusive
            </div>
            <div className="text-[20px] font-medium uppercase leading-[.85] text-[#FFB703] ">
              Audience Relevance
            </div>
          </div>
        </div>

        <Newcard
          heading={"Social display"}
          para={
            "Brand or crafted assets displayed through the social pages of our most relevant publishers amplified widely by our team with specific targeting and goals."}
            images={"./images/arrow.svg"}
            button={"Let's do this"}
        ></Newcard>

        <div>
        <div className='flex flex-col text-center w-full items-center py-7 px-6 ' >
        <div className='font-mont font-bold leading-[.85] uppercase text-white text-[54px] lg:text-[75px] min-w-[15rem] w-full break-words' >Media amplification</div>
        <div className='opacity-[.7] text-white mt-[1.75rem] mx-auto whitespace-pre-line text-[12px] w-[13rem] lg:w-[320px]  ' >Get a broader audience through our high-end network. 
        We create brand-safe content to amplify your activations.  </div>
        <div className='flex text-[16px] font-mont font-medium uppercase text-opacity-[1] leading-[1] pb-[.25rem] mt-[2.5rem] border-b-[1px] gap-[25px] border-solid border-[#F0AD06] text-[#F0AD06]' >
        <div> <img src="./images/arrow.svg"/></div>
        <div className='' >Let's do this</div>
        </div> 
        </div>
        <div className='border-b-[1px] gap-[25px] border-solid border-[white]' ></div>
        </div>

        <Newcard
          heading={"Bespoke brand content"}
          para={
            "We craft a powerful big idea and its activations, and deliver action brand content, deepening the connection between your brand and our communities. Through the finest mix media to captivate, engage and reach your target audience."}
            images={"./images/arrow.svg"}
            button={"Let's do this"}
        ></Newcard>



      </div>
    </div>
  );
};

export default Social;
