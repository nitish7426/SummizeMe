"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [dot, setDot] = useState("...");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDot((d) => (dot == "..." ? "." : d + "."));
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  });
  return <div className="mx-auto">Summarizing{dot}</div>;
};

export default Loader;
