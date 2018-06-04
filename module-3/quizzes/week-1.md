# Week 1 Quiz
## Your name:

## Git questions

You been asked to work with the following starter repository:
**https://github.com/turingschool-examples/project.git**. Answer the following
questions:

1) Write the command for cloning this repository to your local machine

<br />
<br />
<br />
 
2) How could you fork this repository to your personal github profile?

<br />
<br />
<br />

3) You need to pull down this repository to your local machine, and then push
your changes to a new repository on github. What are the steps, and the commands
involved?

<br />
<br />
<br />

4) What is the difference between forking and cloning a repository?

<br />
<br />
<br />

##React

Consider the following React component for questions 5-8:

```javascript
import React, { Component } from 'react'

class IdeaForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			description: ''
		}
	}
	
	handleChange = (event) => {
		const { name, value } = event.target
		this.setState({[name]: value})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.addIdea(this.state)
	}
	
	render() {
		return(
			<form className="IdeaForm" onSubmit={this.handleSubmit}>
				<input name="name" onChange={this.handleChange} />
				<input name="description" onChange={this.handleChange} />
				<button>Submit</button>
			</form>
		)
	}
}
```

5) Explain what is happening on the first line. Why is React not inside curly braces, but component is?

<br />
<br />
<br />

6) Why do we call `super` in the constructor? What function is this really calling for us?

<br />
<br />
<br />

7) Imagine we changed our `handleChange` function in the following way:

```javascript
handleChange(event) {
	const { name, value } = event.target
	this.setState({[name]: value})
}
```

How does this change our function? What do we need to do to make our code work? Why?

<br />
<br />
<br />

8) Both our `handleChange` and `handleSubmit` functions take a parameter of `event`. What is this event? What does it give us access to?

<br />
<br />
<br />

9) What is `componentDidMount`? How often is it called?

<br />
<br />
<br />

10) List 4 lifecycle methods

<br />
<br />
<br />

## Fundamental JS

Consider the following arrary for questions 11-13:

```javascript
let cars = ['ford', 'chevy', 'toyota', 'bmw', 'tesla']
```

11) Use an array prototype method to return a new array of the cars with all the letters capitalized.

<br />
<br />
<br />

12) Use a different array prototype method to return a new array of just the cars with 5 letters

<br />
<br />
<br />

13) Use a third array prototype method to return an object where the types of the cars are keys, and the length of each car string is the associated value.

<br />
<br />
<br />

14) Consider the following function:

```javascript
const arrayMultiplier = (multiple) => {
	const nums = [1, 2, 3, 4, 5]
	nums.map(num => num * multiple)
}
```

What is returned by `arrayMultiplier(3)`?

<br />
<br />
<br />

## Vocab

15) What is a *stateless component*?

<br />

16) What is a *bound function*?

<br />

17) 