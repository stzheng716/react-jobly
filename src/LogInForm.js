import React, { useState } from "react";

/** LogInForm component.
 * 
 * Props: 
 *  - handleLogIn: fn()
 *  - error: [error, error,...] 
 *
 * State:
 * - formData: {username, password}
 *
 * RoutesList -> LogInForm
 *
 */
//TODO: make error a state
function LogInForm({ handleLogIn, error }) {
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

  //TODO: make try catch with handleLogIn
    //await handleLogIn
    //make handleSubmit async
  //TODO: Use navigate to redirect to companies  
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
      {error && error.map((e, i) => <p key={i}>{e}</p>)}
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
