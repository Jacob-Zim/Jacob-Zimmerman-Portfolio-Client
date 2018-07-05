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
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    console.log('hoy')
                }} className="project-1">
                    <div className="project-1-text">Wanderlust<p className="sub-text">travel helper</p></div>
                </a>
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    console.log('hoy')
                }} className="project-2">
                    <div className="project-2-text">Skatespots<p className="sub-text margin-fix">Skateboarding Spot Finder</p></div>
                </a>
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    console.log('hoy')
                }} className="project-3">
                    <div className="project-3-text">Staccato<p className="sub-text">Learn Music Theory</p></div>
                </a>
            </div>
        )
    }
}

export default Projects;