import React from "react";
import { FaAddressCard, FaKey } from "react-icons/fa6";
import { FaUser, FaHatCowboy } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const SignUp = () => {
  return (
    <div className="SignUp">
      <div className="SignUp__overlay">
        <div className="hero-image">
          <img src="/company-image.jpg" alt="login graphics" />
        </div>
        <div className="SignUp__form-side">
          <div className="cancel-btn">
            <MdCancel
              style={{
                fill: "blue",
              }}
              size={20}
            />
          </div>
          <div className="form-content">
            <h1>SignUp</h1>
            <div className="fieldset">
              <FaAddressCard size={20} />
              <input
                type="text"
                placeholder="User Id"
                className="field-input"
              />
            </div>
            <div className="fieldset">
              <FaUser size={20} />
              <input
                type="text"
                placeholder="First Name"
                className="field-input"
              />
            </div>
            <div className="fieldset">
              <FaUser size={20} />
              <input
                type="text"
                placeholder="Last Name"
                className="field-input"
              />
            </div>
            <div className="fieldset">
              <IoMail size={20} />
              <input
                type="text"
                placeholder="Company registered Email"
                className="field-input"
              />
            </div>
            <div className="fieldset">
              <FaHatCowboy size={20} />
              <select className="field-input">
                <option value="RCM">RCM</option>
                <option value="Manager">Manager</option>
                <option value="CTO">CTO</option>
              </select>
            </div>

            <div className="fieldset">
              <FaKey size={20} />
              <input
                type="text"
                placeholder="Password"
                className="field-input"
              />
            </div>

            <div className="fieldset SignUp__last-fieldset">
              <FaKey size={20} />
              <input
                type="text"
                placeholder="Password"
                className="field-input"
              />
            </div>
            <button className="submit-btn"> Login </button>
            <p className="form-footer">
              Already have an account?
              <button className="footer-btn">Login here</button>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
