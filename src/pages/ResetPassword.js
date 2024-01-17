import React from "react";
import { FaKey } from "react-icons/fa6";

const ResetPassword = () => {
  return (
    <div className="ResetPassword">
      <div className="ResetPassword__overlay">
        <div className="ResetPassword__form-side">
          <section>
            <h1>Reset your password</h1>
            <p>Enter a valid password</p>
          </section>
          <section className="ResetPassword__bottom-section">
            <div className="fieldset">
              <FaKey size={12} />
              <input
                type="text"
                placeholder="New Password"
                className="field-input"
              />
            </div>
            <div className="fieldset Login__last-fieldset">
              <FaKey size={12} />
              <input
                type="text"
                placeholder="Confirm Password"
                className="field-input"
              />
            </div>
            <button className="submit-btn"> Verify Your Account </button>
            <button className="footer-btn">Resend</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
