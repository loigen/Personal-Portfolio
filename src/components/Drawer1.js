import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Drawer1 = ({ className = "", onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className={`w-[150px] h-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-tint-t2 overflow-hidden flex flex-col items-center justify-start pt-10 px-5 pb-4 box-border gap-2.5 [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] text-center text-xs text-black font-montserrat ${className}`}
      data-animate-on-scroll
    >
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch relative font-bold text-[inherit] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
        to="/landingpage"
        onClick={onClose}
      >
        Home
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch relative font-bold text-[inherit] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
        to="/about"
      >
        About
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch relative font-bold text-[inherit] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
        to="/about"
      >
        Contacts
      </Link>
    </div>
  );
};

Drawer1.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Drawer1;
