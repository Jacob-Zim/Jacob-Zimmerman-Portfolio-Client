import React, { Component } from 'react';

import Projects from './projects';

import Footer from './footer';

import '../stylesheets/about.css';

class About extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    if (this.props.highlightedAbout === 'highlighted' && window.pageYOffset > window.innerHeight - 100) {
      this.props.changeHighlight('projects');
    }
    if (this.props.highlightedProjects === 'highlighted' && window.pageYOffset <= window.innerHeight - 100) {
      this.props.changeHighlight('about');
    }
    return (
      <div>
        <div className="about">
          <div className="landing">
            <p className="intro1">Hey there! I'm a software developer living in Seattle, Washington.</p>
            <p className="intro2">Let's work on your product together!</p>
            <p className="intro-sub">I create full-stack applications from the ground up.</p>
            <p className="intro-sub">Have a project in mind?</p>
            <p className="intro-sub">Drop me a line <a className="intro-email" href="mailto: ijacobzim@gmail.com">ijacobzim@gmail.com</a></p>
            <a className="arrow-holder" href="" onClick={(e) => {
                e.preventDefault();
                  window.scroll({
                    top: (window.innerHeight*1.1),
                    left: 0,
                    behavior: 'smooth'
                  });
                  }} >
              <p className="down-arrow">
              </p>
            </a>
          </div>
        </div>
        <Projects />
        <div className="footer-holder">
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;