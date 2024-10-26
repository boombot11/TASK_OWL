import PropTypes from "prop-types";
import "./FrameComponent1.css";
import { useState } from "react";

const FrameComponent1 = ({ className = "" }) => {
  // State for email, password, and error messages
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Error message state

  // Handle login button click
  const handleLogin = async () => {
    try {
      // Ensure the email field is not empty
      if (!email) {
        alert("Email is required!");
        return;
      }

      // Ensure the password field is not empty
      if (!pass) {
        alert("Password is required!");
        return;
      }

      // Fetch customer data from backend (modify endpoint to suit your needs)
      const response = await fetch(`http://localhost:3000/customers/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
console.log(response)
      // Check if the response is OK (status 200-299)
      if (response.ok) {
        const customerData = await response.json(); // Parse response data
      

         window.location.replace(`http://localhost:5174/?name=${customerData.name}`);
      } else {
        // If customer not found, display an error
        setErrorMessage('Customer not found!');
      }
    } catch (error) {
      // Handle any network or fetch-related errors
      setErrorMessage("Error during login: " + error.message);
    }
  };

  return (
    <div className={`number-badge ${className}`}>
      <div className="number-badge1">
        <b className="log-in">Log in</b>
        <div className="exploration-message">
          <div className="enter-to-continue1">
            enter to continue and explore within your grasp.
          </div>
        </div>
      </div>
      
      {/* Email Address Input */}
      <div className="email-addres-parent">
        <div className="email-addres2">User name</div>
        <input
          className="youraddresemailcom1"
          placeholder="Youraddres@email.com"
          value={email} // Bind input to state
          onChange={(e) => setEmail(e.target.value)} // Update email state
          type="text"
        />
        <img
          className="email-separator-icon"
          alt=""
          src="/email-separator.svg"
        />
      </div>

      {/* Password Input */}
      <div className="email-addres-parent">
        <div className="email-addres2">Password</div>
        <input
          className="youraddresemailcom1"
          placeholder="**************"
          value={pass} // Bind input to state
          onChange={(e) => setPass(e.target.value)} // Update password state
          type="password"
        />
        <img
          className="email-separator-icon"
          alt=""
          src="/email-separator.svg"
        />
      </div>

      {/* Error Message */}
      {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}

      {/* Login Button */}
      <div className="action-container-wrapper">
        <div className="action-container">
          <div className="login-signup">
            <div className="login-button-container">
              <div className="login-button-background" />
              <div className="login-button-background1" />
              <div 
                onClick={handleLogin} // Handle login on click
                className="login-to-continue2">
                Login to Continue
              </div>
            </div>
          </div>

          {/* Sign Up Option */}
          <div className="dont-have-an-container2">
            <span>{`Don’t have an account ? `}</span>
            <b className="sign-up3">Sign up</b>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
