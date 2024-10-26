import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start gap-[55px] max-w-full text-left text-xl text-gray-100 font-poppins mq825:gap-[27px] ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        alt=""
        src="/footer-background.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full">
        <div className="w-[1480px] flex flex-row items-start justify-start gap-[117px] max-w-full mq450:gap-[29px] mq825:gap-[58px] mq1425:flex-wrap">
          <div className="flex-1 flex flex-row items-start justify-between min-w-[629px] max-w-full gap-[20px] mq825:flex-wrap mq825:min-w-full">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <b className="relative font-semibold inline-block min-w-[57px] mq450:text-base">
                Menu
              </b>
              <div className="flex flex-col items-start justify-start gap-[9px] text-mid text-gray-700">
                <div className="relative font-medium inline-block min-w-[51px]">
                  Home
                </div>
                <div className="relative font-medium inline-block min-w-[77px]">
                  About Us
                </div>
                <div className="relative font-medium inline-block min-w-[107px]">
                  Our Services
                </div>
                <div className="relative font-medium inline-block min-w-[110px]">
                  Testimonials
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="relative font-semibold inline-block min-w-[74px] mq450:text-base">
                Explore
              </div>
              <div className="flex flex-col items-start justify-start gap-[9px] text-mid text-gray-700">
                <div className="relative font-medium inline-block min-w-[44px]">
                  FAQs
                </div>
                <div className="relative font-medium inline-block min-w-[110px]">
                  How It Works
                </div>
                <div className="relative font-medium inline-block min-w-[119px]">
                  Qualifications
                </div>
                <div className="relative font-medium inline-block min-w-[111px]">
                  Market Place
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <b className="relative font-semibold inline-block min-w-[114px] mq450:text-base">
                Quick Links
              </b>
              <div className="flex flex-col items-start justify-start gap-[9px] text-mid text-gray-700">
                <div className="relative font-medium inline-block min-w-[38px]">
                  Blog
                </div>
                <div className="relative font-medium inline-block min-w-[91px]">
                  Apply Now
                </div>
                <div className="relative font-medium">Terms of Service</div>
                <div className="relative font-medium inline-block min-w-[117px]">
                  Privacy Policy
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <b className="relative font-semibold mq450:text-base">
                Contact Information
              </b>
              <div className="flex flex-col items-start justify-start gap-[9px] text-mid text-gray-700">
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/phone-in-talk-fill0-wght400-grad0-opsz24-1.svg"
                  />
                  <div className="relative font-medium whitespace-nowrap">
                    +62 123 5678 9101
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mail-1.svg"
                  />
                  <div className="relative font-medium whitespace-nowrap">
                    orion@example.com
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/location-on-fill0-wght400-grad0-opsz24-1.svg"
                  />
                  <div className="relative font-medium">
                    21 East 15th Street, LA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[395px] flex flex-col items-start justify-start gap-[42px] min-w-[395px] max-w-full mq450:gap-[21px] mq825:min-w-full mq1425:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="relative font-semibold inline-block max-w-full mq450:text-base">
                Orion - Banking Service Landing Page
              </div>
              <p className="m-0 self-stretch relative text-base font-light text-gray-700">
                With Orion, managing your money has never been more convenient.
              </p>
            </div>
            <div className="w-[179.3px] flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-[39px] w-[39px] relative min-h-[39px]"
                alt=""
                src="/vector-3.svg"
              />
              <img
                className="h-[39px] w-[39px] relative min-h-[39px]"
                alt=""
                src="/vector-4.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                <img
                  className="w-[39.3px] h-8 relative"
                  alt=""
                  src="/twitter.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
