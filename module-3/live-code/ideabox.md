# **LIVE CODE - IdeaBox**

## WHAT WE'RE BUILDING

Here is a mock-up of what we want our application to look like... SUPER FANCY!

![ideabox mock-up](../assets/ideabox-spec.png)

Looking at this, take a minute to turn and talk to your neighbor about what components you think we might need. What components will need to have state and which ones won't?

## GETTING STARTED

We're going to be using create-react-app to create and run our aplication. If you don't already have create-react-app installed, you will need to install it globally on your machine.

`npm install -g create-react-app`

Next, let's spin up a new application using create-react-app.

`create-react-app ideabox`

And there we have it, MAGIC! Let's take a look at the information given to us...

![create-react-app](../assets/create-react-app.png)

We need to navigate to our project `cd ideabox`, and we can then start the development server by running `npm start` .

## CLEAN UP AND START FRESH

If you go into the `src` folder, we can delete a couple of files that we are not using (`logo.svg` && `registerServiceWorker.js`).

Next, let's go into `index.js` and delete lines 5 and 8 that import and use the `registerServiceWorker.js` file that we just deleted.

Now, let's take a look at `App.js`. We can delete line 2 that is importing the React Logo as well as the everything inside the `return` statement. We can also delete everything inside the `App.css` file.

## CREATING A CONTROLLED FORM

The first component I want to build out is my IdeaForm that has a title input, a body input, and a submit button. Cool... let's create a new file called `IdeaForm.js`. Now let's think, will our IdeaForm need to have state? It needs to keep track of the title and body that the user inputs, so I think it will. We will also need a method to handle the input change and update our state.

** Don't forget to `export` your IdeaForm and `import` it into `App.js` **

```
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

	render() {
	  return(
		<form>
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
```
Sweet... our IdeaForm is looking pretty good. Now we need to think about submitting the idea. Turn and talk to your neighbor... Where does that functionality need to live? And where should all of our ideas live collectively?

## SUBMITTING AND STORING IDEAS

I'm thinking we want to store all of our ideas in our App component's state. We will also need to create an addIdea function in App that we can pass down as props to our IdeaForm. This function should take in a new idea and create a new copy of state.

```
import React, { Component } from 'react';
import './App.css';
import IdeaForm from './IdeaForm';

class App extends Component {
  constructor() {
    super()
    this.state = { ideas: [] }
  }

  addIdea = (idea) => {
    const ideas = [...this.state.ideas, idea]
    this.setState({ ideas })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IdeaBox</h1>
          <IdeaForm addIdea={this.addIdea} />
        </header>
      </div>
    );
  }
}

export default App;
```

Ok, so now we are passing our addIdea function down to our IdeaForm. Let's talk about what IdeaForm is going to do with it. How about let's put an onSubmit event handler on the form and have it call a submitIdea function that lives inside IdeaForm... BRILLIANT!

```
// IdeaForm.js

submitIdea = (e) => {
  e.preventDefault()
  // const idea = Object.assign({ id: Date.now() }, this.state)
  const idea = { ...this.state, id: Date.now() }
  this.props.addIdea(idea)
  this.setState({ title: '', body: '' })
}
```

At this point, our idea object functions just fine with just what's being kept in state. However, our ideas will probbaly need an id in the future (in the event we want to delete an idea), so I went ahead and added that property to our idea object. We can accomplish this by using `Object.assign` or by taking advantage of the cool `...spread operator`.

## DISPLAY IDEAS ON THE PAGE

Currently, our array of ideas is being stored in our App's state. We need to somehow pass that array down to a container that will hold our idea cards. Let's first create an IdeaContainer that will be rendered in App. Does our IdeaContainer need to be stateful? Nope, we just need to be able to pass it some props.

```
import React from 'react';
import Card from './Card';

const IdeaContainer = ({ ideas }) => {
  const ideaCards = ideas.map(idea => <Card {...idea} key={idea.id} />)
  const display = ideas.length ? ideaCards : 'Create some ideas'

  return(
    <div>
      {display}
    </div>
  )
}

export default IdeaContainer;
```

Here, I'm mapping over the idea array and returning an idea card (giving it a key and all its properties to passed to the card).

I'm also checking to see if there are any ideas in the idea array. If there are, the idea cards will be displayed; if not, the user will see a message to 'Create some ideas'.

Since we are returning an idea card, we probably need to create it. The idea card receives all the properties of the idea as props and renders them on the card.

```
import React from 'react';

const Card = ({ title, body, id }) => {
  return(
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Card;
```

We can display ideas on the page!!! Only thing left to do now is be able to delete an idea.

## DELETE AN IDEA

So, we said earlier that each idea would need an id for us to be able to delete an idea. Where do you think this functionality should live? If you said in the App component, YOU'RE TOTALLY RIGHT! But first, we need to add a delete button to each of our idea cards that will call that function that is passed down from App => IdeaContainer => Card.

```
import React from 'react';

const Card = ({ title, body, id, deleteIdea }) => {
  return(
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => deleteIdea(id)}>Delete</button>
    </div>
  )
}

export default Card;
```

Now, let's write our delete function. I'm thinking we need to filter through our array of cards in state and only return the ones that do not match the id that is passed in.

```
// App.js

deleteIdea = (id) => {
  const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)
  this.setState({ ideas: filteredIdeas })
  }
```

** Don't forget to pass this function down to the idea card **
