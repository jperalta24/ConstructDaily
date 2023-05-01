import React from "react";
import CompanyItem from "./CompanyItem";

function CompanyList({ companies }) {
  return (
    <div>
      {companies.map((company) => (
        <CompanyItem key={company._id} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
