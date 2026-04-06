import React, { useEffect, useRef, useState } from "react";
import "./SlideDownAnimation.css";

const SlideImgDown = ({ src, alt, className }) => {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${show ? "slide-down" : ""}`}>
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default SlideImgDown;