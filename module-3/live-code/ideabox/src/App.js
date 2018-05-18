import React, { Component } from 'react';
import './App.css';
import IdeaForm from './IdeaForm';
import IdeaContainer from './IdeaContainer';

class App extends Component {
  constructor() {
    super()
    this.state = { ideas: [] }
  }

  addIdea = (idea) => {
    const ideas = [...this.state.ideas, idea]
    // if we add the id here istead of in the form ...
    // const ideas = [...this.state.ideas, {...idea, id: Date.now()}]
    this.setState({ ideas })
  }

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas: filteredIdeas })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IdeaBox</h1>
          <IdeaForm addIdea={this.addIdea} />
        </header>
        <IdeaContainer ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </div>
    );
  }
}

export default App;
