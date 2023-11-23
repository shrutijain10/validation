import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  let navigate = useNavigate();

  const handleSubmit = () => {
    let hasError = false;

    if (state.name.length === 0) {
      setError((prevError) => ({
        ...prevError,
        name: "Name cannot be empty.",
      }));
      hasError = true;
    }
    if (state.email.length === 0) {
      setError((prevError) => ({
        ...prevError,
        email: "Email cannot be empty",
      }));
      hasError = true;
    }
    if (state.password.length === 0) {
      setError((prevError) => ({
        ...prevError,
        password: "Password cannot be empty",
      }));
      hasError = true;
    }
    if (state.number.length === 0) {
      setError((prevError) => ({
        ...prevError,
        number: "Number cannot be empty",
      }));
      hasError = true;
    }
    if (error.name.length !== 0) {
      hasError = true;
    }
    if (error.email.length !== 0) {
      hasError = true;
    }
    if (error.password.length !== 0) {
      hasError = true;
    }
    if (error.number.length !== 0) {
      hasError = true;
    }

    if (!hasError) {
      navigate("/dashboard");
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [e.target.name]: value });
    Validation(name, value);
  };

  function Validation(fieldName, value) {
    if (fieldName === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "This is required" });
      } else if (value.length <= 10) {
        setError({ ...error, name: "Max length should be 10." });
      } else {
        setError({ ...error, name: "" });
      }
    }

    if (fieldName === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "This is required" });
      } else if (
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
      ) {
        setError({ ...error, email: "Invalid email format" });
      } else {
        setError({ ...error, email: "" });
      }
    }

    if (fieldName === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "This is required" });
      } else if (value.length <= 11) {
        setError({ ...error, password: "Max length should be 12." });
      } else if (!/[a-z]/.test(value)) {
        setError({
          ...error,
          password: "Password must contain lowercase letters",
        });
      } else if (!/[A-Z]/.test(value)) {
        setError({
          ...error,
          password: "Password must contain both uppercase",
        });
      } else if (!/\d/.test(value)) {
        setError({
          ...error,
          password: "Password must contain at least one number.",
        });
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        setError({
          ...error,
          password: "Password must contain at least a number",
        });
      } else {
        setError({ ...error, password: "" });
      }
    }
    if (fieldName === "number") {
      if (value.length === 0) {
        setError({ ...error, number: "This is required" });
      } else if (value.length <= 10) {
        setError({ ...error, number: "Max length should be 10" });
      } else {
        setError({ ...error, number: "" });
      }
    }
  }

  const handleKeyDown = (e) => {
    const { name } = e.target;
    if (name === "number" && e.key.toLowerCase() === "e") {
      e.preventDefault();
    }
  };
  console.log(state, "state");
  return (
    <div className="App">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="name"
          className="input"
          value={state.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <span>{error.name}</span>
        <input
          type="email"
          name="email"
          className="input"
          value={state.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <span>{error.email}</span>
        <input
          type="password"
          name="password"
          className="input"
          value={state.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <span>{error.password}</span>
        <input
          type="number"
          name="number"
          className="input"
          value={state.number}
          placeholder="Phone no"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <span>{error.number}</span>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
