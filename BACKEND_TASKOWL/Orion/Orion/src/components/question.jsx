import { useMemo } from "react";
import PropTypes from "prop-types";

const Question = ({
  className = "",
  whatShouldIDoIfIForgetMyP,
  propAlignSelf,
  propFlex,
}) => {
  const question1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={`self-stretch shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-21xl bg-whitesmoke box-border flex flex-row items-start justify-start py-[52px] pr-[39px] pl-[42px] gap-[65px] max-w-full text-left text-3xl text-black font-poppins border-[1px] border-solid border-gainsboro-300 mq450:gap-[16px] mq825:flex-wrap mq825:gap-[32px] mq825:pl-[21px] mq825:box-border ${className}`}
      style={question1Style}
    >
      <div className="h-[174px] w-[715px] relative shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-21xl bg-whitesmoke box-border hidden max-w-full border-[1px] border-solid border-gainsboro-300" />
      <div className="flex-1 relative font-semibold inline-block min-w-[343px] max-w-full z-[1] mq450:text-lg mq825:min-w-full">
        {whatShouldIDoIfIForgetMyP}
      </div>
      <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
        <img
          className="w-10 h-10 relative object-contain z-[1]"
          alt=""
          src="/expand-1@2x.png"
        />
      </div>
    </div>
  );
};

Question.propTypes = {
  className: PropTypes.string,
  whatShouldIDoIfIForgetMyP: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Question;
