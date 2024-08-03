import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Drawer1 from "./Drawer1";
import PortalDrawer from "./PortalDrawer";
import PropTypes from "prop-types";

const Navbar = ({ className = "", frameDivWidth, icon }) => {
  const navbarStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <header
        className={`self-stretch flex flex-col items-start justify-start py-[0rem] px-[1.25rem] ${className}`}
        id="header"
        style={navbarStyle}
      >
        <div className="self-stretch flex flex-row items-center justify-between">
          <Logo
            icon={icon}
            propTextShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            loigenMargin="0"
            loigenFontWeight="400"
            loigenTextDecoration="unset"
          />
          <div className="flex flex-row items-center justify-center gap-[1.25rem]">
            <nav className="m-0 flex flex-row items-center justify-start gap-[4.062rem] text-left text-[0.75rem] text-black font-inter md:hidden sm:hidden">
              <Link
                className="cursor-pointer [text-decoration:none] relative font-bold text-[inherit] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] hover:text-mediumspringgreen hover:cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1] active:font-light active:font-inter active:text-xs active:text-mediumseagreen active:[-webkit-text-stroke:1px_#000] active:cursor-pointer focus:[-webkit-text-stroke:1px_#000] focus:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] focus:cursor-pointer"
                to="/"
              >
                HOME
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative font-bold text-[inherit] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] hover:text-limegreen active:text-forestgreen-100 active:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] active:opacity-[1]"
                to="/about"
              >
                ABOUT
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] relative font-bold text-[inherit] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] hover:text-limegreen active:text-limegreen"
                to="/contact"
              >
                CONTACT
              </Link>
            </nav>
            <div
              className="w-[1.063rem] bg-white hidden flex-col items-start justify-start gap-[0.25rem] cursor-pointer md:flex sm:flex"
              onClick={openDrawer}
            >
              <div className="self-stretch relative border-black border-t-[1px] border-solid box-border h-[0.063rem]" />
              <div className="self-stretch relative border-black border-t-[1px] border-solid box-border h-[0.063rem]" />
              <div className="self-stretch relative border-black border-t-[1px] border-solid box-border h-[0.063rem]" />
            </div>
          </div>
        </div>
      </header>
      {isDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawer}
        >
          <Drawer1 onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  frameDivWidth: PropTypes.any,
};

export default Navbar;
