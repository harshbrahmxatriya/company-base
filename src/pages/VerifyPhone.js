import React from "react";
import { IoCall } from "react-icons/io5";

const VerifyPhone = () => {
  return (
    <div className="VerifyPhone">
      <div className="VerifyPhone__overlay">
        <section>
          <h1>Verify Your Account</h1>
          <p>Enter your registration number and verify your account</p>
        </section>
        <section className="VerifyPhone__bottom-section">
          <div className="fieldset SignUp__last-fieldset">
            <IoCall size={24} />
            <input
              type="text"
              placeholder="Registration Number"
              className="field-input"
            />
          </div>
          <button className="submit-btn"> Verify Your Account </button>
          <button className="footer-btn">Resend</button>
        </section>
      </div>
    </div>
  );
};

export default VerifyPhone;
