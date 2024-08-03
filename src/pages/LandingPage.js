import { useEffect } from "react";
import Navbar from "../components/Navbar";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";

const LandingPage = () => {
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
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[1.875rem]">
      <Navbar icon="/icon2@2x.png" />
      <section
        className="self-stretch h-[31.813rem] flex flex-row items-center justify-center text-left text-[11.688rem] text-forestgreen-200 font-jomhuria md:flex-row md:items-center md:justify-center sm:items-center sm:justify-start"
        id="Home"
      >
        <div className="w-[2.444rem] h-[7.125rem] flex flex-row items-center justify-center p-[0.625rem] box-border relative">
          <div className="w-[1.25rem] !m-[0] absolute top-[0.625rem] left-[0.625rem] h-[5.875rem] z-[0] mq350small:items-center mq350small:justify-start" />
        </div>
        <div
          className="w-[34.919rem] flex flex-row items-center justify-center p-[0.625rem] box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="relative [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] md:text-center sm:font-jomhuria sm:text-[1.25rem] sm:text-left sm:flex-1 sm:[transform:rotate(0deg)] mq350small:text-[1.875rem]">
            <p className="m-0">{`Welcome! `}</p>
            <p className="m-0 text-[4.313rem] text-black">
              Hello, I’m a Software Developer.
            </p>
          </div>
        </div>
        <img
          className="h-[31.813rem] w-[36.019rem] relative object-cover [&.animate]:animate-[1s_ease_0s_1_normal_both_slit-in-vertical] opacity-[1] md:w-6/12 sm:w-[70%] sm:h-3/6"
          alt=""
          src="/group-237-1@2x.png"
          data-animate-on-scroll
        />
      </section>
      <section className="self-stretch h-[27.313rem] flex flex-col items-start justify-start md:w-full md:h-full sm:h-1/5 gap-[0.125rem] sm:items-center sm:justify-start sm:pt-[0rem] sm:box-border">
        <div className="self-stretch h-[27.938rem] flex flex-col items-start justify-start p-[0.625rem] box-border md:w-full sm:w-full sm:items-center sm:justify-center">
          <div className="self-stretch h-[26.688rem] flex flex-col items-start justify-start md:w-full md:flex-1 md:flex-col md:items-center md:justify-between gap-[0rem] sm:w-full">
            <section
              className="self-stretch h-[26.688rem] flex flex-col items-center justify-center gap-[0.625rem] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-center text-[3rem] text-black font-montserrat md:flex md:w-full sm:w-full sm:h-3/6"
              id="About"
              data-animate-on-scroll
            >
              <div className="self-stretch h-[5.875rem] flex flex-row flex-wrap items-center justify-center p-[0.625rem] box-border md:w-full md:flex-row md:flex-wrap md:items-center md:justify-center md:pr-[0.625rem] md:box-border sm:w-full sm:h-[10%] sm:items-end sm:justify-center sm:pb-[0.125rem] sm:box-border">
                <h1 className="m-0 relative text-inherit font-semibold font-[inherit] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] md:text-[1.875rem] sm:text-[1.25rem]">
                  Loigen Arnado Lariosa
                </h1>
              </div>
              <div className="self-stretch h-[5.125rem] flex flex-row items-center justify-center p-[0.312rem] box-border text-[1.5rem] md:w-full sm:w-full sm:items-center sm:justify-center sm:pt-[0.125rem] sm:box-border">
                <div className="w-[72.375rem] relative font-semibold inline-block shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] md:text-[1.25rem] md:text-center md:w-full sm:text-[0.75rem] sm:text-center sm:w-full">
                  SOFTWARE DEVELOPER
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-center p-[0.625rem] text-justify text-[1.375rem] md:w-3/5 md:pb-[1.25rem] md:box-border sm:w-[70%] sm:h-[6.25rem] sm:flex-row sm:flex-wrap gap-[0.625rem] sm:items-center sm:justify-center sm:pl-[0rem] sm:pt-[0rem] sm:box-border">
                <div className="w-[63.438rem] relative font-semibold inline-block shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] md:text-[1.125rem] md:w-full sm:text-[0.625rem] sm:text-center sm:flex-1 sm:self-stretch sm:h-auto">
                  I’m a versatile Software Developer with expertise in
                  JavaScript libraries like React, React Native, and Next.js, as
                  well as backend technologies such as Node.js, Express.js, and
                  PHP. I specialize in mobile development for iOS and Android
                  and excel in UI/UX design using Tailwind, Sass, and Styled
                  Components. Proficient in AI tools management and Figma, I
                  bring a well-rounded skill set to every project. A graduate of
                  the University of San Carlos, I also have experience as a
                  Partner Relations Officer, effectively managing projects and
                  stakeholder relationships.
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start max-h-[50rem] text-center text-[3rem] text-black font-montserrat lg:w-full md:w-full">
        <div
          className="self-stretch flex flex-col items-center justify-center p-[0.625rem] gap-[1.25rem] md:w-full md:flex-col gap-[0.625rem] md:items-center md:justify-between md:pt-[0rem] md:box-border sm:w-full sm:h-auto gap-[0.125rem] sm:items-center sm:justify-start sm:pt-[0rem] sm:box-border"
          id="skills"
        >
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] inline-block h-[3.625rem] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] md:text-center">
            SKILLS
          </h1>
          <div className="self-stretch h-[8.813rem] flex flex-row flex-wrap items-start justify-center gap-x-[2.625rem] gap-y-[3.062rem] text-left text-[1.125rem] sm:self-stretch sm:w-auto sm:flex-1">
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              React
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              React Native
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Next.js
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Node.js
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Express.js
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Tailwind CSS
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Sass
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              CSS
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              PHP
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              MongoDB
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              SQL
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              iOS Development
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Android Development
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Java
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Python
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              UI/UX Design
            </div>
            <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Figma
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <Footer
        propGap="0.625rem"
        propHeight="12.438rem"
        propPadding="0.625rem"
        propAlignSelf="stretch"
        propWidth="unset"
        vector="/vector2@2x.png"
        deviconlinkedin="/deviconlinkedin@2x.png"
        icon="/icon1@2x.png"
      />
    </div>
  );
};

export default LandingPage;
