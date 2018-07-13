import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './header';

import About from './about';

import Project1 from './project1';
import Project2 from './project2';
import Project3 from './project3';

import '../stylesheets/App.css';
import '../stylesheets/footer.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedAbout: "",
      highlightedProjects: "",
      highlightedName: "highlighted"
    }
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
  }

  render() {
    return (
      <div className="app">
        <Header 
          changeHighlight={(highlight) => this.changeHighlight(highlight)}
          highlightedAbout= {this.state.highlightedAbout}
          highlightedProjects= {this.state.highlightedProjects}
          highlightedName= {this.state.highlightedName}
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
      </div>
    );
  }
}

export default App;
