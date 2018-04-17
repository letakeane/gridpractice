# React Whiteboard Challenge

### Instructions to student

* Assume you are given a form component that creates an idea with a title, body & id
* Create the following components: **App**, **IdeaContainer**, and **Card**
* You should be able to pass ideas down to the cards
* You should be able to add new ideas
* You should be able to remove ideas (students may not have time to get to this piece, but she be able to verbalize what this would look like)

## Example App Component

```javascript
// App.js

class App extends Component {
  constructor() {
    super()
      this.state = {
        ideas: []
     }
  }
  
  addIdea = (idea) = {
    const ideas = [...this.state.ideas, idea]
    this.setState({ ideas })
  }
  
  deleteIdea = (id) = {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas: filteredIdeas })
  }
  
  render() {
    return (
      <div>
        <IdeaForm addIdea={this.addIdea} />
        <IdeaContainer ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </div>
    )
  }
}
```

## Example IdeaContainer Component

```javascript
// IdeaContainer.js

const IdeaContainer = ({ ideas, deleteIdea }) => {

  const ideaCards = ideas.map(idea => {
    return <Card
      {...idea}
      key={idea.id}
      deleteIdea={deleteIdea}
    />
  })

  return (
    <div>
      {ideaCards}
    </div>
  )
}
```

## Example Card Component

```javascript
// Card.js

const Card = ({ title, body, id, deleteIdea }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => deleteIdea(id)}>Delete</button>
    </div>
  )
}
```
