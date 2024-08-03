
import React from 'react'
import Hero from "../sections/home/hero";
import Creative from "../sections/home/creative";
import Creative2 from "../sections/home/creative2";
import Case from "../sections/home/case";
import Scrolling from "../sections/home/scrolling";
import Email from "../sections/home/email";
import Empty from './empty';
import Footer from './footer';
import Counters from './Counters';

const Home1 = () => {
  return (
    <div className='relative '>

{/* <div className="h-[110vh] w-full bg-black absolute top-0 left-0 z-[1000] opacity-75"/> */}
   
    <div className=''>
      <Hero />
      <div className="md:hidden">
        <Creative />
      </div>
      <div className="hidden md:flex">
        <Creative2 />
      </div>
      <Case />
      <Scrolling />
      {/* <Counters/> */}
      {/* <Email /> */}
    
    </div>
    <div>
    {/* <Empty/>
    <Footer/> */}
    </div>
    </div>
  );
};



export default Home1