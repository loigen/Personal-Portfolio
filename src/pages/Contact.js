import { useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
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

  const onVectorIconClick1 = useCallback(() => {
    window.location.href = "tel:+63 981 292 9161";
  }, []);

  return (
    <div className="w-full relative bg-white h-[100%] overflow-hidden flex flex-row flex-wrap items-start justify-start gap-x-[0rem] gap-y-[0.625rem] text-left text-[1rem] text-black font-montserrat">
      <Navbar frameDivWidth="100%" icon="/icon3@2x.png" />
      <div className="w-full flex flex-row flex-wrap items-start justify-start pt-[1.25rem] px-[0.625rem] pb-[0rem] box-border gap-x-[0rem] gap-y-[0.875rem] lg:w-full">
        <b className="w-[88.75rem] relative inline-block h-[1.25rem] shrink-0">
          Address:
        </b>
        <div className="w-full flex flex-row flex-wrap items-center justify-start gap-[1.25rem] text-[1.5rem] sm:flex-col">
          <div className="flex-1 h-[32.188rem] flex flex-col items-start justify-start gap-[4.125rem] sm:flex-[unset] sm:self-stretch">
            <b className="self-stretch relative">
              Elizabeth Dormitory Talamban
            </b>
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/-map-maker--aubergine@2x.png"
            />
          </div>
          <div className="flex-1 h-[32.188rem] flex flex-col items-start justify-start gap-[4rem] sm:flex-[unset] sm:self-stretch">
            <b className="self-stretch relative">{`Purok Kawayan, Lubo `}</b>
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/-map-maker--aubergine1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[8.325rem] flex flex-row flex-wrap items-center justify-center py-[1.25rem] px-[0rem] box-border gap-[1.375rem] lg:w-full sm:w-full sm:flex-col">
        <div className="flex flex-row items-start justify-start gap-[1.312rem] gap-[0.125rem] sm:items-center sm:justify-center">
          <img
            className="w-[2.875rem] relative h-[2.188rem] object-cover cursor-pointer sm:w-[1.875rem] sm:h-[1.25rem]"
            alt=""
            src="/vector1@2x.png"
            onClick={onVectorIconClick}
          />
          <b className="relative sm:text-[0.5rem]">
            https://www.facebook.com/loigenlariosa.arnado?_rdr
          </b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.312rem] sm:items-center sm:justify-center">
          <img
            className="w-[2.625rem] relative h-[2.188rem] overflow-hidden shrink-0 object-cover cursor-pointer sm:w-[1.875rem] sm:h-[1.25rem]"
            alt=""
            src="/deviconlinkedin@2x.png"
            onClick={onDeviconlinkedinClick}
          />
          <b className="relative sm:text-[0.5rem]">
            www.linkedin.com/in/loigen-lariosa-5bb588265
          </b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.312rem] sm:items-center sm:justify-center">
          <img
            className="w-[2.563rem] relative h-[2.188rem] overflow-hidden shrink-0 cursor-pointer sm:w-[1.875rem] sm:h-[1.25rem]"
            alt=""
            src="/logosgooglegmail.svg"
            onClick={onLogosgoogleGmailIconClick}
          />
          <a
            className="relative [text-decoration:underline] font-bold text-[inherit] sm:text-[0.5rem]"
            href="mailto:loigen.lariosa@student.passerellesnumeriques.org"
            target="_blank"
          >
            loigen.lariosa@student.passerellesnumeriques.org
          </a>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.312rem] sm:items-center sm:justify-center">
          <img
            className="w-[2.575rem] relative h-[2.263rem] object-contain cursor-pointer sm:w-[1.875rem] sm:h-[1.25rem]"
            alt=""
            src="/vector3.svg"
            onClick={onVectorIconClick1}
          />
          <b className="relative sm:text-[0.5rem]">0981 292 9161</b>
        </div>
      </div>
      <Footer
        propGap="1.125rem"
        propHeight="unset"
        propPadding="unset"
        propAlignSelf="unset"
        propWidth="100%"
        vector="/vector3@2x.png"
        deviconlinkedin="/deviconlinkedin1@2x.png"
        icon="/icon4@2x.png"
      />
    </div>
  );
};

export default Contact;
