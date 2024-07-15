
import React from 'react'
import Hero from "../sections/home/hero";
import Creative from "../sections/home/creative";
import Creative2 from "../sections/home/creative2";
import Case from "../sections/home/case";
import Scrolling from "../sections/home/scrolling";
import Email from "../sections/home/email";

const Home1 = () => {
  return (
   
    <div>
      <Hero />
      <div className="md:hidden">
        <Creative />
      </div>
      <div className="hidden md:flex">
        <Creative2 />
      </div>
      <Case />
      <Scrolling />
      <Email />
    </div>
  );
};



export default Home1