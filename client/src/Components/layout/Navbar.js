import React from 'react';

export const Navbar = () => {
  return (
    <nav class='navbar is-primary'>
      <div class='navbar-brand'>
        <a href='#' class='navbar-item is-size-3'>
          Zapplicant
        </a>
      </div>
      <div class='navbar-end'>
        <a href='#' class='navbar-item'>
          Settings<i class='ml-2 fa fa-cog'></i>
        </a>
      </div>
    </nav>
  );
};
