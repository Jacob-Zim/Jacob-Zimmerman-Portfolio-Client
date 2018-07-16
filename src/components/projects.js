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
                <h2 id="projects" className="projects-header">Projects</h2>
                  <Link to="/wanderlust"
                  className="project-1"
                  onClick={(e)=> {
                      this.props.changeHighlight();
                  }}>
                    <p className="wanderlust-header">Wanderlust</p>
                   <p className="wanderlust-subHeader">Plan your next trip</p>
                   <div className="wanderlust-bkg" role="img" aria-label="warm beach">
                    <div className="skatespot-container">
                    </div>
                   </div>
                  </Link>
                  <Link to="/skatespots"
                   className="project-2"
                   onClick={(e)=> {
                    this.props.changeHighlight();
                }}>
                   <p className="skatespot-header">Skatespots</p>
                   <p className="skatespot-subHeader">Find great places to skate</p>
                   <div className="skatespot-bkg" role="img" aria-label="skateboarder">
                    <div className="skatespot-container">
                    </div>
                   </div>
                    {/* <div className="project-2-text">Skatespots<p className="sub-text margin-fix">Skateboarding Spot Finder</p></div> */}
                  </Link>
                  <Link to="/staccato"
                   className="project-3"
                   onClick={(e)=> {
                    this.props.changeHighlight();
                }}>
                    {/* <div className="project-3-text">Staccato<p className="sub-text">Learn Music Theory</p></div> */}
                    <p className="staccato-header">Staccato</p>
                   <p className="staccato-subHeader">Learn music theory</p>
                   <div className="staccato-bkg" role="img" aria-label="piano">
                    <div className="skatespot-container">
                    </div>
                   </div>
                  </Link>
                  <a id="about"></a>
                  <h2 className="about-header">About Me</h2>
                    <p className="intro-sub about-me-text">I want to produce life changing software. I'm passionate about the capabilities it has, and wish to develop products that make a difference in the world. <br /> <br /> The projects I've worked on are centered around some of my favorite hobbies such as playing guitar, skateboarding, and traveling. I love my hobbies and want to do all that I can to improve them!<br/><br/> I've worked on projects individually and as part of a team. I enjoy working with others as hearing their perspectives is a breath of fresh air. I bring a unique view to software and I'm eager to learn as much as I possibly can!</p>
            </div>
        )
    }
}

export default Projects;