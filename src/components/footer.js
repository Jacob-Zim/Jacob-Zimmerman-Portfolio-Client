import React, {Component} from 'react';

import '../stylesheets/footer.css';

import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-shift">
                <div className="footer-content">
                    <a href="https://github.com/Jacob-Zim" rel="noopener noreferrer" target="_blank"><img className="github-icon" src={github} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/jacob-zim" rel="noopener noreferrer" target="_blank"><img className="linkedIn-icon" src={linkedIn} alt="linkedIn"/></a>
                    <a className="footer-email" href="mailto: ijacobzim@gmail.com">ijacobzim@gmail.com</a>
                </div>
            </div>
        )
    }
}

export default Footer;