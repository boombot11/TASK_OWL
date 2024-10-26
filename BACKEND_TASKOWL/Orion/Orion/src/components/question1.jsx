import { useMemo } from "react";
import PropTypes from "prop-types";

const Question1 = ({
  className = "",
  isThereAMonthlyFeeForOpen,
  yesThereAreCertainTypesOf,
  propGap,
  propHeight,
  propWidth,
}) => {
  const questionStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const background1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const yesThereAreStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch rounded-33xl bg-white flex flex-col items-start justify-start pt-12 pb-[38px] pr-10 pl-[54px] box-border gap-[26px] max-w-full text-left text-3xl text-black font-poppins mq825:pl-[27px] mq825:box-border ${className}`}
      style={questionStyle}
    >
      <div
        className="w-[715px] h-[238px] relative rounded-33xl bg-white hidden max-w-full"
        style={background1Style}
      />
      <div className="self-stretch flex flex-row items-start justify-start gap-[54px] max-w-full mq825:flex-wrap mq825:gap-[27px]">
        <div className="flex-1 relative font-semibold inline-block min-w-[343px] max-w-full z-[1] mq450:text-lg mq825:min-w-full">
          {isThereAMonthlyFeeForOpen}
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img
            className="w-10 h-10 relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/expand@2x.png"
          />
        </div>
      </div>
      <p
        className="m-0 w-[589px] relative text-mid leading-[30px] text-gray-600 inline-block max-w-full z-[1]"
        style={yesThereAreStyle}
      >
        {yesThereAreCertainTypesOf}
      </p>
    </div>
  );
};

Question1.propTypes = {
  className: PropTypes.string,
  isThereAMonthlyFeeForOpen: PropTypes.string,
  yesThereAreCertainTypesOf: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Question1;
