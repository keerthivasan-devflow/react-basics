import { Link } from "react-router";
import netflix from "../../src/assets/netflix.webp";
import { useRef, useState } from "react";
import { validate } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const signHandler = () => {
    setIsSignIn((isSignIn) => !isSignIn);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div className="relative">
      <img
        src={netflix}
        alt={"netflix hero background image"}
        className="w-full bg-cover bg-center"
      />
      <form className="absolute bg-gradient-to-tr from-black top-[15%] left-[20%] px-6 py-10 w-96 max-h-fit text-white flex flex-col space-y-4">
        <h1 className="text-3xl font-extrabold">
          {isSignIn ? "Sign In" : "Sign Up for more!"}
        </h1>
        <div className="flex flex-col space-y-4">
          {!isSignIn && (
            <>
              <input
                type="text"
                placeholder="Enter username"
                className="border border-gray-50 p-3 rounded"
              />
            </>
          )}
          <input
            type="text"
            placeholder="Enter email or mobile number"
            className="border border-gray-50 p-3 rounded"
            ref={email}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="border border-gray-50 p-3 rounded"
            ref={password}
          />
          <p className="text-red-500 text-sm font-semibold">{errorMessage}</p>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            type="button"
            className="p-2 bg-red-600 hover:bg-red-500 font-semibold rounded cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Register Now"}
          </button>

          {isSignIn ? (
            <>
              <button type="button">OR</button>
              <button
                type="button"
                className="p-2 rounded bg-gradient-to-tr hover:bg-gradient-to-tr hover:from-black from-white font-semibold cursor-pointer"
              >
                Use a sign-in code
              </button>
              <span className="text-center underline cursor-pointer">
                Forgot Password?
              </span>
              <span className="text-center underline cursor-pointer">
                Are you new to netflixGPT?
                <Link className="text-red-500 mx-2" onClick={signHandler}>
                  Sign-Up
                </Link>
              </span>
            </>
          ) : (
            <span className="text-center underline cursor-pointer">
              Already registered?
              <Link className="text-red-500 mx-2" onClick={signHandler}>
                Sign-In
              </Link>
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
