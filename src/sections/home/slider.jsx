import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger if you're using it
import Logo3 from "../../svgs/logo3";
import Logo4 from "../../svgs/logo4";

const YourComponent = () => {
  return (
    // Your JSX for the component

    <div className="h-[400vh] relative">
      <div className=" sticky top-10  h-[70rem]">
        <div className=" h-[20rem]">
          <div className="  z-10 ">
            <Logo3 />
          </div>
        </div>
      </div>

      <div className="sky sticky bottom-0  -z-30 h-max   ">
        <video
          className="min-h-[100vh] lg:min-h-[105vh] top-0 left-0 w-[100vw] object-cover"
          autoPlay
          loop
          muted
          src="./videos/GENTLEMAN JACK.mp4"
        ></video>
      </div>
    </div>
  );
};

export default YourComponent;
