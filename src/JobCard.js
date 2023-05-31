import React from "react";
import convertAndFormat from "./convertAndFormat";

/** JobCard component.
 *
 * Props:
 * - job {companyHandle: ..., title: ...}
 *
 * JobCardListing -> JobCard
 *
 * Shows job card
 */
//TODO: use card component in bootstrap
function JobCard({ job }) {
  const {companyHandle, title, salary, equity} = job;
  const formattedSalary = convertAndFormat(salary)
  console.log("companyhande", companyHandle, "equity", equity, typeof equity)
  return (
    <div>
      <p>{companyHandle}</p>
      <p>{title}</p>
      {salary && <p>Salary: ${formattedSalary}</p>}
      <p>equity: {equity === "0" || equity === null ? <p>No equity</p> : <p>{equity}</p>}</p>
    </div>
  );
}

export default JobCard;
