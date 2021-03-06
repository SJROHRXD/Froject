import React from "react";
import { useState } from "react";
import { Applicants } from "./Applicants";
import { useMutation, useQuery } from "@apollo/client";
import {
  QUERY_APPLICANTS,
  QUERY_APPLICANTS_BY_EMAIL,
} from "../../utils/queries";
import { ADD_FEEDBACK } from "../../utils/mutations";

export const Applicant = () => {
  const { data } = useQuery(QUERY_APPLICANTS);

  const [selectedApplicant, setSelectedApplicant] = useState("");
  const [addFeedback, { error }] = useMutation(ADD_FEEDBACK);

  const [feedbackText, setFeedbackText] = useState("");

  const applicantsArray = data?.applicants || [];

  const { loading, data: currentApplicant } = useQuery(
    QUERY_APPLICANTS_BY_EMAIL,
    {
      variables: { email: selectedApplicant },
    }
  );

  const handleSubmitButton = async () => {
    console.log(feedbackText);
    console.log(currentApplicant.applicantByEmail.email);
    try {
      const { data: x } = addFeedback({
        variables: {
          email: currentApplicant.applicantByEmail.email,
          feedbackText: feedbackText,
        },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    console.log("loading");
  } else {
    console.log("finished loading.." + currentApplicant.applicantByEmail.name);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFeedbackText(value);
    console.log(`name ${name} value ${value}`);
  };

  return (
    <div className="columns is-fullheight-100vh m-5 column-h-90">
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
                  "skills" + currentApplicant?.applicantByEmail?.skills
                );
                console.log(
                  "current applicant " +
                    currentApplicant?.applicantByEmail?.name
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
          <div className="mt-3 message is-primary">
            <div className="message-header has-text-centered is-size-5">
              Skills
            </div>
            <div className="card-content has-text-centered">
              <ul className="skills-list">
                <li className="column">
                  {currentApplicant?.applicantByEmail?.skills[0]}
                </li>
                <li className="column">
                  {currentApplicant?.applicantByEmail?.skills[1]}
                </li>
                <li className="column">
                  {currentApplicant?.applicantByEmail?.skills[2]}
                </li>
                <li className="column">
                  {currentApplicant?.applicantByEmail?.skills[3]}
                </li>
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
          <div class="field">
            <label class="label">Add Feedback</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Candidate Feedback"
                name="feedbackText"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button
                class="button is-info"
                onClick={() => handleSubmitButton()}
              >
                Submit
              </button>
            </div>
            <div class="control">
              <button class="button is-danger is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
