import FrameComponent1 from "../components/FrameComponent1";
import "./Frame.css";

const Frame = () => {
  return (
    <div className="root1">
      <div className="number-badge-wrapper">
        <FrameComponent1 />
      </div>
      <div className="background-shape-parent">
        <div className="background-shape" />
        <img
          className="bg-abstract-icon"
          loading="lazy"
          alt=""
          src="/bgabstract@2x.png"
        />
      </div>
    </div>
  );
};

export default Frame;
