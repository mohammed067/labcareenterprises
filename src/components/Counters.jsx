// src/components/Counters.js
import React, { useEffect, useState } from 'react';

const Counter = ({ endValue, duration, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 50);
    
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [endValue, duration]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold">{count}</h2>
      <p className="text-lg">{label}</p>
    </div>
  );
};

const Counters = () => {
  return (
    <div className="flex justify-around p-8 bg-gray-100">
      <Counter endValue={200} duration={2000} label="Customers" />
      <Counter endValue={12} duration={1200} label="Years of Experience" />
    </div>
  );
};

export default Counters;
