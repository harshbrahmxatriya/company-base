import React from "react";
import { FaKey } from "react-icons/fa6";
const VerifyEmail = () => {
  return (
    <div className="VerifyPhone">
      <div className="VerifyPhone__overlay">
        <h1>Verification</h1>
        <p>
          The account verification code has been sent to your registered email
          address<em>appblee@gmail.com</em>{" "}
        </p>
        <div className="fieldset SignUp__last-fieldset">
          <FaKey size={12} />
          <input
            type="text"
            placeholder="6 digit verification code"
            className="field-input"
          />
        </div>
        <button className="submit-btn"> Verify Your Account </button>
        <button className="footer-btn">Resend</button>
      </div>
    </div>
  );
};

export default VerifyEmail;
