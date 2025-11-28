


import { useEffect, useRef, useState } from "react";
import banner1 from "../images/banner-1.jpg";
import banner2 from "../images/banner-2.jpg";

const BannerSlider = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const images = [
    banner1,
    banner2
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    sliderRef.current.scrollTo({
      left: sliderRef.current.clientWidth * index,
      behavior: "smooth",
    });
  }, [index]);

  let startX = 0;
  let scrollLeft = 0;

  const startDragging = (e) => {
    sliderRef.current.classList.add("cursor-grabbing");
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const onDragging = (e) => {
    if (!startX) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    sliderRef.current.classList.remove("cursor-grabbing");
    startX = 0;
  };

  return (
    <div className="w-full overflow-hidden rounded-xl">
      <div
        ref={sliderRef}
        className="
          flex overflow-x-auto scroll-smooth snap-x snap-mandatory
          cursor-grab no-scrollbar select-none
        "
        onMouseDown={startDragging}
        onMouseMove={onDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={startDragging}
        onTouchMove={onDragging}
        onTouchEnd={stopDragging}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Banner"
            className="min-w-full snap-center object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
