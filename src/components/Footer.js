import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Drawer1 from "./Drawer1";
import PortalDrawer from "./PortalDrawer";
import PropTypes from "prop-types";

const Footer = ({
  className = "",
  propGap,
  propHeight,
  propPadding,
  propAlignSelf,
  propWidth,
  vector,
  deviconlinkedin,
  icon,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
      height: propHeight,
      padding: propPadding,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propGap, propHeight, propPadding, propAlignSelf, propWidth]);

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const onVectorIconClick = useCallback(() => {
    window.open("https://www.facebook.com/loigenlariosa.arnado?_rdr");
  }, []);

  const onDeviconlinkedinClick = useCallback(() => {
    window.open("www.linkedin.com/in/loigen-lariosa-5bb588265");
  }, []);

  const onLogosgoogleGmailIconClick = useCallback(() => {
    window.location.href =
      "mailto:loigen.lariosa@student.passerellesnumeriques.org";
  }, []);

  return (
    <>
      <div
        className={`self-stretch bg-tint-t4 flex flex-col items-start justify-start gap-[1.125rem] ${className}`}
        style={frameDivStyle}
      >
        <div className="self-stretch h-[7.688rem] flex flex-row flex-wrap items-center justify-between py-[1.25rem] px-[3.125rem] box-border">
          <Logo
            icon={icon}
            propTextShadow="unset"
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
          <div className="flex flex-row flex-wrap items-center justify-center gap-[2.625rem]">
            <img
              className="w-[2.875rem] relative h-[2.188rem] object-cover cursor-pointer"
              alt=""
              src={vector}
              onClick={onVectorIconClick}
            />
            <img
              className="w-[2.625rem] relative h-[2.188rem] overflow-hidden shrink-0 object-cover cursor-pointer"
              alt=""
              src={deviconlinkedin}
              onClick={onDeviconlinkedinClick}
            />
            <img
              className="w-[2.563rem] relative h-[2.188rem] overflow-hidden shrink-0 cursor-pointer"
              alt=""
              src="/logosgooglegmail.svg"
              onClick={onLogosgoogleGmailIconClick}
            />
          </div>
        </div>
        <footer className="self-stretch flex flex-row flex-wrap items-center justify-between py-[0rem] px-[3.125rem] text-center text-[3rem] text-black font-jomhuria">
          <div className="flex flex-row items-center justify-center">
            <h1 className="m-0 w-[1.063rem] relative text-inherit font-normal font-[inherit] flex items-end justify-center h-[3.5rem] shrink-0">
              ©
            </h1>
            <div className="relative text-[1.5rem]">{` 2024 Loigen. `}</div>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.5rem]">
            <div className="relative">All rights reserved.</div>
          </div>
        </footer>
      </div>
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

Footer.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  deviconlinkedin: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Footer;
