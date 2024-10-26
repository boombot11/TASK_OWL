import PropTypes from "prop-types";

const TestimonialContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[695px] flex flex-col items-start justify-start gap-[46px] max-w-full text-left text-xl text-green font-poppins mq825:gap-[23px] ${className}`}
    >
      <div className="w-[544px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[28px] max-w-full">
        <h3 className="m-0 self-stretch relative text-31xl leading-[47px] font-bold font-inherit text-black z-[3] mq450:text-11xl mq450:leading-[28px] mq825:text-21xl mq825:leading-[38px]">
        Introducing Your Personal Task Assistant
        </h3>
      </div>
      <blockquote className="m-0 self-stretch relative text-3xl leading-[47px] font-medium text-black z-[3] mq450:text-lg mq450:leading-[38px]">
      Transform your daily life with our innovative routine management app that seamlessly integrates with Notion and features an AI-powered WhatsApp bot. Designed for productivity enthusiasts, busy professionals, and anyone seeking better time management, our app simplifies your planning and enhances your efficiency.
      </blockquote>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[7px] text-5xl text-black"> 
      </div>

    </div>
  );
};

TestimonialContainer.propTypes = {
  className: PropTypes.string,
};

export default TestimonialContainer;
