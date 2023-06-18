import { elementType } from "prop-types";
import { React, useEffect, useRef, useState } from "react";

const useFullscreen = (onFullS) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (onFullS && typeof onFullS === "function") {
        onFullS(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (onFullS && typeof onFullS === "function") {
      onFullS(false);
    }
  };
  return { element, triggerFull, exitFull };
};

function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are samll");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;
