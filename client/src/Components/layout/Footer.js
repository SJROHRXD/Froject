import React from 'react';

export const Footer = () => {
  return (
    <footer className='footer has-background-primary has-text-centered'>
      <div className='columns'>
        <div className='column'>
          <ul className='has-text-dark'>
            <li>
              <a href='/' className='is-size-5 has-text-danger'>
                Zapplicant
              </a>
            </li>
            <li>Bussiness Solutions</li>
            <li>Mobile App</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='column'>
          <ul className='has-text-dark'>
            <li>
              <a href='/' className='is-size-5 has-text-danger'>
                About Us
              </a>
            </li>
            <li>Contact Us</li>
            <li>Leadership</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className='column'>
          <ul className='has-text-dark'>
            <li>
              <a href='/' className='is-size-5 has-text-danger'>
                Community
              </a>
            </li>
            <li>Events</li>
            <li>Locations</li>
            <li>News</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
