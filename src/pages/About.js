import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[1.25rem] text-left text-[1.5rem] text-black font-montserrat">
      <Navbar frameDivWidth="unset" icon="/icon@2x.png" />
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[29.625rem] shrink-0 object-cover"
        alt=""
        src="/frame-286-1-1@2x.png"
      />
      <div className="self-stretch flex flex-col items-center justify-center py-[0rem] px-[1.25rem] box-border gap-[1.25rem] max-h-[62.5rem] md:hidden">
        <b className="self-stretch relative md:hidden">
          Hello, let me introduce myself first;
        </b>
        <div className="w-[82.813rem] relative h-[18.438rem] max-h-[62.5rem] text-[1.25rem] font-montserrat-alternates lg:h-full">
          <div className="absolute top-[0rem] left-[0rem] inline-block w-[82.813rem] h-[18.438rem]">
            <p className="m-0 whitespace-pre-wrap">
              {" "}
              Hello! I'm Loigen A. Lariosa, a 20-year-old full-stack developer
              with a passion for creating innovative solutions. I graduated from
              a 2.5-year Computer Communication Technology (CCT) program, where
              I honed my skills in software development.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              {" "}
              During my internship at MLhuillier Technology Group, I had the
              opportunity to work on a diverse range of projects. This
              experience allowed me to delve into web development using various
              frameworks and libraries and to contribute to the development of
              the ML Wallet mobile app. Additionally, I explored AI technologies
              under the guidance of our CTO, which expanded my technical
              horizons.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              {" "}
              I'm grateful for the recognition I received from my colleagues and
              am always eager to bring my skills and enthusiasm to new
              challenges. If you're looking for a dedicated developer with a
              strong background in both web and mobile technologies, I’d love to
              connect and see how we can work together to achieve your goals.
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[2.375rem] text-center text-[3rem]">
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
      <Experience />
      <Footer
        vector="/vector1@2x.png"
        deviconlinkedin="/deviconlinkedin@2x.png"
        icon="/icon1@2x.png"
      />
    </div>
  );
};

export default About;
