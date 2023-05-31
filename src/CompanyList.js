import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

/** CompanyList component.
 *
 * State: companies: [company, company,....]
 *
 * RouteList -> CompanyList -> {CompanyCard, SearchForm}
 *
 * Makes API request for companies and render company cards
 */

function CompanyList() {
  const [companies, setCompanies] = useState({
    companies: [],
    isLoading: true
  });

  useEffect(function loadCompaniesFromAPI() {
    async function fetchCompanies() {
      const response = await JoblyApi.getCompanies();
      setCompanies({
        companies: response,
        isLoading: false
      });
    }
    fetchCompanies();
  }, []);

  async function handleSearch(searchTerm) {
    const response = await JoblyApi.searchCompanies(searchTerm);
    setCompanies({
        companies: response,
        isLoading: false
      });
  }

  if(companies.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />

      {companies.companies.map((c) => (
        <CompanyCard key={c.handle} company={c} />
      ))}
    </div>
  );
}

export default CompanyList;
