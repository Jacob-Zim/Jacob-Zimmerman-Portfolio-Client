import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Footer from './footer';

import pic1sm from '../images/3pos1sm.PNG';
import pic2sm from '../images/3pos2sm.PNG';

import pic1md from '../images/3pos1md.PNG';
import pic2md from '../images/3pos2md.PNG';

import pic1lg from '../images/3pos1lg.PNG';
import pic2lg from '../images/3pos2lg.PNG';

import '../stylesheets/project3.css';

class Project3 extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.changeHighlight('projects');
        window.scroll({
            top: 0,
            left: 0
        });
    }

    render() {
        return (
            <div>
                <div className="proj1-container">
                    <h2 className="proj1-title">Staccato</h2>
                    <div className="techs">MongoDB | Express | React | Node | Redux |<div className="dev-techs-3"> Spaced-Repetition</div></div>
                    <p className="main-info">Learning music theory is hard, especially when you're first starting out trying to memorize the basics. My partner and I came up with Staccato, an application which tests the user on questions using a spaced repetition algorithm to determine frequency of certain questions.<br/><br/> Spaced Repetition is scientifically proven to be one of the best ways to memorize information so we figured this would be great for our app!</p>
                    <div className="app-links-1">
                        <a className="live-app" target="_blank" rel="noopener noreferrer" href="https://staccato-learn-music.netlify.com/">Live App</a>
                        <a className="github-client" target="_blank" rel="noopener noreferrer" href="https://github.com/Jacob-Zim/Staccato-Client">Github Client</a>
                        <a className="github-server" target="_blank" rel="noopener noreferrer" href="https://github.com/Jacob-Zim/spaced-repetition-server">Github Server</a>
                    </div>
                    <img className="wanderlust-photo" src={pic1lg} />
                    <img className="wanderlust-photo-md" src={pic1md}/>
                    <img className="wanderlust-photo-sm" src={pic1sm}/>
                    <h3 className="proj1-role">My Role</h3>
                    <p className="role">I primarily worked on the backend of our app which included the algorithm, schema, authentication, and routes. Also, I created actions to access the backend api and helped a bit on the components.</p>
                    <h3 className="proj1-implementation">Implementation</h3>
                    <p className="implementation">My partner and I decided on splitting the work between the backend and frontend, helping each other out when required. I started with authentication as we needed the questions to have a many to one relationship with the user schema and I wanted to get that out of the way first. Then, I created the routes which my partner would use on the front end to render the questions we wanted to display. <br/><br/>Finally came the fun part, creating the algorithm. I used a linked list which places each question 2n places behind the first in the list, where n is the amount of times the user answered that question correct. If the user gets a question wrong n will reset to 1 and therefore will be placed behind the next question in the list. I had a fun time thinking about the logic and seeing it working by the time the app was complete!</p>
                    <img className="wanderlust-imp-photo" src={pic2lg} />
                    <img className="wanderlust-photo-md" src={pic2md}/>
                    <img className="wanderlust-photo-sm" src={pic2sm}/>
                    <h3 className="proj1-challenges">Challenges</h3>
                    <p className="challenges">There weren't too many challenges with creating Staccato. When creating the algorithm I first tried to use a stack but realized I'd need another stack to get the functionality that we were going for, so it would basically be a linked list which I used instead. Making sure I had the list specific for each user was a bit of a puzzle as I had not used an algorithm on a server before but I got it working by putting it behind a route!</p>
                    <h3 className="proj1-conclusion">Conclusion</h3>
                    <p className="conclusion">My partner did a great job on the frontend and we were able to work effectively to get the project up and running. With the experience of putting a non array data structure to use on the backend, I feel I have many more capabilities for a wide variety of applications. Overall, I'm happy with the way Staccato turned out!</p>
                </div>
                <div className="links-to-proj">
                    <Link className="home-link" to="/">Homepage</Link>
                    <Link className="skatespot-link" to="/skatespots">Skatespots</Link>
                    <a className="staccato-link-1" href="#top">Staccato</a>
                    <Link className="wanderlust-link-1" to="/wanderlust">Wanderlust</Link>
                </div>
                <div className="footer-holder-proj1">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Project3;