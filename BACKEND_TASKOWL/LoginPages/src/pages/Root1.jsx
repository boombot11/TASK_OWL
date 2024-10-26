import "./Root1.css";

const Root1 = () => {
  return (
    <div className="root2">
      <div className="img-here1">
        <div className="img-here-item" />
      </div>
      <div className="sign-in-form-wrapper">
        <div className="sign-in-form">
          <div className="sign-in-credentials">
            <div className="do-you-have-container">
              <span>{`Do you have account? `}</span>
              <b className="sign-in">Sign in</b>
            </div>
          </div>
          <div className="account-creation">
            <form className="account-instructions">
              <div className="account-fields">
                <b className="create-account">Create Account</b>
                <div className="registration-guidance">
                  <p className="follow-the-instructions-container">
                    <span className="follow-the-instructions">{`Follow the instructions to make it easier to register and you will be `}</span>
                    <span className="able-to-explore">
                      able to explore inside.
                    </span>
                  </p>
                  <div className="input-fields">
                    <div className="username-field">
                      <div className="username-field-child" />
                      <div className="username-input">
                        <img
                          className="vector-icon"
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                      <b className="username"><input placeholder="Username"></input></b>
                    </div>
                    <div className="username-field1">
                      <div className="username-field-item" />
                      <div className="group-wrapper">
                        <img className="group-icon" alt="" src="/group1.svg" />
                      </div>
                      <input
                        className="email"
                        placeholder="Email"
                        type="text"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="password-field">
                <div className="password-field-child" />
                <img className="password-icon" alt="" src="/vector-11.svg" />
                <div className="password-input">
                  <input  type="password" placeholder= "Password" className="password"></input>
                </div>
              </div>
              <button className="create-account-action">
                <div className="create-account-action-child" />
                <b className="create-account1">Create Account</b>
              </button>
            </form>
            <div className="social-login">
              <img
                className="google-icon"
                loading="lazy"
                alt=""
                src="/google@2x.png"
              />
              <img
                className="facebook-icon"
                loading="lazy"
                alt=""
                src="/facebook@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root1;
