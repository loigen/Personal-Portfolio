import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start py-[0.625rem] px-[0rem] box-border gap-[3.312rem] max-h-[125rem] text-center text-[1.5rem] text-black font-montserrat sm:max-h-[312.5rem] ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-[3rem] font-semibold font-[inherit] inline-block h-[3.625rem] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] md:text-center">
        Projects
      </h1>
      <div className="self-stretch flex flex-col items-center justify-center gap-[0.937rem] text-left">
        <div className="self-stretch h-[1.813rem] flex flex-row items-center justify-center">
          <div className="w-[8.875rem] flex flex-row flex-wrap items-center justify-center">
            <div className="flex-1 relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq350small:flex-1">
              Mobile App
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start text-[2.25rem]">
          <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[8.937rem]">
            <div className="flex flex-row flex-wrap items-start justify-start mq350small:flex-col">
              <div className="w-[20.5rem] flex flex-row flex-wrap items-center justify-start gap-[2.312rem] mq350small:flex-col">
                <img
                  className="w-[6.563rem] relative rounded-3xs h-[14rem] object-cover"
                  alt=""
                  src="/splashscreen-1@2x.png"
                />
                <div className="w-[11.625rem] flex flex-col items-start justify-start mq350small:items-center mq350small:justify-center">
                  <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
                    ML Wallet
                  </h1>
                  <div className="self-stretch relative text-[0.688rem] font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq350small:text-center">
                    ML Wallet is M Lhuillier's official mobile application that
                    allows users to send and receive money, buy load, pay bills
                    and more using a smartphone.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-start">
              <div className="w-[24rem] flex flex-row flex-wrap items-center justify-start gap-[1.625rem] mq350small:flex-col">
                <img
                  className="w-[6.625rem] relative rounded-6xs h-[15.875rem] object-cover"
                  alt=""
                  src="/image-5@2x.png"
                />
                <div className="w-[15.75rem] flex flex-col items-end justify-start gap-[0.062rem]">
                  <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    ML Insurance
                  </h1>
                  <div className="self-stretch relative text-[0.688rem] font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq350small:text-center">
                    ML Insurance is M Lhuillier's official mobile application
                    connected website that allows users to apply Insurance using
                    a smartphone.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[3.5rem]">
        <div className="self-stretch relative font-semibold whitespace-pre-wrap [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Web Based Project
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[12.625rem] text-left text-[2rem]">
          <FrameComponent
            image3="/image-3@2x.png"
            aMS="AMS"
            appointmentManagementThat="Appointment management that centralizes managing appointments, communication of the Admin user and the clients, reminders, etc."
          />
          <FrameComponent
            propHeight="unset"
            propWidth="16.244rem"
            image3="/image-4@2x.png"
            aMS="ML Brokerage"
            appointmentManagementThat="Mlhuillier’s official website for Real estate Business."
            propHeight1="unset"
            propDisplay="unset"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
