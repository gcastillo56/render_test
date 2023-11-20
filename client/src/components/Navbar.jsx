import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  function logOut() {
    props.listener();
  }

  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <ul className='navbar-nav mr-auto'>
        <li class='nav-item'>
          <Link
            to='/'
            className='nav-link'
          >
            Home
          </Link>
        </li>
        <li class='nav-item'>
          <Link
            to='/archive'
            className='nav-link'
          >
            Archive
          </Link>
        </li>
        <li class='nav-item'>
          <Link
            to='/profiler'
            className='nav-link'
          >
            Profiler
          </Link>
        </li>
        <li class='nav-item'>
          <Link
            to='/'
            onClick={logOut}
            className='btn btn-outline-success my-2 my-sm-0'
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
