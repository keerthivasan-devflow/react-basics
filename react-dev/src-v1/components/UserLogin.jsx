import { Link } from "react-router";

const Usersubmit = () => {
  return (
    <div className="submit-container">
      <form className="submit-form">
        <h2 className="form-title">Login To Order Delicious Food!</h2>

        <div className="input-group">
          <input
            type="text"
            id="username"
            className="input-field"
            placeholder="Enter your username"
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Enter your password"
          />
        </div>

        <button type="button" className="submit-button">
          <Link to={"/"} className="submit-link">
            Submit
          </Link>
        </button>
      </form>

      <Link to="reset-password" className="forgot-password">
        Forgot your password?
      </Link>
      <p className="signup-prompt">
        Don't have an account?{" "}
        <Link to="/sign-up" className="signup-link">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Usersubmit;
