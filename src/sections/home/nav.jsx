import React, { useEffect, useState } from "react";
import Logo from "../../svgs/logo";
import Message from "../../svgs/message";
import Message1 from "../../svgs/message1";
import Share from "../../svgs/share";
import Heart from "../../svgs/heart";
import Logo5 from "../../svgs/logo5";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      setScrolled(scrollY > 0);
      setScroll(scrollY > viewportHeight * 4.8); // Adjusted to 0.1 to check after 10% of viewport height
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [ishover, setHover] = useState(false);
  const [ishover1, setHover1] = useState(false);
  const [ishover2, setHover2] = useState(false);
  const [ishover3, setHover3] = useState(false);
  return (
    <div
      className={`w-full fixed top-0 left-0 z-[9999] transition-all overflow-hidden ${
        isScroll ? "bg-[#FEF9E7] " : isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className=" relative flex justify-between  py-3 px-4 items-center">
        {isScroll ? (
          <div className="">
            <Logo5 />
          </div>
        ) : (
          <div className="w-1">
            <Logo />
          </div>
        )}

        <div className="hidden lg:flex lg:gap-5 lg:uppercase lg:text-white lg:text-[12px] lg:font-mont  ">
          <div>
            <div
              className={`hover:text-[#F0AD06] ${
                isScroll ? "text-black" : "text-white"
              } `}
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
          <Link to="/Collectif" target="" >Collectif</Link>
            </div>
            <div
              style={{ opacity: ishover ? 1 : 0 }}
              className="flex justify-center items-center"
            >
              {" "}
              <Message />{" "}
            </div>
          </div>

          <div>
            <div
              className={`hover:text-[#F0AD06] ${
                isScroll ? "text-black" : "text-white"
              } `}
              onMouseEnter={() => {
                setHover1(true);
              }}
              onMouseLeave={() => {
                setHover1(false);
              }}
            >
            <Link to="/Publishers" target="" >Publishers</Link>
            </div>
            <div
              style={{ opacity: ishover1 ? 1 : 0 }}
              className="flex justify-center items-center"
            >
              <Message1 />
            </div>
          </div>
          <div>
            <div
              className={`hover:text-[#F0AD06] ${
                isScroll ? "text-black" : "text-white"
              } `}
              onMouseEnter={() => {
                setHover2(true);
              }}
              onMouseLeave={() => {
                setHover2(false);
              }}
            >
            <Link to="/Expertise" target="" >Expertise</Link>
            </div>
            <div
              style={{ opacity: ishover2 ? 1 : 0 }}
              className="flex justify-center items-center"
            >
              <Share />
            </div>
          </div>
          <div>
            <div
              className={`hover:text-[#F0AD06] ${
                isScroll ? "text-black" : "text-white"
              } `}
              onMouseEnter={() => {
                setHover3(true);
              }}
              onMouseLeave={() => {
                setHover3(false);
              }}
            >
            <Link to="/Contact" target="" >Contact</Link>
            </div>
            <div
              style={{ opacity: ishover3 ? 1 : 0 }}
              className="flex justify-center items-center"
            >
              <Heart />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-5 lg:text-[#F0AD06] lg:text-[12px] lg:font-mont ">
          <button className="lg:uppercase"> Get your media kit </button>{" "}
          <div className=" rounded-full font-mont w-[19px] h-[19px] bg-[#F0AD06] text-black text-center ">
            ↓
          </div>
        </div>
        <div className="text-white font-bold font-mont text-[16.5px] lg:hidden ">
          <button>MENU</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
