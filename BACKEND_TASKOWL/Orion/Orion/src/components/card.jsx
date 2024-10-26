import { useMemo } from "react";
import PropTypes from "prop-types";

const Card = ({
  className = "",
  banking,
  stayUpdatedWithOurLatestF,
  byJohn,
  august252023,
  propWidth,
  propMinWidth,
  propMinWidth1,
  propDisplay,
  propMinWidth2,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const bankingStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const byJohnStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const august252023Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth2,
    };
  }, [propDisplay, propMinWidth2]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[347px] max-w-full text-left text-8xl text-gray-100 font-poppins mq450:min-w-full ${className}`}
    >
      <textarea
        className="[border:none] bg-gainsboro-400 h-[369px] w-auto [outline:none] self-stretch relative rounded-tl-lgi rounded-tr-lg rounded-b-none"
        rows={18}
        cols={23}
      />
      <div className="self-stretch rounded-t-none rounded-b-lg bg-white flex flex-col items-start justify-start pt-[21px] pb-[46px] pr-5 pl-[47px] box-border gap-[26.5px] max-w-full mq450:pl-5 mq450:box-border">
        <div className="w-[463px] h-[267px] relative rounded-t-none rounded-b-lg bg-white hidden max-w-full" />
        <button className="cursor-pointer [border:none] pt-[7px] px-[23px] pb-1.5 bg-mediumspringgreen-200 rounded-14xl flex flex-row items-start justify-start z-[1] hover:bg-mediumseagreen-300">
          <div
            className="h-[39px] w-[115px] relative rounded-14xl bg-mediumspringgreen-200 hidden"
            style={backgroundStyle}
          />
          <div
            className="relative text-mid font-poppins text-green text-left inline-block min-w-[69px] z-[1]"
            style={bankingStyle}
          >
            {banking}
          </div>
        </button>
        <h3 className="m-0 w-[368px] relative text-inherit font-semibold font-inherit inline-block max-w-full z-[1] mq450:text-3xl">
          {stayUpdatedWithOurLatestF}
        </h3>
        <div className="flex flex-row items-start justify-start gap-[29px] text-mid text-dimgray">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-5 h-5 relative z-[1]"
                alt=""
                src="/image-1.svg"
              />
            </div>
            <div
              className="relative inline-block min-w-[67px] z-[1]"
              style={byJohnStyle}
            >
              {byJohn}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-[18px] h-5 relative z-[1]"
                alt=""
                src="/date-icon-shape.svg"
              />
            </div>
            <div className="relative z-[1]" style={august252023Style}>
              {august252023}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  banking: PropTypes.string,
  stayUpdatedWithOurLatestF: PropTypes.string,
  byJohn: PropTypes.string,
  august252023: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Card;
