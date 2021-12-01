import React from "react";

export const Applicants = (applicant) => {
  return (
    <div className="columns has-background-grey-lighter border-bottom-1">
      <div
        className="column is-half ml-3"
        id="name"
        onClick={(e) => applicant.onClick(applicant.email, e)}
      >
        {applicant.name}
      </div>
      <div className="column" is="posting">
        {applicant.posting}
      </div>
    </div>
  );
};
