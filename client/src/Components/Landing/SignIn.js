import React, { useState } from 'react';
import { LOGIN_EMPLOYEE } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';

export const SignIn = () => {
  const [companyName, setCompnayName] = useState('');
  const [password, setPassword] = useState('');

  const [login, { error, data }] = useMutation(LOGIN_EMPLOYEE);

  const handleComapanyChange = (event) => {
    const { value } = event.target;
    setCompnayName(value);
  };
  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(
        'sending this to login: company' + companyName + ' pw ' + password
      );
      const { data } = await login({
        variables: { name: companyName, password: password },
      });
      console.log(data.login.token);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    console.log('company name ' + companyName);
    console.log('password ' + password);
  };

  return (
    <section className='section column-h-80'>
      <form>
        <div className='' id='svgLogo'>
          <svg
            width='223'
            height='203'
            viewBox='0 0 223 203'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='LOGOZAPP'>
              <g id='ZapplicantSVG'>
                <g id='briefcase'>
                  <path
                    id='Vector'
                    d='M22.7969 202.734H199.984C212.316 202.734 222.352 192.676 222.352 180.312V69.3555C222.352 56.9922 212.316 46.9336 199.984 46.9336H159.676V25.1719C159.676 11.4141 148.508 0.222656 134.781 0.222656H87.9961C74.2695 0.222656 63.1055 11.4141 63.1055 25.1719V46.9336H22.7969C10.4609 46.9336 0.425781 56.9922 0.425781 69.3555V180.312C0.425781 192.676 10.4609 202.734 22.7969 202.734ZM80.2383 25.1719C80.2383 20.8828 83.7187 17.3945 87.9961 17.3945H134.781C139.059 17.3945 142.539 20.8828 142.539 25.1719V46.9336H80.2383V25.1719Z'
                    fill='#01ABAA'
                  />
                </g>
                <g id='BACKZAP'>
                  <path
                    id='Vector_2'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M135.371 131.73L178.453 122.207C119.961 88.2227 111.297 91.668 52.8008 57.6992C91 90.1172 80.0703 83.8242 118.988 115.402L71.6914 126.461L196.719 175.172L135.371 131.73Z'
                    fill='#FEA680'
                  />
                </g>
                <g id='FRONTZAP'>
                  <path
                    id='Vector_3'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M124.285 143.367L174.156 131.246C105.352 93.2812 95.3594 97.4922 26.5508 59.5391C71.7227 96.1953 58.8672 89.168 104.852 124.832L50.1094 138.832L196.625 192.234L124.285 143.367Z'
                    fill='#FEDC3D'
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className='box' id='sloginxxx'>
          <label className='label' for='cname'>
            <b>Company Name</b>
          </label>
          <input
            className='input'
            type='text'
            placeholder='Enter Company Name'
            name='cname'
            onChange={handleComapanyChange}
            required
          ></input>

          <label className='label' for='pswd'>
            <b>Password</b>
          </label>
          <input
            className='input'
            type='password'
            placeholder='Enter Password'
            name='pswd'
            onChange={handlePasswordChange}
            required
          ></input>

          <button className='button' onClick={handleLoginSubmit}>
            Login
          </button>

          <a href='/pricing' className='button is-warning'>
            Pricing
          </a>
        </div>
      </form>
    </section>
  );
};
