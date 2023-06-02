import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Notice from "./Notice";
import { Card } from "react-bootstrap";

/** SignUpForm component.
 *
 * Props:
 *  - handleSignUp: fn()
 *  - error: [error, error,...]
 *
 * State:
 * - formData: {username, password, firstName, lastName, email}
 *
 * RoutesList -> SignUpForm
 *
 */

function SignUpForm({ handleSignUp }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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
      await handleSignUp(formData);
    } catch (error) {
      setError(error);
      return
    }
    setFormData({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    });
    navigate("/");
  }

  return (
    <div className="background">
      <Card style={{ width: '400px', padding: '20px',textAlign:"left"  }}>
      <h2>Sign Up</h2>
        <Form className="LogInForm" onSubmit={handleSubmit}>
          {error && error.map((e, i) => <Notice key={i} message={e} type="danger" />)}

          <Form.Group className="mb-3">
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
          </Form.Group>

          <Form.Group className="mb-3">
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
          </Form.Group>

          <Form.Group className="mb-3">
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
          </Form.Group>

          <Form.Group className="mb-3">
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
          </Form.Group>

          <Form.Group className="mb-3">
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
          </Form.Group>

          <Button variant="primary" type="submit">Sign Up</Button>
        </Form>
      </Card>
    </div>
  );
}

export default SignUpForm;
