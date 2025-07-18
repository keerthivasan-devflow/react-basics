import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "../assets/css/register-style.css"

const RegisterForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    reset,
  } = useForm({
    defaultValues: async () => {
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/users/6"
      // );
      // const data = await response.json();
      return {
        username: "user",
        email: "example@gmail.com",
        social: {
          facebook: "",
          youtube: "",
        },
        contact: [],
      };
    },
    mode: "onBlur"
  });

  const {
    errors,
    disabled,
    isDirty,
    isValid,
    touchedFields,
    dirtyFields,
    isSubmitSuccessful,
  } = formState;

  const submitHandler = (data) => {
    console.log("User details: ", data);
  };

  const getValuesHandler = () => {
    console.log("Get all the field values: ", getValues());
    console.log("Get only username field value: ", getValues("username"));
    console.log(
      "Get array of user details: ",
      getValues(["username", "email"])
    );
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const watchUsername = watch("username");
  const watchUserDetails = watch();

  const OnError = (errors) => {
    console.log("Errors: ", errors);
  };

  return (
    <>
      <p>Username: {watchUsername}</p>
      <p>User details: {JSON.stringify(watchUserDetails)}</p>
      <form
        className="form-container"
        onSubmit={handleSubmit(submitHandler, OnError)}
      >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Please enter username",
              maxLength: {
                value: 8,
                message: "You've entered more than 8 characters",
              },
            })}
          />
          <p className="error-msg">{errors.username?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter an email id",
              },
            })}
          />
          <p className="error-msg">{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              required: "Please link your facebook account",
            })}
          />
          <p className="error-msg">{errors.social?.facebook?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="youtube">Youtube</label>
          <input
            type="text"
            id="youtube"
            {...register("social.youtube", {
              required: "Please link your youtube broadcast channel",
            })}
          />
          <p className="error-msg">{errors.social?.youtube?.message}</p>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="submit-btn"
            // disabled={!isDirty || !isValid} // Commented out to execute OnError function
          >
            Submit
          </button>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="submit-btn"
            onClick={getValuesHandler}
          >
            Get Values
          </button>
        </div>
        <div className="form-group">
          <button type="button" className="submit-btn" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default RegisterForm;
