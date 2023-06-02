import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Notice from "./Notice";


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
      return;
    }
    setFormData({
      username: "",
      password: "",
    });
    navigate("/");
  }

  return (
    <div className="background">
        <Card style={{ width: '400px', padding: '20px', textAlign:"left" }}>
        <h2>Log In</h2>
          <Form className="LogInForm" onSubmit={handleSubmit}>
            {error && error.map((e, i) => <Notice key={i} message={e} type="danger" />)}
            <Form.Group className="mb-3">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                className="form-control"
                placeholder="username"
                onChange={handleChange}
                value={formData.username}
                aria-label="username"
              />
            </Form.Group >

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
            </Form.Group >

            <Button variant="primary" type="submit">Log In</Button>
          </Form>
        </Card>
    </div>
  );
}

export default LogInForm;
