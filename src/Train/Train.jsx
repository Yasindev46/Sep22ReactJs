import React, { useState, useEffect } from "react";
import "./Train.css"
export const Train = () => {
  const [bg, setBg] = useState(["Kaveri", "Sarita"]);
  const [name, setName] = useState("");
  const handleRemove = (ind) => {
    const filtered = bg.filter((elem,i) => i !== ind);
    setBg(filtered);
  };
  const handleSearch = (e) => {
    const filtered = bg.filter((item) => item.includes(e.target.value));
    //setBg(filtered);
  };
  return (
    
    <div className="main">
    <div className="sub">
      <div>
        Search: <input onChange={handleSearch} />Bogie Name:
        <input className="bginput" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => name !== "" && bg.length < 5 && setBg([...bg, name])}>Add+</button>
        <button onClick={() => name !== "" && bg.length < 5 && setBg([name, ...bg])}>+Add</button>
      </div>
        <marquee behavior="" direction="right">
      <div className="train">
      <img src="engine.jpg" width={250} height={150}/>          
      {bg.map((item,ind) => (
        <>
          <img className="bogie" src="bogie.jpg" width={200} height={150}/>
          <span className="bgtitle">{item}</span>
          <button className="bgremove" onClick={() => handleRemove(ind)}></button>
        </>
      ))}
      </div>
      </marquee>
    </div>
    </div>
  
  );
};