import React, { useState } from "react";

/** JobList component.
 *
 * State: jobs: [job, job,....]
 *
 * RouteList -> JobsList -> {JobCardListing, SearchForm}
 * 
 * Makes API request for jobs and renders JobCardListing 
 */

function JobList() {
    const [jobs, setJob] = useState([])
}

export default JobList;