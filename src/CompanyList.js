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
  const [companies, setCompanies] = useState([]);

  useEffect(function loadCompaniesFromAPI() {
    async function fetchCompanies() {
      const companies = await JoblyApi.request("/companies");
      setCompanies(companies.companies);
    }
    fetchCompanies();
  }, []);

  async function handleSearch(searchTerm) {
    const companies = await JoblyApi.request("/companies", {
      nameLike: searchTerm,
    });
    setCompanies(companies.companies);
  }

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />

      {companies.map((c) => (
        <CompanyCard key={c.handle} company={c} />
      ))}
    </div>
  );
}

export default CompanyList;
