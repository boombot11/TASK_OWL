import "./Root2.css";

const Root2 = () => {
  return (
    <div className="root3">
      <div className="root-inner">
        <div className="frame-parent">
          <div className="frame-wrapper">
            <div className="frame-group">
              <div className="ellipse-wrapper">
                <div className="frame-child" />
              </div>
              <a className="epicek">EPICEK</a>
            </div>
          </div>
          <div className="login-container-parent">
            <div className="login-container">
              <div className="input-fields1">
                <div className="input-fields-child" />
                <div className="email-field">
                  <b className="login-to-your">Login to your account!</b>
                  <img
                    className="google-icon1"
                    loading="lazy"
                    alt="Google icon"
                    src="/google1@2x.png"
                  />
                  <div className="address-input">
                    <label htmlFor="email" className="email-addres">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="youraddresemailcom"
                      placeholder="Youraddress@email.com"
                    ></input>
                    <img
                      className="address-input-child"
                      alt=""
                      src="/vector-12.svg"
                    />
                  </div>
                </div>
                <div className="password-field1">
                  <label htmlFor="password" className="password1">Password</label>
                  <div className="password-input1">
                    <input
                      type="password"
                      id="password"
                      className="enter-your-password"
                      placeholder="Enter your password"
                    ></input>
                    <div className="eye-icon-container">
                      <img
                        className="eyes-icon"
                        loading="lazy"
                        alt="Show password"
                        src="/eyes1.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="password-field-item"
                    loading="lazy"
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
                <div className="login-button">
                  <div className="button-shape" />
                  <button className="button-label-container">
                    <div className="button-label-container-child" />
                    <div className="login-to-continue">Login to Continue</div>
                  </button>
                </div>
                <div className="dont-have-an-account-sign-u-wrapper">
                  <div className="dont-have-an-container">
                    <span>{`Don’t have an account? `}</span>
                    <b className="sign-up">Sign up</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="facebook">
              <div className="facebook-button" />
              <img
                className="vector-icon1"
                loading="lazy"
                alt="Facebook icon"
                src="/vector1.svg"
              />
              <div className="facebook-label-container">
                <div className="login-with-facebook">Login with Facebook</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-here2">
        <div className="img-here-inner" />
      </div>
    </div>
  );
};

export default Root2;
