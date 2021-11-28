import React from 'react'
import { Applicants } from './Applicants'

export const Applicant = () => {

    const data = [
        {
            name: "Han Solo",
            posting: "Smuggler",
            status: "Pending",
            schedule: "01.20.22",
            feedback: "A bit cocky, but can get any task done we give him.",
            email: "whats-a-parsec@jabbasplace.com",
            id: '1',

        },
        {
            name: "Luke Skywalker",
            posting: "Jedi",
            status: "Accepted",
            schedule: "03.15.21",
            feedback: "Man, this kid whines a lot. 'Boo hoo this, boo who that.' Some serious daddy issues too.",
            email: "lightsabergoesbrr@spacereligion.com",
            id: '2',

        },
        {
            name: "R2-D2",
            posting: "Service Droid",
            status: "Rejected",
            schedule: "05.20.20",
            feedback: "01100010 01100101 01100101 01110000 00100000 01100010 01101111 01101111 01110000",
            email: "beep@boop.com",
            id: '3',

        },
        {
            name: "Lando Calrissian",
            posting: "Smuggler",
            status: "Accepted",
            schedule: "04.20.21",
            feedback: "What a guy!",
            email: "cloudcity@bespin.gov",
            id: '4',

        },
    ]

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
              {/* Grabbing the applicant info and mapping through it */}
              {data.map((applicant) => (
                // Placcing each set of applicant info in its on list item component
                  <Applicants
                  name={applicant.name}
                  posting={applicant.posting}
                  key={applicant.id}
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
                  <p className="is-size-3">John Smith</p>
                  <p className="is-size-5">Junior Back-End Dev</p>
                  <p className="is-size-6">johnsmith@johnnyboy.com</p>
                </div>
                <div className="column">
                  <div className="column">Status: Rejected</div>
                  <div className="column">Interview Date: 04.20.21</div>
                </div>
              </div>
            </div>
            <div className="mt-3 message is-primary">
              <div className="message-header has-text-centered is-size-5">Skills</div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
                numquam temporibus eos id magni atque odit eveniet, quia amet,
                fugiat doloremque culpa quo dolorem cum nihil dicta reprehenderit
                rem? Quae ut odit eaque, expedita velit aperiam omnis corporis eum,
                nihil voluptate magnam deserunt repudiandae adipisci sequi tempora
                dolor repellendus mollitia excepturi possimus, placeat accusamus
                libero nisi vero harum! Odit fugiat laborum enim? Obcaecati veniam
                exercitationem iste perferendis dolore cum quae hic, fuga sint odit
                vel ipsam doloribus facere beatae corrupti?
              </div>
            </article>
          </div>
        </div>
    )
}
