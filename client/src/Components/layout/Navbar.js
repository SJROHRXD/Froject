import React from 'react';

export const Navbar = () => {
  return (
    <nav className='navbar is-primary'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item is-size-3'>
          Zapplicant
        </a>
      </div>
      <div className='navbar-end'>
        <a href='www.google.com' className='navbar-item'>
          Settings<i className='ml-2 fa fa-cog'></i>
        </a>
      </div>
    </nav>
  );
};
