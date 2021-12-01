import React from "react";

const handleChange = (event) => {
  const { name } = event.target;
  console.log(name);
};

export const Applicants = (applicant) => {
  const handleRemoveSkill = (event) => {
    console.log("WE HAVE A CLICK DETECTED####### " + event);
  };

  return (
    <div className="columns has-background-grey-lighter border-bottom-1">
      <div
        className="column is-half ml-3"
        id="name"
        onClick={() => handleRemoveSkill(applicant.name)}
      >
        {applicant.name}
      </div>
      <div className="column" is="posting">
        {applicant.posting}
      </div>
    </div>
  );
};
