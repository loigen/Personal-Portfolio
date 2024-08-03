import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  propHeight,
  propWidth,
  image3,
  aMS,
  appointmentManagementThat,
  propHeight1,
  propDisplay,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const appointmentManagementThatStyle = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay,
    };
  }, [propHeight1, propDisplay]);

  return (
    <div
      className={`w-[15.313rem] flex flex-col items-start justify-start gap-[0.812rem] text-left text-[2rem] text-black font-montserrat ${className}`}
      style={frameDiv1Style}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[9.188rem] shrink-0 object-cover"
        alt=""
        src={image3}
      />
      <div className="self-stretch flex flex-col items-start justify-start">
        <h2 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          {aMS}
        </h2>
        <div className="self-stretch relative h-[3.25rem] text-[0.688rem]">
          <div
            className="absolute top-[0rem] left-[0rem] font-semibold inline-block w-[15.313rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            style={appointmentManagementThatStyle}
          >
            {appointmentManagementThat}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  image3: PropTypes.string,
  aMS: PropTypes.string,
  appointmentManagementThat: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight1: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FrameComponent;
