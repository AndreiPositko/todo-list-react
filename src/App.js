import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search';
import Create from './Components/Create';
import ListOfTodos from './Components/ListOfTodos';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      search: '',
    };
  }

  addTodo = (value) => {
    const { todos } = this.state;
    let newTodos = [...todos, value];
    this.setState({ todos: newTodos });
  };

  editTodo = (index, value) => {
    console.log('-----------', index, value);
    const { todos } = this.state;
    const newTodos = todos;
    newTodos[index] = value;
    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = (index) => {
    console.log('1111111111', index);
    const { todos } = this.state;
    const newArr = [...todos];
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
                todo.includes(this.state.search)
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
