import { useState } from "react";
import PropTypes from "prop-types";

const QuestionItem = ({ className = "", question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-left text-3xl text-black font-poppins ${className}`}
    >
      <div
        onClick={toggleAnswer}
        className="flex-1 shadow-[0px_4px_65px_rgba(0,_0,_0,_0.02)] rounded-21xl bg-whitesmoke box-border flex flex-row items-center justify-between py-[47px] px-[42px] gap-[65px] max-w-full border-[1px] border-solid border-gainsboro-300 cursor-pointer mq450:gap-[16px] mq825:flex-wrap mq825:gap-[32px] mq825:px-[21px] mq825:box-border"
      >
        <div className="relative font-semibold z-[1] mq450:text-lg">
          {question}
        </div>
        <img
          className={`h-10 w-10 relative object-contain z-[1] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          alt="Toggle"
          src="/expand-1@2x.png"
        />
      </div>
      {isOpen && (
        <div className="mt-4 px-4 text-gray-600 text-base mq450:text-sm">
          {answer}
        </div>
      )}
    </div>
  );
};

QuestionItem.propTypes = {
  className: PropTypes.string,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default QuestionItem;
