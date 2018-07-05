import React, {Component} from 'react';

import '../stylesheets/projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="projects-container">
                <h2 className="projects-header">Projects</h2>
                <div className="project-1">
                    <div className="project-1-text">Wanderlust<p className="sub-text">travel helper</p></div>
                </div>
                <div className="project-2">
                    <div className="project-2-text">Skatespots<p className="sub-text margin-fix">Skateboarding Spot Finder</p></div>
                </div>
                <div className="project-3">
                    <div className="project-3-text">Staccato<p className="sub-text">Learn Music Theory</p></div>
                </div>
            </div>
        )
    }
}

export default Projects;