import "./App.css";
import { useForm } from "react-hook-form";
import Success from "./Success";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="App">
      <h1 className="title">Form</h1>
      {!isSubmitSuccessful ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              {...register("fname", { required: true })}
            />
            {errors.fname && (
              <p className="error-msg">Required, enter your name.</p>
            )}
          </div>

          <div className="input-box">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              {...register("lname", { required: true })}
            />
            {errors.lname && (
              <p className="error-msg">Required, enter your last name.</p>
            )}
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="error-msg">Required, enter your email address.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="error-msg">Email is not valid.</p>
            )}
          </div>

          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="tel"
              {...register("number", {
                minLength: 6,
                maxLength: 10,
              })}
            />
            {errors.number && errors.number.type === "minLength" && (
              <p className="error-msg">Entered number is less than 6 digits.</p>
            )}
            {errors.number && errors.number.type === "maxLength" && (
              <p className="error-msg">
                Entered number is more than 10 digits.
              </p>
            )}
          </div>

          <input type="submit" />
        </form>
      ) : (
        <div className="success">
          <Success />
        </div>
      )}
    </div>
  );
}

export default App;
