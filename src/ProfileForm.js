import React, { useState, useContext } from "react";
import userContext from "./userContext";

/** ProfileForm component.
 *
 * Props:
 *  - handleUpdate: fn()
 *  - error: [error, error,...]
 *
 * State:
 * - formData: {username, firstName, lastName, email}
 *
 * RoutesList -> ProfileForm
 *
 */
function ProfileForm({ handleUpdate }) {
  const user = useContext(userContext);

  const { username, firstName, lastName, email } = user;

  const [formData, setFormData] = useState({
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
  });
  const [error, setError] = useState(null);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and show updated data */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleUpdate(formData);
    } catch (err) {
      setError(err);
      return;
    }
    setError([]);
    setFormData((formData) => ({ ...formData }));
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
          value={formData.username}
          aria-label="username"
          disabled
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

      <button>Save Changes</button>
    </form>
  );
}
export default ProfileForm;
