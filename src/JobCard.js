import React from "react";
import convertAndFormat from "./convertAndFormat";
import Card from "react-bootstrap/Card";

/** JobCard component.
 *
 * Props:
 * - job {companyHandle: ..., title: ...}
 *
 * JobCardListing -> JobCard
 *
 * Shows job card
 */

function JobCard({ job }) {
  const { companyHandle, title, salary, equity } = job;
  const formattedSalary = convertAndFormat(salary);
  return (
    <Card style={{ width: "40rem" }} className="m-auto">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{companyHandle}</Card.Text>
        {salary && <Card.Text>Salary: ${formattedSalary}</Card.Text>}
        <Card.Text>equity: {equity === "0" || equity === null ? <p>No equity</p> : <p>{equity}</p>}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
