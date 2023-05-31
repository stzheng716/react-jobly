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
  const [companies, setCompanies] = useState(null);

  useEffect(function loadCompaniesFromAPI() {
    handleSearch();
  }, []);

  /** Search company with the search term and update the companies list*/
  async function handleSearch(searchTerm) {
    const companies = await JoblyApi.getCompanies(searchTerm);
    setCompanies(companies);
  }

  if (!companies) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />

      {(companies.length === 0) ? <h2>No companies found</h2> :
          companies.map(c => <CompanyCard key={c.handle} company={c} />)
      }
    </div>
  );
}

export default CompanyList;
