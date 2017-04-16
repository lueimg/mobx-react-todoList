import { autorun, observable, extendObservable } from 'mobx';

// class TodoStore {
//   @observable todos = [];
//   @observable filter = '';
// }

function Todo(value) {
  extendObservable(this, {
    value: value,
    id: Date.now(),
    complete: false
  })
}

function TodoStore () {
  extendObservable(this, {
    todos: [],
    filter: '',
    get filteredTodos () {
      var matchesFilter = new RegExp(this.filter, 'i');
      return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
    }
  })

  this.createTodo = (value) =>{
    this.todos.push(new Todo(value))
  }

  this.clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todo.replace(incompleteTodos);
  }

}

var store = window.store = new TodoStore;

export default store;

// autorun(() => {
//   console.log(store.filter);
//   console.log(store.todos[0]);
// })
