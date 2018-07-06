import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import '../stylesheets/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <header id="top" className="header-bar">
          <div className="logo-container">
            <h2 className="logo">Jacob Zimmerman</h2>
          </div>
          <ul className="links">
            <Link to="/" className={`about-link ${this.props.highlightedAbout}`}
              onClick={() => {
                this.props.changeHighlight('about');
              }
            }>about</Link>
            <a href="" className={`projects-link ${this.props.highlightedProjects}`}
              onClick={(e) => {
                e.preventDefault();
                // user is on the about page
                if (this.props.highlightedAbout === 'highlighted') {
                  window.scroll({
                    top: (window.innerHeight*1.1),
                    left: 0,
                    behavior: 'smooth'
                  });
                }
              }
            }>projects</a>
            <li className="header-email">
              <a href="mailto: ijacobzim@gmail.com">ijacobzim@gmail.com</a>
            </li>
          </ul>
        </header>
      );
    }
  }
  
export default Header;  