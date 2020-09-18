import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <a className='navbar-brand' href='/search'>Search</a>
      <a className='navbar-brand' href='/saved'>Saved</a>
    </nav>
  );
}

export default Nav;
