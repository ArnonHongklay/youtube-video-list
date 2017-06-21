import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>
            <Link to="/">Tech Recruiting - Coding Problems</Link>
          </h1>
          <h2>API Access, File I/O and Serialization</h2>
        </div>
      </div>
    );
  }
}

export default Header;
