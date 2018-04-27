import React, { Component } from 'react';

class IdeaForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  submitIdea = (e) => {
    e.preventDefault()
    // const idea = Object.assign({ id: Date.now() }, this.state)
    const idea = { ...this.state, id: Date.now() }
    // if we were to add the id in addIdea instead of submitIdea, we would just pass in this.state to this.props.addIdea
    this.props.addIdea(idea)
    this.setState({ title: '', body: '' })
  }

  render() {
    return(
      <form onSubmit={this.submitIdea}>
        <input
          type='text'
          placeholder='title'
          name='title'
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <input
          type='text'
          placeholder='body'
          name='body'
          value={this.state.body}
          onChange={this.handleInputChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default IdeaForm;
