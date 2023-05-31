import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

/** JobCardListing component.
 *
 * Props:
 * - jobs [job1, job2...]
 *
 * {CompanyDetail, JobList} -> JobCardListing -> JobCard
 *
 * Renders job card for an array of jobs
 */
function JobCardListing({ jobs }) {
  return (
    <div>
      {jobs.map((j) => (
        <JobCard key={j.id} job={j} />
      ))}
    </div>
  );
}

export default JobCardListing;
