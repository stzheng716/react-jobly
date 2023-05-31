import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";

/** JobList component.
 *
 * State: jobs: [job, job,....]
 *
 * RouteList -> JobsList -> {JobCardListing, SearchForm}
 * 
 * Makes API request for jobs and renders JobCardListing 
 */

function JobList() {
    const [jobs, setJobs] = useState({
        jobs: [],
        isLoading: true
    })

    useEffect(function loadJobsFromAPI() {
        async function fetchJobs() {
            const response = await JoblyApi.getJob();
            setJobs({
                jobs: response,
                isLoading: false
            });
        }
        fetchJobs();
    }, []);

    async function handleSearch(searchTerm) {
        const response = await JoblyApi.searchJobs(searchTerm);
        setJobs({
            jobs: response,
            isLoading: false
        });
    }

    if (jobs.isLoading) return <i>Loading...</i>;

    return (
        <div>
            <SearchForm handleSearch={handleSearch} />
            <JobCardListing jobs={jobs.jobs} />
        </div>
    );
}

export default JobList;