import React, { useState } from "react";

function SignUpForm({ handleSignUp }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSignUp(formData);
  }

  return (
    <form className="LogInForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username">username</label>
        <input
          id="username"
          name="username"
          className="form-control"
          placeholder="username"
          onChange={handleChange}
          value={formData.username}
          aria-label="username"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          className="form-control"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
          aria-label="password"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          className="form-control"
          placeholder="Jon"
          onChange={handleChange}
          value={formData.firstName}
          aria-label="firstName"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          type="email"
          name="lastName"
          className="form-control"
          placeholder="Snow"
          onChange={handleChange}
          value={formData.lastName}
          aria-label="lastName"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          className="form-control"
          placeholder="jonsnow123@gmail.com"
          onChange={handleChange}
          value={formData.email}
          aria-label="email"
        />
      </div>

      <button>Sign Up</button>
    </form>
  );
}

export default SignUpForm;
