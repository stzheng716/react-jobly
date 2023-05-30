import React, { useEffect, useState } from "react";
import JoblyApi from "./api";

/** CompanyList component.
 *
 * State: companies: [company, company,....]
 *
 * RouteList -> CompanyList -> {CompanyCard, SearchForm}
 * 
 * Makes API request for companies and render company cards
 */

function CompanyList() {
    const [companies, setCompanies] = useState([])

    useEffect()
}

export default CompanyList;