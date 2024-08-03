import { useMemo } from "react";
import PropTypes from "prop-types";

const Logo = ({
  className = "",
  icon,
  propTextShadow,
  loigenMargin,
  loigenFontWeight,
  loigenTextDecoration,
}) => {
  const loigenStyle = useMemo(() => {
    return {
      textShadow: propTextShadow,
      margin: loigenMargin,
      fontWeight: loigenFontWeight,
      textDecoration: loigenTextDecoration,
    };
  }, [propTextShadow, loigenMargin, loigenFontWeight, loigenTextDecoration]);

  return (
    <div
      className={`flex flex-row items-start justify-start text-center text-[3rem] text-black font-jomhuria ${className}`}
    >
      <div className="w-[7.375rem] flex flex-row items-center justify-start gap-[0.5rem]">
        <img
          className="w-[2.188rem] relative h-[1.5rem] object-cover"
          alt=""
          src={icon}
        />
        <h1
          className="m-0 w-[4.938rem] relative text-inherit font-normal font-[inherit] flex items-end justify-center h-[3rem] shrink-0"
          style={loigenStyle}
        >
          Loigen
        </h1>
      </div>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  propTextShadow: PropTypes.any,
  loigenMargin: PropTypes.any,
  loigenFontWeight: PropTypes.any,
  loigenTextDecoration: PropTypes.any,
};

export default Logo;
