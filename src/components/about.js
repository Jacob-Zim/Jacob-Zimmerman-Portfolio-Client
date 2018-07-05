import React, { Component } from 'react';

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
      <div className="about">
        <div className="landing">
          <p className="intro1">Hey there! I'm a software developer living in Seattle, Washington.</p>
          <p className="intro2">I can help you build your project!</p>
          <p className="intro-sub">I create full-stack applications from the ground up.</p>
          <p className="intro-sub">Have a project in mind?</p>
          <p className="intro-sub">Drop me a line <a className="intro-email" href="mailto: ijacobzim@gmail.com">ijacobzim@gmail.com</a></p>
          <div className="arrow-holder">
            <a className="down-arrow" 
                onClick={() => {
                window.scroll({
                  top: (window.innerHeight*1.1),
                  left: 0,
                  behavior: 'smooth'
                });
                }
            }>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;