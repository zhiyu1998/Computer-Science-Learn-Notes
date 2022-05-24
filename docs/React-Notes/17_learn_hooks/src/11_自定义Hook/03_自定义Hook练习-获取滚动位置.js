import React from "react";
import useScrollPosition from "../hooks/use-scroll-position-hook";

export default function CustomScrollPositionHook() {
  const position = useScrollPosition();

  return (
    <div style={{ padding: "1000px 0" }}>
      <h2>CustomScrollPositionHook: {position}</h2>
    </div>
  );
}
