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
function CompanyCard({ company }) {
  const {handle, name, description, logoUrl} = company;
  
  return (
    <Link to={`/companies/${handle}`}>
      <div>
        <p>{name}</p>
        <p>{description}</p>
        {logoUrl && <img src={logoUrl} alt={name} />}
      </div>
    </Link>
  );
}

export default CompanyCard;
