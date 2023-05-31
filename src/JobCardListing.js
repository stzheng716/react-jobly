import React, { useEffect, useState } from "react";

function JobCardListing({ jobs }){
    
    return (
        <div>
            {jobs.map(j => <JobCard job={j}/>)}
        </div>
    )
}