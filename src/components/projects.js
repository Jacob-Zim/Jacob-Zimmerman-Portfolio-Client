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
                    <div className="project-2-text">Skatespots<p className="sub-text margin-fix">Skateboarding Spot Finder</p></div>
                  </Link>
                  <Link to="/staccato"
                   className="project-3">
                    <div className="project-3-text">Staccato<p className="sub-text">Learn Music Theory</p></div>
                  </Link>
            </div>
        )
    }
}

export default Projects;