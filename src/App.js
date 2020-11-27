import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search/Search';
import Create from './Components/Create/Create';
import ListOfTodos from './Components/ListOfTodos/ListOfTodos';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      search: '',
    };
  }

  addTodo = (value) => {
    const id = new Date().valueOf();
    const { todos } = this.state;
    let newTodos = [...todos, { value, id }];
    this.setState({ todos: newTodos });
  };

  editTodo = (id, value) => {
    const { todos } = this.state;
    const newTodos = [...todos];
    const index = todos.findIndex((item) => item.id == id);
    newTodos[index].value = value;
    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newArr = [...todos];
    const index = todos.findIndex((item) => item.id == id);
    newArr.splice(index, 1);
    this.setState({
      todos: newArr,
    });
  };

  searchTodo = (search) => {
    this.setState({
      search,
    });
  };

  render() {
    console.log('_______', this.state.todos);
    return (
      <div className="container">
        <div className="wrapper">
          <div className="input__block">
            <h1 className="main__title">ToDo List</h1>
            <Search onSearch={this.searchTodo} />
            <Create onCreate={this.addTodo} />
            <ListOfTodos
              todos={this.state.todos.filter((todo) =>
                todo.value.includes(this.state.search)
              )}
              onEditTodo={this.editTodo}
              onDeleteTodo={this.deleteTodo}
            />
            <p>{this.state.valueFromInput}</p>
          </div>
        </div>
      </div>
    );
  }
}
