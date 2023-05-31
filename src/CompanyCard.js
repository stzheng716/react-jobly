import React, { useState } from "react";

function CompanyCard({ company }) {
  return (
    <div>
      <p>{company.name}</p>
      <p>{company.description}</p>
      {company.logoUrl && <img src={company.logoUrl} />}
    </div>
  );
}

export default CompanyCard;
