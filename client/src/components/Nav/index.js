import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/search">Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saved">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
