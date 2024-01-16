import { FaAddressCard, FaKey } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

function Login() {
  return (
    <div className="Login">
      <div className="Login__overlay">
        <div className="hero-image">
          <img src="/company-image.jpg" alt="login graphics" />
        </div>
        <div className="Login__form-side">
          <div className="cancel-btn">
            <MdCancel
              style={{
                fill: "blue",
              }}
              size={20}
            />
          </div>
          <div className="form-content">
            <h1>Login</h1>
            <div className="fieldset">
              <FaAddressCard size={20} />
              <input
                type="text"
                placeholder="User Id"
                className="field-input"
              />
            </div>

            <div className="fieldset Login__last-fieldset">
              <FaKey size={20} />
              <input
                type="text"
                placeholder="Password"
                className="field-input"
              />
            </div>
            <button className="submit-btn"> Login </button>
            <p className="form-footer">
              Don't have an account?
              <button className="signUp-btn footer-btn">
                Sign up here
              </button>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
