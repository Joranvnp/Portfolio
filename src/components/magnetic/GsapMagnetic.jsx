import { useEffect, useRef } from "react";
import gsap from "gsap";

export const GsapMagnetic = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      gsap.to(ref.current, { x: x });
      gsap.to(ref.current, { y: y });
    };

    const mouseLeave = (e) => {
      gsap.to(ref.current, { x: 0 });
      gsap.to(ref.current, { y: 0 });
    };

    ref.current.addEventListener("mousemove", mouseMove);
    ref.current.addEventListener("mousemove", mouseLeave);

    return () => {
      ref.current.removeEventListener("mousemove", mouseMove);
      ref.current.removeEventListener("mousemove", mouseLeave);
    };
  }, []);
  return <div ref={ref}>{children}</div>;
};
