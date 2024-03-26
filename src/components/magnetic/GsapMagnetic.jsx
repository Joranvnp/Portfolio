import gsap from "gsap";
import { React, useRef } from "react";

export const GsapMagnetic = ({ children }) => {
  const ref = useRef(null);
  return React.cloneElement(children, { ref });
};
