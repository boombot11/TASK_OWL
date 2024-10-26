import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import TestimonialContainer from "../components/testimonial-container";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const OrionBankingServiceLandin = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-11 px-0 pb-[89px] box-border gap-[112px] leading-[normal] tracking-[normal] lg:gap-[56px] mq825:gap-[28px]">
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="w-[1133px] flex flex-row items-start justify-center pt-0 px-5 pb-[182px] box-border max-w-full mq825:pb-[118px] mq825:box-border">
        <TestimonialContainer />
      </div>
      <section className="w-full h-[984px] absolute !m-[0] top-[0px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#0b091b,_#0f0d1f)]" />
      <section className="w-full h-[1127px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <div className="absolute top-[-94px] left-[-205px] w-[2247px] h-[1221px] z-[2] flex items-center justify-center">
          <img
            className="w-full h-full z-[2] object-contain absolute left-[0px] top-[150px] [transform:scale(1.246)]"
            alt=""
            src="/mesh-1.svg"
          />
        </div>
        <img
          className="absolute top-[721px] left-[1225px] w-[134px] h-[58px] z-[3]"
          loading="lazy"
          alt=""
          src="/people.svg"
        />
      </section>
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default OrionBankingServiceLandin;
