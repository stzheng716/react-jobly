import React, { useState, useContext } from "react";
import userContext from "./userContext";
import Notice from "./Notice";
import { Alert, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

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

  const { username, firstName, lastName, email } = user.user;

  const [formData, setFormData] = useState({
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [error, setError] = useState(null);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  //TODO: Use/Add Alert component (make it customizable - type prop)
  /** Call parent function and show updated data */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleUpdate(formData);
    } catch (err) {
      setError(err);
      return;
    }

    setShowSuccessAlert(true);

    setError([]);
    setFormData((formData) => ({ ...formData }));
  }

  return (
    //add success message for user
    <div className="background">
      <Card style={{ width: '400px', padding: '20px', textAlign:"left" }}>
        <h2>Profile</h2>
        <form className="LogInForm" onSubmit={handleSubmit}>
          {error &&
            error.map((e, i) => <Notice key={i} message={e} type="danger" />)}

          <div className="mb-3">
            <label htmlFor="username">Username:</label>
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
            <label htmlFor="firstName">First name:</label>
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
            <label htmlFor="lastName">Last name:</label>
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
            <label htmlFor="email">Email:</label>
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
          <Alert show={showSuccessAlert} variant="success">
            This is a success Message
          </Alert>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </form>
      </Card>
    </div>
  );
}
export default ProfileForm;
