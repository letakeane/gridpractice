# Redux Whiteboard Challenge

## Instructions: Turn this component into a container (connect it to the store)

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

## Students should whiteboard the following files:

### Actions

```js
// actions/index.js
export const addTodo = (text, id) => ({
 type: 'ADD_TODO',
 text,
 id
})
```

### Reducers

```js
// reducers/todos.js
export const todos = (state = [], action) => {
 switch(action.type) {
  case 'ADD_TODO':
   return [...state, {text: action.text, id: action.id}]
  default:
   return state
 }
}
```

```js
// reducers/index.js

import { combineReducers } from 'redux'
import { todos } from './todos'

const rootReducer = combineReducers({
 todos
})

export default rootReducer
```

### index.js

```js
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, devTools)

ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>, document.getElementById('root)
```
