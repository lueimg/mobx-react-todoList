import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import store from './TodoStore';
import {observer} from 'mobx-react';

class App extends Component {

  filter (e) {
    this.props.store.filter = e.target.value
  }
  createNew(e) {
    if(e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ''
    }
  }
  toggleComplete (todo) {
    todo.complete = !todo.complete;
  }

  render() {

    const { todos, filter, filteredTodos, clearComplete } = this.props.store;

    const todoList = filteredTodos.map(todo =>(
      <li key={todo.id}>
        <input
          type="checkbox"
          onChange={this.toggleComplete.bind(this, todo)}
          value={todo.complete}
          checked={todo.complete} />
        {todo.value}
      </li>
    ))

    return (
      <div className="App">
        <h1>Todos</h1>
      <div> Create:
          <input
            className='create'
            onKeyPress={this.createNew.bind(this)}
          />
      </div>
        <div>Filter:
          <input
            className="filter"
            value={filter}
            onChange={this.filter.bind(this)}
          />
        </div>
        <ul>{todoList}</ul>
        <a href="#" onClick={clearComplete}>Clear complete</a>
      </div>
    );
  }
}

export default observer(App);
