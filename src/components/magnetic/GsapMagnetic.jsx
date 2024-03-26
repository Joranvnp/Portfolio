import { useEffect, useRef } from "react";
import gsap from "gsap";

export const GsapMagnetic = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
    };

    const mouseLeave = (e) => {};

    ref.current.addEvenListener("mousemove", mouseMove);
    ref.current.addEvenListener("mousemove", mouseLeave);

    return () => {
      ref.current.addEvenListener("mousemove", mouseMove);
      ref.current.addEvenListener("mousemove", mouseLeave);
    };
  }, []);
  return <div ref={ref}>{children}</div>;
};
