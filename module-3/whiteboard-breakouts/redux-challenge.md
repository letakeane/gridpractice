# Redux Whiteboard Challenge

### Turn this component into a container (connect it to the store)

```js
class IdeaForm extends Component {
 constructor() {
  super()
  this.state = { text: '' }
 }
  
  render() {
   const { handleSubmit, todos } = this.props
   
   return (
    <form onSubmit={(e) => {
     e.preventDefault()
     handleSubmit(this.state.text, todos.length)
    }}>
     <input 
      value={this.state.text}
      placeholder='Add a Todo'
      onChange={(e) => this.setState({ text: e.target.value })}
     />
     <button>Add Todo</button>
    </form>
   ) 
  }
}


export default IdeaForm
```
