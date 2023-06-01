import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
function LogInForm({ handleLogIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleLogIn(formData);
    } catch (error) {
      setError(error);
    }
    setFormData({
      username: "",
      password: "",
    });
    navigate("/");
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
