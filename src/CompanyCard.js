import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

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
  const { handle, name, description, logoUrl } = company;

  return (
    <Link to={`/companies/${handle}`}>
      <Card style={{ width: "40rem" }} className="m-auto">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {logoUrl && <img src={logoUrl} alt={name} />}
        </Card.Body>
      </Card>
    </Link>
  );
}



export default CompanyCard;
