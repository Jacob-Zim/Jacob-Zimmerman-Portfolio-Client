import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import '../stylesheets/projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="projects-container">
                <h2 className="projects-header">Projects</h2>
                  <Link to="/wanderlust"
                  className="project-1">
                    <div className="project-1-text">Wanderlust<p className="sub-text">travel helper</p></div>
                  </Link>
                  <Link to="/skatespots"
                   className="project-2">
                   <p className="landing-header">Skatespots</p>
                   <p className="landing-subHeader">Find your new favorite place to skate</p>
                   <div className="landing-bkg" role="img" aria-label="skateboarder">
                    <div className="landing-container">
                    </div>
                   </div>
                    {/* <div className="project-2-text">Skatespots<p className="sub-text margin-fix">Skateboarding Spot Finder</p></div> */}
                  </Link>
                  <Link to="/staccato"
                   className="project-3">
                    <div className="project-3-text">Staccato<p className="sub-text">Learn Music Theory</p></div>
                  </Link>
                  <h2 className="about-header">About Me</h2>
                  <p className="intro-sub about-me-text">I'm passionate about the capabilities of software, and wish to develop products which really make a difference in the world. The projects I've created are centered around my other interests such as playing guitar, skateboarding, and traveling. I love my hobbies and want to do all that I can to improve them!<br/><br/> What I really want is to produce life changing software. I really enjoy working with others, there is no way I can achieve my goal alone, and hearing others' perspectives is a breath of fresh air for me. I think I bring a unique view to software and am eager to learn as much as I possibly can!</p>
            </div>
        )
    }
}

export default Projects;