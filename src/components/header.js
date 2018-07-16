import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import '../stylesheets/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  logo() {
    if (this.props.width <= 750) {
      return 'JZ';
    }
    return 'Jacob Zimmerman';
  }
  

    render() {
      let logo = this.logo();
      return (
        <header className="header-bar">
          <div className="logo-container">
            <Link to="/" className={`logo ${this.props.highlightedName}`} 
              onClick={(e) => {
                  e.stopPropagation();
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  });
              this.props.changeHighlight('logo');
            }}>{logo}</Link>
          </div>
          <ul className="links">
              <HashLink smooth to="/#about" className={`about-link ${this.props.highlightedAbout}`}
                onClick={(e) => {
                  if (this.props.width <= 425) {
                    e.stopPropagation();
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: 'smooth'
                    });
                  }
                  this.props.changeHighlight('about');
                }
              }>about</HashLink>
            <HashLink smooth to="/#projects" className={`projects-link ${this.props.highlightedProjects}`}
              onClick={(e) => {
                if (this.props.width <= 425) {
                  e.stopPropagation();
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  });
                }
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