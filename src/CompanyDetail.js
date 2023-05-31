import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardListing from "./JobCardListing";

/** CompanyList component.
 *
 * State: companies: [company, company,....]
 *
 * RouteList -> CompanyList //TODO:complete it
 *
 * Makes API request for a company and renders a company card that includes all jobs for the company
 */

//TODO: try catch ~line 25
function CompanyDetail() {
  const { name } = useParams();

  const [company, setCompany] = useState({
    company: null,
    isLoading: true,
  });

  useEffect(function loadCompaniesFromAPI() {
    async function fetchCompany() {
      const response = await JoblyApi.getCompany(name);
      setCompany({
        company: response,
        isLoading: false,
      });
    }
    fetchCompany();
  }, []);

  if (company.isLoading) return <i>Loading...</i>;
  return <JobCardListing jobs={company.company.jobs} />;
}

export default CompanyDetail;
