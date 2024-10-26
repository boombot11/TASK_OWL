import PropTypes from "prop-types";

const verify = () => {
  const newUrl = "http://localhost:5175/";
  console.log('Navigating to:', newUrl);
  window.location.replace(newUrl)
};
const FrameComponent4 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[9px] pr-[21px] pl-5 box-border max-w-full text-left text-13xl text-white font-poppins ${className}`}
    >
      <div className="w-[1481px] flex flex-row items-start justify-between gap-[20px] max-w-full lg:w-[806px]">
        <div className="w-[140px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
          <a className="[text-decoration:none] self-stretch relative font-bold text-[inherit] whitespace-nowrap z-[3]">
            Task Owl
          </a>
        </div>
        <nav className="m-0 w-[675px] flex flex-col items-start justify-start pt-[15.5px] px-0 pb-0 box-border max-w-full  lg:flex">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-mid text-white font-poppins">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[51px] z-[3]">
              Home
            </a>
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[52px] z-[3]">
              About
            </a>
  
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[70px] z-[3]">
              Contact
            </a>
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[38px] z-[3]">
              Blog
            </a>
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[101px] z-[3]">
              Testimonial
            </a>
          </nav>
        </nav>
        <button onClick={verify} className="cursor-pointer [border:none] py-[17px] pr-[23px] pl-6 bg-green rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-mediumseagreen-100">
          <div  className="h-[57px] w-[140px] z-[1000] relative rounded-3xs bg-green hidden" />
          <a className="[text-decoration:none] relative text-mini font-semibold font-poppins text-white text-left inline-block min-w-[93px] z-[1]">
            Login
          </a>
        </button>
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
