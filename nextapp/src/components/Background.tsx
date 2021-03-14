import React from "react";

interface BackgroundProps {}

const bgStyle = {
  minHeight: "100vh",
  minWidth: "100vw",
  backgroundColor: "black",
  color: "white",
};

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return <div style={bgStyle}>{children}</div>;
};
