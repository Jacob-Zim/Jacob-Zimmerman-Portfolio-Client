import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './header';

import About from './about';

import Project1 from './project1';
import Project2 from './project2';
import Project3 from './project3';

import Projects from './projects';

import Footer from './footer';

import '../stylesheets/App.css';
import '../stylesheets/footer.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedAbout: "",
      highlightedProjects: "",
      highlightedName: "highlighted",
      width: 0,
      height: 0,
      onProject: false
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  changeHighlight(highlight) {

    if (highlight === 'about') {
      this.setState({
        highlightedAbout: "highlighted",
        highlightedProjects: "",
        highlightedName: ""
      })
    }

    if (highlight === 'projects') {
      this.setState({
        highlightedAbout: "",
        highlightedProjects: "highlighted",
        highlightedName: ""
      })
    }

    if (highlight === 'logo') {
      this.setState({
        highlightedAbout: "",
        highlightedProjects: "",
        highlightedName: "highlighted"
      })
    }

    if (highlight === 'none') {
      this.setState({
        highlightedAbout: "",
        highlightedProjects: "",
        highlightedName: ""
      })
    }
  }

  render() {
    let page = 
      <div className="app">
        <Header 
          changeHighlight={(highlight) => this.changeHighlight(highlight)}
          highlightedAbout= {this.state.highlightedAbout}
          highlightedProjects= {this.state.highlightedProjects}
          highlightedName= {this.state.highlightedName}
          width= {this.state.width}
        />
        <Switch>
          <Route exact path="/wanderlust" render={(props) => {
            return (<Project1
              changeHighlight={(highlight) => this.changeHighlight(highlight)}
              {...props} />);}}
          />
          <Route exact path="/skatespots" render={(props) => {
            return (<Project2
              changeHighlight={(highlight) => this.changeHighlight(highlight)}
              {...props} />);}} />
          <Route exact path="/staccato" render={(props) => {
            return (<Project3
              changeHighlight={(highlight) => this.changeHighlight(highlight)}
              {...props} />);}} />
          <Route path="/" component={About}
            changeHighlight={(highlight) => this.changeHighlight(highlight)}
            highlightedAbout= {this.state.highlightedAbout}
            highlightedProjects= {this.state.highlightedProjects}
            highlightedName= {this.state.highlightedName}
          />
        </Switch>
      </div>;
    if (this.state.width <= 750) {
      if (this.state.highlightedName === 'highlighted') {
        page = <div className="app">
        <Header 
          changeHighlight={(highlight) => this.changeHighlight(highlight)}
          highlightedAbout= {this.state.highlightedAbout}
          highlightedProjects= {this.state.highlightedProjects}
          highlightedName= {this.state.highlightedName}
          width= {this.state.width}
          />
          <Route exact path="/projects" component={Projects} />
          <div className="about">
          <div className="landing">
            <p className="intro1">Hey there! I'm a software developer living in Seattle, Washington.</p>
            <p className="intro2">Let's work on your product together!</p>
            <p className="intro-sub">I create full-stack applications from the ground up.</p>
            <p className="intro-sub">Have a project in mind?</p>
            <p className="intro-sub">Drop me a line <a className="intro-email" href="mailto: ijacobzim@gmail.com">ijacobzim@gmail.com</a></p>
            <a className="arrow-holder" href="" onClick={(e) => {
                e.preventDefault();
                  window.scroll({
                    top: (window.innerHeight*1.2),
                    left: 0,
                    behavior: 'smooth'
                  });
                  }} >
              <p className="down-arrow">
              </p>
            </a>
          </div>
        </div>
        </div>
      }
      if (this.state.highlightedAbout === 'highlighted') {
        page = <div><Header 
        changeHighlight={(highlight) => this.changeHighlight(highlight)}
        highlightedAbout= {this.state.highlightedAbout}
        highlightedProjects= {this.state.highlightedProjects}
        highlightedName= {this.state.highlightedName}
        width= {this.state.width}
      />
      <div className="about-holder">
      <h2 className="about-header">About Me</h2>
        <p className="intro-sub about-me-text">I want to produce life changing software. I'm passionate about the capabilities it has, and wish to develop products<a id="about"></a> that make a difference in the world. <br /> <br /> The projects I've worked on are centered around some of my favorite hobbies such as playing guitar, skateboarding, and traveling. I love my hobbies and want to do all that I can to improve them!<br/><br/> I've worked on projects individually and as part of a team. I enjoy working with others as hearing their perspectives is a breath of fresh air. I bring a unique view to software and I'm eager to learn as much as I possibly can!</p>
      </div>
        <div className="footer-down-about">
        <Footer />
        </div>
        </div>
      }
      if (this.state.highlightedProjects === 'highlighted') {
        page = <div><Header 
        changeHighlight={(highlight) => this.changeHighlight(highlight)}
        highlightedAbout= {this.state.highlightedAbout}
        highlightedProjects= {this.state.highlightedProjects}
        highlightedName= {this.state.highlightedName}
        width= {this.state.width}
        />
        <Switch>
          <Route exact path="/wanderlust" render={(props) => {
            return (<Project1
               changeHighlight={(highlight) => this.changeHighlight(highlight)}
              {...props} />);}}
          />
          <Route exact path="/skatespots" render={(props) => {
            return (<Project2
               changeHighlight={(highlight) => this.changeHighlight(highlight)}
              {...props} />);}} />
          <Route exact path="/staccato" render={(props) => {
            return (<Project3
               changeHighlight={(highlight) => this.changeHighlight(highlight)}
              {...props} />);}} />
        </Switch>
        <div className="resp-proj-holder">
        <Projects changeHighlight={() => this.changeHighlight('none')}/>
        </div>
        <div className="footer-down-about">
        <Footer />
        </div>
        </div>
      }
      if (this.state.highlightedProjects === '' && this.state.highlightedName === '' && this.state.highlightedAbout === '') {
        page = <div><Header 
        changeHighlight={(highlight) => this.changeHighlight(highlight)}
        highlightedAbout= {this.state.highlightedAbout}
        highlightedProjects= {this.state.highlightedProjects}
        highlightedName= {this.state.highlightedName}
        width= {this.state.width}
        />
        <Switch>
          <Route exact path="/wanderlust" render={(props) => {
            return (<Project1
              changeHighlight={(highlight) => this.changeHighlight(highlight)}
              {...props} />);}}
          />
          <Route exact path="/skatespots" render={(props) => {
            return (<Project2
              changeHighlight={(highlight) => this.changeHighlight(highlight)}
              {...props} />);}} />
          <Route exact path="/staccato" render={(props) => {
            return (<Project3
              changeHighlight={(highlight) => this.changeHighlight(highlight)}
              {...props} />);}} />
        </Switch>
        </div>
      }
    }
    return (
      <div>
        {page}
      </div>
    );
  }
}

export default App;
