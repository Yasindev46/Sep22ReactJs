import React, { useRef } from "react";
import "./Hooks.css"

export default function HookuseRef() {
  const inputRef = useRef();
  const inputRef2 = useRef();

  const handleShow = () => {
    inputRef.current.focus();
    inputRef2.current.value=""
  };

  const handleShow2 = () => {
    inputRef2.current.value = 100;
    inputRef2.current.style.color = "red";
    inputRef2.current.style.fontWeight="bolder";
  };

  return (
    <div className="mainDiv">
      <h1>USEREF HOOK</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleShow}>Focus</button><br /><br />

      <input type="text" ref={inputRef2} />
      <button onClick={handleShow2}>Change</button><br />
    </div>
  );
}
