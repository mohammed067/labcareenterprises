import React from "react";

const Featurescard = ({ no, title, content, children }) => {
  return (
    <div className="flex flex-col bg-[#FEF9E7] text-[black]  h-[285px] w-[95%] items-center mx-auto md:mx-0 py-8 lg:max-w-[30rem]  lg:min-w-[30rem] lg:h-[25rem] xl:min-w-[36rem] xl:max-w-[36rem]">
      <div className="font-mont text-center ">{no}</div>
      <div className="uppercase text-[30px] text-center leading-[0.85]  md:w-[324px] lg:max-w-[540px] lg:text-[62px] font-[500] mt-[1.25rem] whitespace-pre-line font-mont ">
        {title}
      </div>
      <div className="font-mont text-center max-w-[420px] mt-[3rem] md:min-w-[345px] whitespace-pre-line font-[400] md:w-full text-[12px] lg:min-w-[420px] lg:max-w-[420px] ">
        {content}
      </div>
      {/* <div>{children}</div>*/}
    </div>
  );
};

export default Featurescard;
