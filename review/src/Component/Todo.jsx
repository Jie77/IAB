import React from 'react';
import TodoList from './TodoList';
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.text.length) {
      return ;
    }
    this.setState({
      items: this.state.items.concat({
        id: Date.now(),
        text: this.state.text
      }),
      text: ''
    })
  }

  handleChange = (e) => {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoList items={this.state.items}></TodoList>
        <form>
          <input value={this.state.text} onChange={this.handleChange} />
        </form>
        <button onClick={this.handleSubmit}>Add todo</button>
      </div>
    )
  }

}

export default Todo;