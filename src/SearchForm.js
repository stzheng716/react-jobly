import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

/** SearchForm component.
 *
 * State:
 * - searchTerm: "searchTerm"
 *
 * { CompanyList, JobList } -> SearchForm
 *
 * Accepts user's search term and handles change/submit
 */
function SearchForm({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setSearchTerm(input.value);
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <input
          id="searchTerm"
          name="searchTerm"
          placeholder="Enter search term..."
          onChange={handleChange}
          value={searchTerm}
          aria-label="searchTerm"
        />
        <Button variant="primary" type="submit" className="m-1">
          Search
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
