import "../index.css";
import ReactPlayer from "react-player/youtube";
import { useState, useRef } from "react";

const BackgroundVidio = () => {
  const hendlePlay = () => {
    BackgroundVidio.current.play();
  };
  const hendlePause = () => {
    BackgroundVidio.current.pause();
  };
  return (
    <div className="player-wrapper" id="photo">
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://youtu.be/EvCw8JVwWhs?si=4ZxIXb8GKHrGA16v"
        playing={true}
        loop={true}
        volume={1.0}
        controls={true}
        className="react-player"
      />
    </div>
  );
};

export default BackgroundVidio;
