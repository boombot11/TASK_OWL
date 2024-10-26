import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const FrameComponent3 = ({ className = "" }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Define a function to check screen width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100); // Adjust as per your requirement for a small screen
    };

    // Initial check on mount
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[101px] box-border max-w-full text-left text-xl text-gray-100 font-poppins lg:pb-[43px] lg:box-border mq825:pb-7 mq825:box-border mq1425:pb-[66px] mq1425:box-border ${className}`}
    >
      <div className="w-[1482px] flex flex-col items-end justify-start gap-[59.5px] max-w-full mq825:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.5px] box-border max-w-full text-green">
          <div className="w-[1431px] flex flex-row items-start justify-start gap-[130px] max-w-full lg:flex-wrap mq450:gap-[16px] mq825:gap-[32px] mq1425:gap-[65px]">
            <div className="flex-1 flex flex-row items-start justify-start min-w-[448px] max-w-full z-[3] mq825:min-w-full">
            {!isSmallScreen? <div className="h-[762px] flex-1 relative max-w-full">
                <img src="/bgabstract@2x.png" className="absolute h-full top-[0px] bottom-[0px] left-[15px]  w-[674px] z-[1]" />:
              </div>:<><div className="px-12 py-12"></div></>}
            </div>
            <div className="w-[612px] flex flex-col items-start justify-start pt-[141px] px-0 pb-0 box-border min-w-[612px] max-w-full lg:flex-1 mq825:pt-[92px] mq825:box-border mq825:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full mq825:gap-[24px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <div className="relative font-medium z-[3] mq450:text-base">
                    Get Started Free
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-39xl text-white">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                      <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full z-[3] mq450:text-16xl mq825:text-27xl">
                        <span>{`Master Your`}</span>
                        <span className="text-green"> Tasks,</span>
                        <span>{` of `}</span>
                        <span className="text-green">Maximize Your</span>
                        <span> Productivity</span>
                      </h1>
                    </div>
                    <p className="m-0 self-stretch relative text-mid font-light text-gray-200 whitespace-pre-wrap z-[3]">
                      Experience the power of efficient task management with our intuitive online and mobile platforms. Stay organized and on top of your projects, allowing you to manage tasks anytime, anywhere.
                    </p>
                  </div>
                </div>
                <div className="w-[429px] flex flex-row items-end justify-between gap-[20px] max-w-full text-13xl text-white font-rubik mq450:flex-wrap">
                <button className="cursor-pointer [border:none] py-[17px] px-[26px] bg-green rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-mediumseagreen-100">
                    <div className="h-[57px] w-[140px] relative rounded-3xs bg-green hidden" />
                    <b className="relative text-mini font-semibold font-poppins text-white text-left inline-block min-w-[87px] z-[1]">
                      Get Started
                    </b>
                  </button>
                  <div className="flex flex-col items-start justify-start">
                    <div className="h-[37px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                      <div className="mb-[-1px] relative font-medium inline-block min-w-[67px] shrink-0 [debug_commit:bf4bc93] z-[3] mq450:text-lgi mq825:text-7xl"></div>
                    </div>
                    <div className="relative text-mini font-poppins text-gray-200 inline-block min-w-[91px] shrink-0 [debug_commit:bf4bc93] z-[4]">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[10.1px] box-border max-w-full text-center text-36xl">
          <div className="w-[662px] flex flex-col items-start justify-start gap-[29.9px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <button className="cursor-pointer [border:none] py-2 px-5 bg-mediumspringgreen-100 rounded-4xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumseagreen-200">
                <div className="h-[46px] w-[163px] relative rounded-4xs bg-mediumspringgreen-100 hidden" />
                <div className="relative text-xl font-medium font-poppins text-green text-left inline-block min-w-[123px] z-[1]">
                  Who We Are
                </div>
              </button>
            </div>
            <h1 className="m-0 self-stretch h-[73px] relative text-inherit font-bold font-inherit inline-block mq450:text-14xl mq825:text-25xl">
              Our Main Service
            </h1>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-[300px] max-w-full text-7xl mq450:gap-[20px] mq825:gap-[40px] mq1425:flex-wrap">
          <div className="h-[122.5px] w-[432px] relative max-w-full">
            <div className="absolute top-[0px] left-[0px] rounded-11xl w-full h-full flex items-center justify-center">
              {!isSmallScreen?<><img
                className="w-full h-full object-contain absolute left-[0px] top-[2px] [transform:scale(3.09)]"
                loading="lazy"
                alt=""
                src="/background.svg"
              /></>:<><img
              className="w-full h-full object-contain absolute left-[0px] top-[2px] [transform:scale(3.09)]"
              loading="lazy"
              alt=""
              src="#"
            /></>}
              
            </div>
            <b className="absolute top-[34px] left-[90px] font-semibold z-[1] mq450:text-2xl">
              Notion + AI Chatbot
            </b>
          </div>
          <div className="w-[445px] flex flex-col items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full">
            <div className="self-stretch shadow-[0px_2px_128px_10px_rgba(0,_0,_0,_0.02)] rounded-11xl bg-whitesmoke box-border flex flex-row items-start justify-center pt-[30px] px-5 pb-[29px] whitespace-nowrap max-w-full border-[3px] border-solid border-white">
              <div className="h-[106px] w-[432px] relative shadow-[0px_2px_128px_10px_rgba(0,_0,_0,_0.02)] rounded-11xl bg-whitesmoke box-border hidden max-w-full border-[3px] border-solid border-white" />
              <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1] ">
                Traditional Task Management
              </h3>
            </div>
          </div>
          
        </div>
        <div className="w-[1469px] flex flex-row items-start justify-center gap-[61px] max-w-full text-19xl mq450:gap-[15px] mq825:gap-[30px] mq1425:flex-wrap">
          <div className="flex-1 shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-31xl bg-white flex flex-col items-start justify-start pt-[67px] px-[76px] pb-[60px] box-border gap-[50px] min-w-[500px] max-w-full mq825:gap-[25px] mq825:pt-11 mq825:px-[38px] mq825:pb-[39px] mq825:box-border mq825:min-w-full">
            <div className="w-[769px] h-[673px] relative shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-31xl bg-white hidden max-w-full" />
            <div className="w-[603px] flex flex-col items-start justify-start gap-[35px] max-w-full mq825:gap-[17px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
                <h1 className="m-0 w-[550px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-4xl mq825:text-11xl">
                  Start Managing Your Task Hassle-Free
                </h1>
                <p className="m-0 self-stretch relative text-mid leading-[23px] text-darkslategray-200 z-[1]">
                Take Control of Your Day: Experience a new level of productivity with our routine management app. Integrate the power of Notion with the convenience of an AI WhatsApp bot, and unlock your full potential!
                </p>
              </div>
              <div className="flex flex-col items-start justify-start gap-[14px] z-[1] text-mid text-gray-300">
                <div className="flex flex-row items-start justify-start gap-[17px]">
                  <div className="h-[42px] w-[42px] relative rounded-2xl bg-mediumspringgreen-200">
                    <div className="absolute top-[0px] left-[0px] rounded-2xl bg-mediumspringgreen-200 w-full h-full hidden" />
                    <img
                      className="absolute h-[38.57%] w-[52.14%] top-[30.71%] right-[22.86%] bottom-[30.71%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/done.svg"
                    />
                  </div>
                  <div className="relative leading-[42px]">
                  Centralized Planning
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[17px]">
                  <div className="h-[42px] w-[42px] relative rounded-2xl bg-mediumspringgreen-200">
                    <div className="absolute top-[0px] left-[0px] rounded-2xl bg-mediumspringgreen-200 w-full h-full hidden" />
                    <img
                      className="absolute h-[38.57%] w-[52.14%] top-[30.71%] right-[22.86%] bottom-[30.71%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/done.svg"
                    />
                  </div>
                  <div className="relative leading-[42px]">
                  Stay updated with instant notifications for task changes and deadlines through our WhatsApp bot
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[17px] mq450:flex-wrap">
                  <div className="h-[42px] w-[42px] relative rounded-2xl bg-mediumspringgreen-200">
                    <div className="absolute top-[0px] left-[0px] rounded-2xl bg-mediumspringgreen-200 w-full h-full hidden" />
                    <img
                      className="absolute h-[38.57%] w-[52.14%] top-[30.71%] right-[22.86%] bottom-[30.71%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/done.svg"
                    />
                  </div>
                  <div className="relative leading-[42px]">
                  Intuitive Design Enjoy a clean and user-friendly interface that makes routine management effortless.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
