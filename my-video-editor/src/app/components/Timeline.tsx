"use client";

import React, { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

interface TimelineProps {
  duration: number;
}

const Timeline: React.FC<TimelineProps> = ({ duration }) => {
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    const newPosition = Math.max(0, Math.min(data.x, 1000)); // Confine movement to within bounds
    setCurrentPosition(newPosition);
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100px",
        border: "1px solid black",
        width: "1000px",
      }}
    >
      <Draggable
        axis="x"
        bounds="parent"
        position={{ x: currentPosition, y: 0 }}
        onDrag={handleDrag}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "2px",
            background: "red",
          }}
        ></div>
      </Draggable>
      <div>Time: {(currentPosition / 1000) * duration} seconds</div>
    </div>
  );
};

export default Timeline;
