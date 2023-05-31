import React from "react";

/** JobCard component.
 *
 * Props:
 * - job {companyHandle: ..., title: ...}
 *
 * JobCardListing -> JobCard
 *
 * Shows job card
 */
//TODO: add logic for equity
//TODO: format number & add logic (salary)
//TODO: destructure
//TODO: use card component in bootstrap
function JobCard({ job }) {
  return (
    <div>
      <p>{job.companyHandle}</p>
      <p>{job.title}</p>
      <p>{job.salary}</p>
      <p>{job.equity}</p>
    </div>
  );
}

export default JobCard;
