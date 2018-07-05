import React, { Component } from 'react';

import '../stylesheets/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <header className="header-bar">
          <div className="logo-container">
            <h2 className="logo">Jacob Zimmerman</h2>
          </div>
          <ul className="links">
            <li className={`about-link ${this.props.highlightedAbout}`}
              onClick={() => {
                this.props.changeHighlight('about');
              }
            }>about</li>
            <li className={`projects-link ${this.props.highlightedProjects}`}
              onClick={() => {
                // user is on the about page
                if (this.props.highlightedAbout === 'highlighted') {
                  window.scroll({
                    top: (window.innerHeight*1.1),
                    left: 0,
                    behavior: 'smooth'
                  });
                }
              }
            }>projects</li>
            <li className="header-email">
              <a href="mailto: ijacobzim@gmail.com">ijacobzim@gmail.com</a>
            </li>
          </ul>
        </header>
      );
    }
  }
  
export default Header;  