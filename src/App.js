import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/search';
import Create from './Components/create';
import ListOfTodos from './Components/listOfTodos';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (value) => {
    const { todos } = this.state;
    let newTodos = [value, ...todos];
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
    const { todos } = this.state;
    this.setState({
      todos: todos.splice(index, 1),
    });
  };

  render() {
    console.log('_______', this.state.todos);
    return (
      <div className="container">
        <div className="wrapper">
          <div className="input__block">
            <h1 className="main__title">ToDo List</h1>
            <Search />
            <Create onCreate={this.addTodo} />
            <ListOfTodos
              todos={this.state.todos}
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
