import React from "react";
import { useState } from "react";
import { Applicants } from "./Applicants";
import { useQuery } from "@apollo/client";
import {
  QUERY_APPLICANTS,
  QUERY_APPLICANTS_BY_EMAIL,
} from "../../utils/queries";

export const Applicant = () => {
  const { data } = useQuery(QUERY_APPLICANTS);

  const [selectedApplicant, setSelectedApplicant] = useState("");

  const applicantsArray = data?.applicants || [];

  const { loading, data: currentApplicant } = useQuery(
    QUERY_APPLICANTS_BY_EMAIL,
    {
      variables: { email: selectedApplicant },
    }
  );

  if (loading) {
    console.log("loading");
  } else {
    console.log("finished loading.." + currentApplicant.applicantByEmail.name);
  }

  return (
    <div className="columns is-fullheight-100vh m-5">
      <div className="column card mr-5">
        <div className="columns card-header-title has-background-primary">
          <div className="column is-centered is-size-4">Applicants</div>
          <div className="column is-centered">
            <div className="field has-addons is-pulled-right">
              <div className="control">
                <input type="text" className="input" placeholder="Name" />
              </div>
              <div className="control">
                <button className="button is-info">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="columns card-header-title has-background-info">
          <div className="column">
            Name<i className="ml-2 fas fa-sort" id="sort"></i>
          </div>
          <div className="column">
            Position<i className="ml-2 fas fa-sort" id="sort"></i>
          </div>
        </div>

        <ul>
          {applicantsArray.map((applicant) => (
            // Placcing each set of applicant info in its on list item component

            <Applicants
              onClick={(event) => {
                setSelectedApplicant(event);
                console.log("selectedApplicant: " + selectedApplicant);
                console.log(
                  "current applicant " + currentApplicant?.applicantByEmail.name
                );
              }}
              name={applicant.name}
              email={applicant.email}
              posting={applicant.posting?.name || ""}
              key={applicant.email}
            />
          ))}
        </ul>
      </div>

      <div className="column card is-two-thirds">
        <div className="card-content border-bottom-1">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img src="./blank-profile-picture-973460_640.png" alt="" />
              </figure>
            </div>

            <div className="media-content">
              <p className="is-size-3">
                {currentApplicant?.applicantByEmail?.name}
              </p>
              <p className="is-size-5">
                {currentApplicant?.applicantByEmail?.posting?.name}
              </p>
              <p className="is-size-6">{selectedApplicant}</p>
            </div>
            <div className="column">
              <div className="column">
                Status: {currentApplicant?.applicantByEmail?.status}
              </div>
              <div className="column">
                Interview Date:{" "}
                {currentApplicant?.applicantByEmail?.schedule?.date}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 message is-primary">
          <div className="message-header has-text-centered is-size-5">
            Skills
          </div>
          <div className="card-content has-text-centered">
            <ul className="skills-list">
              <li className="column">JavaScript</li>
              <li className="column">React</li>
              <li className="column">PHP</li>
              <li className="column">Express</li>
            </ul>
          </div>
        </div>
        <article className="message is-primary">
          <div className="message-header is-size-5">
            <p>Comments</p>
          </div>
          <div className="message-body has-text-black">
            {currentApplicant?.applicantByEmail?.feedback}
          </div>
        </article>
      </div>
    </div>
  );
};
