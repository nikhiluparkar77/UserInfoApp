import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../Redux/Action/AuthAction";


const Header = ({auth,logoutUser}) => {
  
  const userLogout = () => {
    logoutUser();
  };

  const gestLink = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Log in
        </Link>
      </li>
    </>
  );
   

  const userLink = (
    <>
    <li className="nav-item">
        <Link className="nav-link" to="#" onClick={userLogout}>
         Logout
        </Link>
      </li>
       
    </>
  );

  return (
    <div className="Header">
      <nav className="navbar navbar-dark bg-white navbar-expand-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
           Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-list-2"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-list-2">
            <ul className="navbar-nav ml-auto">  
              {auth.isAuthenticated ? userLink : gestLink}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

 

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);