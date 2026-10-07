'use client'
import Image from "next/image";
import React from "react";
import { useStopwatch } from "react-timer-hook";

function TheLegendaryStopwatch() {
  const { milliseconds, seconds, minutes, hours, days, reset,  } = useStopwatch({interval: 20});

  return (
    <div style={{textAlign: 'center'}}>
      <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>:<span>{milliseconds}</span>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <h2 className="bg-blue-400">very cool timer</h2>
      <div>
        <TheLegendaryStopwatch />
      </div>
    </div>
  );
}
