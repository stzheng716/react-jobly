import React, { useState } from "react";

function LogInForm({ handleLogIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    handleLogIn(formData);
    setFormData({
      username: "",
      password: "",
    });
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

      <button>Log In</button>
    </form>
  );
}

export default LogInForm;
