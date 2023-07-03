import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardListing from "./JobCardListing";

/** CompanyList component.
 *
 * State: companies: [company, company,....]
 *
 * RouteList -> CompanyList -> JobCardListing
 *
 * Makes API request for a company and renders a company card that includes all jobs for the company
 */

function CompanyDetail() {
  const { name } = useParams();
  const [error, setError] = useState(null);

  const [company, setCompany] = useState(null);

  useEffect(function loadCompaniesFromAPI() {
    async function fetchCompany() {
      try {
        const response = await JoblyApi.getCompany(name);
        setCompany(response);
      } catch (err) {
        setError(err);
      }
    }
    fetchCompany();
  }, []);

  //make a loading component
  if (!company && !error) return <i>Loading...</i>;

  return (
    <div>
      {!error ? (
        <JobCardListing jobs={company.jobs} />
      ) : (
        error.map((e, i) => <p key={i}>{e}</p>)
      )}
    </div>
  );
}

export default CompanyDetail;
