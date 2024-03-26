import { useEffect, useRef } from "react";
import gsap from "gsap";

export const GsapMagnetic = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      gsap.to(ref.current, { x: clientX });
      gsap.to(ref.current, { y: clientY });
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
