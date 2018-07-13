import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Footer from './footer';

import pic1sm from '../images/pos1sm.PNG';
import pic2sm from '../images/pos3sm.PNG';

import pic1md from '../images/pos1md.PNG';
import pic2md from '../images/pos3md.PNG';

import pic1lg from '../images/pos2wide.PNG';
import pic2lg from '../images/pos3wide.PNG';

import '../stylesheets/project1.css';

class Project1 extends Component {
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
                    <h2 className="proj1-title">Wanderlust</h2>
                    <div className="techs">MongoDB | Express | React | Node | Google-APIs |<div className="small-dev-tech"> react-google-maps</div></div>
                    <p className="main-info">Planning a trip can be a headache, there are many different tools out there with complicated user interfaces. They make it hard to simply keep track of destinations you want to go to. <br/><br/>My team and I wanted to simplify this process. We needed a tool to keep track of the information for not just one but a variety of trips, all in one simple ui. Wanderlust allows you to create trips and find destinations to add to them!</p>
                    <div className="app-links-1">
                        <a className="live-app" target="_blank" rel="noopener noreferrer" href="https://wanderlust-travel.netlify.com/">Live App</a>
                        <a className="github-client" target="_blank" rel="noopener noreferrer" href="https://github.com/Jacob-Zim/Wanderlust-Client">Github Client</a>
                        <a className="github-server" target="_blank" rel="noopener noreferrer" href="https://github.com/Jacob-Zim/Wanderlust-Backend">Github Server</a>
                    </div>
                    <img className="wanderlust-photo" src={pic1lg}/>
                    <h3 className="proj1-role">My Role</h3>
                    <p className="role">I worked with three other developers on this project, all filling different roles and contributing to the repo. I was the project lead, providing the user stories and driving the overall functionality of the app. I would present my ideas to the team, listen to feedback, and integrated the good ideas into the app. <br/><br/>Most of my time coding was spent on the frontend, specifically on the list and trip components along with a large portion of the api calls and actions.</p>
                    <h3 className="proj1-implementation">Implementation</h3>
                    <p className="implementation">We wanted the user to be able to see geographically where their destinations were. We decided on using google maps, specifically a react library 'react-google-maps'. Along with the map, we needed to get information for these places so we used the google places api. <br/><br/> To store the information we created a server which used user authentication and connected to a database. The overall minimal viable product was met and allowed users to create and delete trips, add searched places to said trips, and even included the ability to leave notes on specific places.</p>
                    <img className="wanderlust-imp-photo" src={pic2lg} />
                    <h3 className="proj1-challenges">Challenges</h3>
                    <p className="challenges">There were a few roadbumps along the way, but nothing we couldn't get past. The biggest was with accessing the google places api. We ran across an issue with cross origin resource sharing, as the api was being fetched from the frontend which wasn't authorized on googles end. <br/><br/> We came up with a quick solution which used a library called CORS anywhere which proxied our calls to a server with cors enabled. All we had to do was host CORS anywhere on heroku and use the url in front of our fetch calls! Besides that, the project ran quite smoothly.</p>
                    <h3 className="proj1-conclusion">Conclusion</h3>
                    <p className="conclusion">After all was said and done we had our fully functional app, but we would do things differently if we were to do it again. It would be easier to organize our store with one person solely working on actions rather than a few, as we got mixed up at times with naming and organization. <br/><br/>Another thing we would change is spending a little more time researching as we got started coding pretty quick without having a complete picture of the end goal, causing us to sometimes come back and edit components. <br/><br/> Overall, I think we did a great job with the time we had and worked together effectively. We were able to joke around and have a good time while working diligently, I couldn't have asked for a better team!</p>
                </div>
                <div className="links-to-proj">
                    <Link className="home-link" to="/">Homepage</Link>
                    <Link className="skatespot-link" to="/skatespots">Skatespots</Link>
                    <Link className="staccato-link" to="/staccato">Staccato</Link>
                    <a className="wanderlust-link" href="#top">Wanderlust</a>
                </div>
                <div className="footer-holder-proj1">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Project1;