import { useRef } from "react";
import gsap from "gsap";

export const GsapMagnetic = ({ children }) => {
  const ref = useRef(null);
  return <div ref={ref}>{children}</div>;
};
