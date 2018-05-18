# Mid Mod Eval

## Description

At the end of Week 3 of the module, we pair with the students for their mid mod
evaluation. This involves building an 'idea box' like application, that creates
fun events, and saves them to a backend. The students are given two repositories
to start with, and are asked to build an app that submits fun events to the
backend, and displays them on the page.

## Expertise evaluated

- React fundamentals
  - Can correctly identify when to create stateful/stateless components
  - Can create a controlled form component
    - Value should be from state
    - Change should be handled with state change
  - Can pass props effectively (data down, actions up)
- Async fundamentals
  - Can use fetch to POST data to a server
  - Can use fetch to GET data from a server
- Ability to leverage documentation when stuck
- Ability to actively communicate thinking

## Important links

* [Frontend](https://github.com/Tman22/funExample)
* [Backend](https://github.com/rrgayhart/fun-parser)

## Here are sample files/solutions:

### FunForm

```js
import React, {Component} from 'react'

class FunForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEvent(this.state);
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    const { name, description } = this.state;

    return(
      <form onSubmit={this.handleSubmit}>
        <label> Event Name </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={this.handleChange}
        />
        <label> Event Details </label>
        <input
          type='text'
          name='description'
          value={description}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default FunForm;
```

### App

```js
import React, { Component } from 'react';
import FunList from './FunList';
import FunForm from './FunForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }

  addEvent = async (funObj) => {
    const funEvent = await fetch('http://localhost:3001/events', {
      method: 'POST',
      body: JSON.stringify(funObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedEvent = await funEvent.json();
    this.updateState(parsedEvent)
  }

  updateState = (funEvent) => {
    this.setState({
      events: [...this.state.events, funEvent]
    })
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>FUN LIST</h2>
          <div className='Event-form'>
            <FunForm addEvent={this.addEvent} />
          </div>
        </div>
        <div className="Fun-area">
          <FunList events={this.state.events} />
        </div>
      </div>
    );
  }
}

export default App;
```

### FunList

```js
import React from 'react';
import FunCard from './FunCard';

const FunList = ({events}) => {

  const eventCards = events.map(event => <FunCard key={event.id} {...event} />)

  return (
    <div>
      {eventCards}
    </div>
  )
}

export default FunList;
```

### FunCard

```js
import React from 'react';

const FunCard = ({ name, description, tags }) => {

  const funTags = tags.map(tag => {
    return <p key={tag}>{tag}</p>
  })

  return(
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      {funTags}
    </div>
  )
}

export default FunCard;
```

## Common student pitfalls

## ToDo's

* [ ] write todos
