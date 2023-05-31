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
    isLoading: true,
  });

  useEffect(function loadCompaniesFromAPI() {
    handleSearch();
  }, []);

  /** Search company with the search term and update the companies list*/
  async function handleSearch(searchTerm) {
    const response = await JoblyApi.getCompanies(searchTerm);
    setCompanies({
      companies: response,
      isLoading: false,
    });
  }
  //TODO: another option is to remove isLoading
  if (companies.isLoading) return <i>Loading...</i>;
  //TODO: add a logic for no companies (friendly message)
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
