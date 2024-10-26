import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center pt-0 pb-[126px] pr-5 pl-[63px] box-border max-w-full text-left text-xl text-green font-poppins mq825:pb-[82px] mq825:box-border mq1425:pl-[31px] mq1425:box-border ${className}`}
    >
      <div className="w-[1347px] flex flex-col items-center justify-center gap-[80px] max-w-full lg:flex-wrap mq450:gap-[20px] mq825:gap-[40px]">
        <div className="w-[608px] flex flex-col items-center justify-center pt-3.5 px-0 pb-0 box-border min-w-[608px] max-w-full lg:flex-1 mq825:min-w-full">
          <div className="self-stretch flex flex-col items-center justify-center gap-[32px] max-w-full mq825:gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[20px] max-w-full">
              <div className="bg-mediumspringgreen-100 flex flex-row items-center justify-center py-2 px-[23px] z-[1]">
                <div className="h-[46px] w-[164px] relative bg-mediumspringgreen-100 hidden" />
                <div className="relative font-medium inline-block min-w-[117px] z-[1] mq450:text-base">
                  Percentage
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[6px] max-w-full text-19xl text-gray-100">
                <h1 className="m-0 w-[586px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-4xl mq825:text-11xl text-center">
                Focus on what matters most and get more done in less time.
                </h1>
                <p className="m-0 self-stretch relative text-mid leading-[34px] text-darkslategray-300 z-[1] text-center">
                  We're proud to introduce our suite of user-friendly services
                  designed to simplify and enhance your banking experience.
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[5px] gap-[5px] text-lg text-gray-100">
              <div className="w-[206px] relative font-semibold inline-block z-[1] text-center">
                Task Management Made Easy
              </div>
              <p className="m-0 self-stretch relative text-mid leading-[34px] text-darkslategray-300 z-[1] text-center">
                where task management is simplified for your convenience. With our
                user-friendly services, managing your tasks has never been so seamless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
