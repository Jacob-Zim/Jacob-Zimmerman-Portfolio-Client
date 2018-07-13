import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import Footer from './footer';

import pic1sm from '../images/2pos1sm.PNG';
import pic2sm from '../images/2pos2sm.PNG';

import pic1md from '../images/2pos1md.PNG';
import pic2md from '../images/2pos2md.PNG';

import pic1lg from '../images/2pos1lg.PNG';
import pic2lg from '../images/2pos2lg.PNG';

import '../stylesheets/project2.css';

class Project2 extends Component {
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
                    <h2 className="proj1-title">Skatespots</h2>
                    <div className="techs">MongoDB | Express | React | Node | Google-APIs | <div className="dev-techs-2">react-google-maps</div></div>
                    <p className="main-info">Since I was a kid I've loved skateboarding. Sure it can be dangerous but landing that next trick is one of the greatest feelings. Over the years I've had a few places I'd skate at but it would get repetitive going to the same spots. That's why I decided to create an app which can help me discover new spots! <br/><br/> Skatespots allows users to place their favorite spots on a google map to share. Each spot includes a name, address, description, rating, and image. Users can browse spots or login to create or edit their own. To top it off, I seeded the database to include thousands of spots to get people started!</p>
                    <div className="app-links-1">
                        <a className="live-app" target="_blank" rel="noopener noreferrer" href="https://skatespots.netlify.com/">Live App</a>
                        <a className="github-client" target="_blank" rel="noopener noreferrer" href="https://github.com/Jacob-Zim/skatespots-client">Github Client</a>
                        <a className="github-server" target="_blank" rel="noopener noreferrer" href="https://github.com/Jacob-Zim/skatespots-server">Github Server</a>
                    </div>
                    <img className="wanderlust-photo" src={pic1lg} alt="skatespots map"/>
                    <img className="wanderlust-photo-md" src={pic1md} alt="skatespots map"/>
                    <img className="wanderlust-photo-sm" src={pic1sm} alt="skatespots map"/>
                    <h3 className="proj1-role">My Role</h3>
                    <p className="role">I worked independently on this project, across the whole stack.</p>
                    <h3 className="proj1-implementation">Implementation</h3>
                    <p className="implementation">For starters I had to get a map up and running to allow for geolocation. I ended up using the 'react-google-maps' library which let me use a google map with react components. Once I had the map up, I started working on the backend routes.<br/><br/> I knew I wanted login functionality so I first worked on authentication using passportjs. Then I worked on creating, reading, updating, and deleting spots. From there, I was able to go to the front end and fetch api calls to send into my redux store and finish up with getting what I wanted rendered on the dom!</p>
                    <img className="wanderlust-imp-photo" src={pic2lg} alt="skatespote place"/>
                    <img className="wanderlust-photo-md" src={pic2md} alt="skatespote place"/>
                    <img className="wanderlust-photo-sm" src={pic2sm} alt="skatespote place"/>
                    <h3 className="proj1-challenges">Challenges</h3>
                    <p className="challenges">I came across some struggles while working on this app. First off, I had no clue how to use the google api with react so I had to do research before finding the library I needed.<br/><br/> Secondly, I was still getting used to react-redux and 'react-google-maps' uses higher order components to update props which I had no clue about; I wasn't able to utilize the library to its full extent. Finally, I was naively passing url-encoded data from the server which was usable with Chrome but not the Edge browser, so I changed it to send JSON and fixed all my fetch calls on the frontend.</p>
                    <h3 className="proj1-conclusion">Conclusion</h3>
                    <p className="conclusion">I learned a lot during the time I spent on skatespots. I got a taste of higher order components, which would help when creating Wanderlust where I implemented react-google-maps properly. I got a bunch more experience building asynchronous actions with redux. And I learned how to migrate datasets into MongoDB. I'm happy with the way skatespots came out and I have been using it ever since!</p>
                </div>
                <div className="links-to-proj">
                    <Link className="home-link" to="/">Homepage</Link>
                    <a className="skatespot-link-1" href="#top">Skatespots</a>
                    <Link className="staccato-link" to="/staccato">Staccato</Link>
                    <Link to="/wanderlust" className="wanderlust-link-1">Wanderlust</Link>
                </div>
                <div className="footer-holder-proj1">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Project2;