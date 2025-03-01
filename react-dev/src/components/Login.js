const Login = () => {
  return (
    <div className="m-4 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/12">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Hungry for More? Log In and Order Now!
        </h2>

        <form action="#" method="POST">
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter username or email"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg"
            >
              Login
            </button>
          </div>

          <div className="flex justify-between text-sm">
            <a href="#" className="text-indigo-600 hover:text-indigo-700">
              Forgot Password?
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-700">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
