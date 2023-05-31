import React from "react";
import { Link } from "react-router-dom";

/** CompanyCard component.
 *
 * Props:
 * - company {handle: ..., name: ...}
 *
 * CompanyList -> CompanyCard
 *
 * Shows company card
 */
//TODO: destructure company
function CompanyCard({ company }) {
  // const {handle, name, description, logoUrl} = company
  return (
    <Link to={`/companies/${company.handle}`}>
      <div>
        <p>{company.name}</p>
        <p>{company.description}</p>
        {company.logoUrl && <img src={company.logoUrl} alt={company.name} />}
      </div>
    </Link>
  );
}

export default CompanyCard;
