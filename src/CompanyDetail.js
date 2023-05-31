import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

/** CompanyList component.
 *
 * State: companies: [company, company,....]
 *
 * RouteList -> CompanyList
 * 
 * Makes API request for a company and renders a company card
 */

function CompanyDetail() {
    const { companyName } = useParams();

    const [company, setCompany] = useState({
        company: null,
        isLoading: true
    })

    useEffect(function loadCompaniesFromAPI() {
        async function fetchCompany() {
          const response = await JoblyApi.getCompany(companyName);
          setCompany({
            company: response,
            isLoading: false
          });
        }
        fetchCompany();
      }, []);

  if(company.isLoading) return <i>Loading...</i>;

  return (
    // <JobCardListing />
  )

}

export default CompanyDetail;