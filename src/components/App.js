import React, { Component } from 'react';

import Header from './header';

import About from './about';

import Projects from './projects';

import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedAbout: "highlighted",
      highlightedProjects: ""
    }
  }

  changeHighlight(highlight) {

    if (highlight === 'about') {
      this.setState({
        highlightedAbout: "highlighted",
        highlightedProjects: ""
      })
    }

    if (highlight === 'projects') {
      console.log('here');
      this.setState({
        highlightedAbout: "",
        highlightedProjects: "highlighted"
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
         />
        <About 
          changeHighlight={(highlight) => this.changeHighlight(highlight)}
          highlightedAbout= {this.state.highlightedAbout}
          highlightedProjects= {this.state.highlightedProjects}
        />
        <Projects />
      </div>
    );
  }
}

export default App;
