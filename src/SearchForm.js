import React, { useState } from "react";

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
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          id="searchTerm"
          name="searchTerm"
          className="form-control"
          placeholder="Enter search term..."
          onChange={handleChange}
          value={searchTerm}
          aria-label="searchTerm"
        />
      </div>
    </form>
  );
}

export default SearchForm;
