import PropTypes from "prop-types";

const Experience = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-center py-[0rem] px-[1.875rem] box-border gap-[3.187rem] max-h-[62.5rem] text-left text-[2rem] text-black font-montserrat ${className}`}
    >
      <img
        className="w-[14.338rem] relative h-[13.938rem] object-cover"
        alt=""
        src="/image-6@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-end gap-[1.375rem]">
        <div className="flex flex-row items-end justify-start">
          <div className="w-[10.806rem] flex flex-row items-end justify-between">
            <img
              className="w-[4.994rem] relative h-[3.394rem]"
              alt=""
              src="/vector.svg"
            />
            <b className="relative">CCT</b>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[1.875rem] text-[2.25rem] sm:items-center sm:justify-center">
          <b className="relative">{`University of San Carlos - `}</b>
          <b className="relative">Talamban Campus</b>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  className: PropTypes.string,
};

export default Experience;
