import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>
            <a href="#">Tech Recruiting - Coding Problems</a>
          </h1>
          <h2>API Access, File I/O and Serialization</h2>
        </div>
      </div>
    );
  }
}

export default Header;
