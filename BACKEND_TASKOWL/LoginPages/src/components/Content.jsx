import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <div className={`content ${className}`}>
      <div className="content-child" />
      <div className="primary-content">
        <div className="header-content">
          <b className="login-to-your1">Login to your Account</b>
          <div className="subheader">
            <div className="enter-to-continue">
              Enter to continue and explore within your grasp
            </div>
          </div>
        </div>
      </div>
      <form className="body-content">
        <div className="illustration-container">
          <img className="illustration-icon" loading="lazy" alt="" />
        </div>
        <div className="form-container">
          <div className="input-fields2">
            <div className="email-input-border-parent">
              <div className="email-input-border" />
              <img className="password-input-icon" alt="" src="/vector-1.svg" />
              <input
                className="enter-email-or"
                placeholder="Enter email or phone"
                type="text"
              ></input>
            </div>
            <div className="rectangle-container">
              <div className="rectangle-div" />
              <div className="password-icon-parent">
                <img className="password-icon1" alt="" src="/vector-2.svg" />
                <input
                  className="password3"
                  placeholder="Password"
                  type="password"
                ></input>
              </div>
              <div className="group-container">
                <img className="group-icon1" alt="" src="/group.svg" />
              </div>
            </div>
          </div>
          <div className="options">
            <div className="remember-me-container">
              <div className="remember-me-row">
                <div className="remember-me-checkbox">
                  <div className="checkbox-circle" />
                </div>
                <b className="remember-me">Remember Me</b>
              </div>
              <b className="forgot-password">Forgot password?</b>
            </div>
          </div>
        </div>
        <div className="login-button1">
          <div className="button-background" />
          <button className="button-content">
            <div className="button-content-child" />
            <div className="login-to-continue1">Login to Continue</div>
          </button>
        </div>
      </form>
      <div className="signup">
        <div className="dont-have-an-container1">
          <span>{`Don’t have an account ? `}</span>
          <b className="sign-up2">Sign up</b>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
