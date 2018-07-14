import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import '../stylesheets/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <header id="top" className="header-bar">
          <div className="logo-container">
            <Link to="/" className={`logo ${this.props.highlightedName}`} onClick={() => {
              if (this.props.highlightedName === "highlighted") {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                });
              }
              this.props.changeHighlight('logo');
            }}>Jacob Zimmerman</Link>
          </div>
          <ul className="links">
              <HashLink smooth to="/#about" className={`about-link ${this.props.highlightedAbout}`}
                onClick={() => {
                  this.props.changeHighlight('about');
                }
              }>about</HashLink>
            <HashLink smooth to="/#projects" className={`projects-link ${this.props.highlightedProjects}`}
              onClick={() => {
                this.props.changeHighlight('projects');
              }
            }>projects</HashLink>
            <li className="header-email">
              <a href="mailto: ijacobzim@gmail.com">ijacobzim@gmail.com</a>
            </li>
          </ul>
        </header>
      );
    }
  }
  
export default Header;  