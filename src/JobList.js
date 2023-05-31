import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobCardListing from "./JobCardListing";

/** JobList component.
 *
 * State: jobs: [job, job,....]
 *
 * RouteList -> JobsList -> {JobCardListing, SearchForm}
 *
 * Makes API request for jobs and renders JobCardListing
 */

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function loadJobsFromAPI() {
    handleSearch()
  }, []);

  /** Search job with the search term and update the jobs list*/
  async function handleSearch(searchTerm) {
    const jobs = await JoblyApi.getJobs(searchTerm);
    setJobs(jobs);
  }

  if (!jobs) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      {(jobs.length === 0) ? <h2>No jobs found</h2> :
        <JobCardListing jobs={jobs} />
      }
    </div>
  );
}

export default JobList;
