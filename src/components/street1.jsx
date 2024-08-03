import React, { useEffect, useRef, useState, } from 'react'
import Card from './card'
import Street from '../svgs/street'
import Culture from '../svgs/culture'
import Tra from '../svgs/tra'
import Vel from '../svgs/vel'
import Fine from '../svgs/fine'
import Lux from '../svgs/lux'
import Ury from '../svgs/ury'
import Favourite from '../svgs/favourite'
import Sports from '../svgs/sports'
import Art from '../svgs/art'
import Scrolling from '../sections/home/scrolling'
import Email from '../sections/home/email'

const Street1 = () => {
  const [IsVisit, setVisit] = useState(0);
  const divRef = useRef(null)
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      const div = divRef.current;
      if (!div) return;

      
    };

    document.body.style.cursor = " none";

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "default";
    };
  }, []);
  return (
    <div className='md:relative md:z-[999] md:bottom-[10rem] bg-black lg:bottom-[0rem]  '
    onMouseEnter={() => {
            setVisit(1);
          }}
          onMouseLeave={() => {
            setVisit(0);
          }}
    >
    <div
        
      >
        <div className=" text-black text-[15px] uppercase font-nem font-medium ">
          get your <br /> media kit
        </div>
        <div className=" ">
  
        </div>
      </div>
    <div className="flex flex-col  items-center justify-center w-full uppercase bg-black  text-center gap-5 pt-[5rem] ">
        <div className=" text-white items-center justify-center text-[30px] md:text-[20px] lg:text-[55px] font-mont leading-[.85] max-w-[725px] w-full flex whitespace-pre-line mx-auto  font-medium   ">
          <h2 className="leading-[2.5rem] text-[1.8rem] pt-[4rem]">
          We are committed to offering top-notch lab supplies that meet the highest standards of quality and safety, ensuring that your operations run smoothly and efficiently.
          </h2>{" "}
        </div>
        <div className="uppercase text-white  text-[16px] md:text-[10px] font-mont leading-[1] lg:text-[15px] max-w-[500px]  whitespace-pre-line  font-medium py-14 ">
          <p className="w-[300px] md:w-[269px] lg:w-[390px] text-[1.5rem] ">
          Why Choose Us?.
          </p>
        </div>
      </div>
    <div >
  
    <Card svg="EXPER"
    images={"./images/expertise.jpg"}
    svg1="TISE"
    media={" Get your media kit "}
    arrow={"↓"}
    border={""}
    >
    
    </Card>

    <Card svg="QUA"
    images={"./images/quality.jpg"}
    svg1="LITY"
    media={" Get your media kit "}
    arrow={"↓"}
    border={""}
    >
    
    </Card>
    <Card svg="CUSTOMER"
    images={"./images/focus.jpg"}
    svg1="FOCUS"
    media={" Get your media kit "}
    arrow={"↓"}
    border={""}
    >
    
    </Card>
    <Card svg="RELIABLE"
    images={"./images/reliable.png"}
    svg1="DELIVERY"
    media={" Get your media kit "}
    arrow={"↓"}
    border={""}
    >
    
    </Card>

    <Card svg="INNOVATIVE"
    images={"./images/innovative.jpg"}
    svg1="SOLUTIONS"
    media={" Get your media kit "}
    arrow={"↓"}
    border={""}
    >
    
    </Card>
    </div>
    <Scrolling/>
    {/* <Email/> */}
    </div>
  )
}

export default Street1