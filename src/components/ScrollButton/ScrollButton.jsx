import { useEffect, useState } from "react";

import { IoArrowUpCircleSharp } from "react-icons/io5";

import css from "./ScrollButton.module.css";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleBtn = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleBtn);
    return () => {
      window.removeEventListener("scroll", toggleBtn);
    };
  }, []);

  return (
    isVisible && (
      <button className={css.btn}>
        <IoArrowUpCircleSharp className={css.icon} onClick={scrollToTop} />
      </button>
    )
  );
};

export default ScrollButton;
