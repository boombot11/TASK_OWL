import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  emailAddres,
  propLeft,
  propMinWidth,
}) => {
  const emailAddresStyle = useMemo(() => {
    return {
      left: propLeft,
      minWidth: propMinWidth,
    };
  }, [propLeft, propMinWidth]);

  return (
    <div className={`register-form-fields-inner ${className}`}>
      <div className="rectangle-parent">
        <div className="frame-item" />
        <b className="email-addres1" style={emailAddresStyle}>
          {emailAddres}
        </b>
        <b className="ladushing691gmailcom"> <input></input></b>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  emailAddres: PropTypes.string,
  ladushing691gmailcom: PropTypes.string,

  propLeft: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent;
