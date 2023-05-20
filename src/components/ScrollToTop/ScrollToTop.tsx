import { useState, useEffect } from "react";
import { ArrowUp } from "../Icon";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 500); // Show the button after scrolling 100px
  };

  const scrollToTop = () => {
    if (window !== undefined)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-md bg-gray-500 px-2 py-2 text-white shadow ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
