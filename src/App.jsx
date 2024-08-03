import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Collectif from "./components/collectif";
import Home1 from "./components/home1";
import Publishers from "./components/publishers";
import Expertise from "./components/expertise";
import Contact from "./components/contact";


function App() {
  return (
    <div>
      <div className="bg-transparent relative z-[900]">
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/Collectif" element={<Collectif />} />
          <Route path="/Publishers" element={<Publishers/>}/>
          <Route path="/Expertise" element={<Expertise/>}/>
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
