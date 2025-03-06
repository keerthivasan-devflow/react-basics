export const validate = (email, password) => {
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isStrongPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (email.length === 0 && password.length === 0)
    return "Please enter the credentials!";
  else if (!isValidEmail) return "Email is invalid!";
  else if (!isStrongPassword) return "Password does not meet the complexity!";
  return null;
};
