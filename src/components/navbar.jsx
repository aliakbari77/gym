import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <nav className="navbar navbar-expand navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">
              GYM #{this.props.totalGym}
            </span>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <div className="navbar-nav">
                <a href="#" className="nav-item nav-link active">
                  Home
                </a>
                <a href="#" className="nav-item nav-link ">
                  Features
                </a>
                <a href="#" className="nav-item nav-link">
                  Pricing
                </a>
                <a href="#" className="nav-item nav-link ">
                  About Us
                </a>
              </div>
            </div>
            <form className="form-inline">
              <button className="btn btn-outline-success my-2 my-sm-0 m-2">
                Login
              </button>
              <button className="btn btn-outline-danger my-2 my-sm-0">
                Submit
              </button>
            </form>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
