import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./RegisterFormFields.css";

const RegisterFormFields = ({ className = "" }) => {
  return (
    <div className={`register-form-fields ${className}`}>
      <div className="register-info">
        <b className="get-started-with">Get started with easily register</b>
        <div className="free-register-and">
          Free register and you can enjoy it
        </div>
      </div>
      <FrameComponent
        emailAddres="Email Addres"
        ladushing691gmailcom="Ladushing691@gmail.com"
      />
      <FrameComponent
        emailAddres="Full name"
        ladushing691gmailcom="Ladushing GTG"
        propLeft="67.9px"
        propMinWidth="73px"
      />
      <div className="register-form-fields-child">
        <div className="rectangle-group">
          <div className="frame-inner" />
          <b className="password2">Password</b>
          <div className="div" ><input type="password"></input></div>
        </div>
      </div>
      <div className="social-login1">
        <div className="social-login-options">
          <button className="sign-up-button">
            <div className="sign-up-button-child" />
            <div className="sign-up-button-item" />
            <b className="sign-up1">Sign up</b>
          </button>
          <div className="social-login-icons">
            <div className="separator">
              <b className="or">or</b>
            </div>
            <div className="ellipse-parent">
              <div className="ellipse-div" />
              <img
                className="image-4-icon"
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            <div className="ellipse-group">
              <div className="frame-child1" />
              <img
                className="vector-icon2"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterFormFields.propTypes = {
  className: PropTypes.string,
};

export default RegisterFormFields;
