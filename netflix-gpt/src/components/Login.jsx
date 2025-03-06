const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={""}
            placeholder="Enter email or mobile number"
          />
          <input
            type="password"
            value={""}
            placeholder="Enter email or mobile number"
          />
        </div>
        <div>
            <button>SignIn</button>
            <label>OR</label>
            <button>Use a sign-in code</button>
        </div>
      </form>
    </div>
  );
};

export default Login