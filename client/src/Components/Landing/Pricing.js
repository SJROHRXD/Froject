import React from 'react'
import { Fragment } from 'react'

export const Pricing = () => {
    return (
        <Fragment>
            <div className="column-h-80">
        <div id="svgLogo">
        <svg width="223" height="203" viewBox="0 0 223 203" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="LOGOZAPP">
                <g id="ZapplicantSVG">
                    <g id="BRIEFCASE">
                    <path id="Vector" d="M22.7969 202.734H199.984C212.316 202.734 222.352 192.676 222.352 180.312V69.3555C222.352 56.9922 212.316 46.9336 199.984 46.9336H159.676V25.1719C159.676 11.4141 148.508 0.222656 134.781 0.222656H87.9961C74.2695 0.222656 63.1055 11.4141 63.1055 25.1719V46.9336H22.7969C10.4609 46.9336 0.425781 56.9922 0.425781 69.3555V180.312C0.425781 192.676 10.4609 202.734 22.7969 202.734ZM80.2383 25.1719C80.2383 20.8828 83.7187 17.3945 87.9961 17.3945H134.781C139.059 17.3945 142.539 20.8828 142.539 25.1719V46.9336H80.2383V25.1719Z" fill="#01ABAA"/>
                    </g>
                    <g id="BACKZAP">
                    <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M135.371 131.73L178.453 122.207C119.961 88.2227 111.297 91.668 52.8008 57.6992C91 90.1172 80.0703 83.8242 118.988 115.402L71.6914 126.461L196.719 175.172L135.371 131.73Z" fill="#FEA680"/>
                    </g>
                    <g id="FRONTZAP">
                    <path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M124.285 143.367L174.156 131.246C105.352 93.2812 95.3594 97.4922 26.5508 59.5391C71.7227 96.1953 58.8672 89.168 104.852 124.832L50.1094 138.832L196.625 192.234L124.285 143.367Z" fill="#FEDC3D"/>
                    </g>
                </g>
            </g>
        </svg>
    </div>
        
    <div class = "columns">
        <div class="column"> 
            <div class="card-price">
                
                <h4>Basic Monthly Plan</h4>
                <p class="bennies1">Applicant Notif's</p>
                <p class="bennies2">Applicant Notes</p>
                <p class="bennies3">And more!</p>
                <h3 class="cardprice-title">$9.99 per Month<br></br>No commitment!</h3>
            </div>
        </div>
        <div class="column"> 
            <div class="card-price">
                
                <h4>6 Month Plan</h4>
                <p class="bennies1">Applicant Notif's</p>
                <p class="bennies2">Applicant Notes</p>
                <p class="bennies3">Alerts</p>
                <h3 class="cardprice-title">$41.94 Owed Now<br></br>$6.99 per Month</h3>
            </div>
        </div>
        <div class="column"> 
            <div class="card-price">
                
                <h4>12 Month Plan</h4>
                    <p class="bennies1">Applicant Notif's</p>
                    <p class="bennies2">Applicant Notes</p>
                    <p class="bennies3">Custom Alerts</p>
                    <h3 class="cardprice-title">$59.88 Owned Now<br></br>$4.99 per Month</h3>
            </div>
        </div>
    </div>
    </div>
        </Fragment>
    )
}
