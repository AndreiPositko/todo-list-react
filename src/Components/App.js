import React, { Component } from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Components/Search/Search';
import Create from '../Components/Create/Create.js';
import ListOfTodos from '../Components/ListOfTodos/ListOfTodos';
import { api } from '../utils/api';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      search: '',
    };
  }

  async renderTodo() {
    const todos = await api.getTodos();
    this.setState({
      todos,
    });
  }

  componentDidMount() {
    this.renderTodo();
  }

  addTodo = async (value) => {
    const id = new Date().valueOf();
    const isDone = false;
    const { todos } = this.state;
    const createdTodo = await api.createTodo({ value, id, isDone });
    if (createdTodo && createdTodo.id) {
      this.setState({
        todos: [
          ...todos,
          {
            value: createdTodo.value,
            id: createdTodo.id,
          },
        ],
      });
    }
  };

  editTodo = async (data) => {
    await api.editTodo(data);
    this.renderTodo();
  };

  deleteTodo = async (id) => {
    await api.deleteTodo(id);
    this.renderTodo();
  };

  searchTodo = (search) => {
    this.setState({
      search,
    });
  };

  filterTodo = () => {
    const { todos, search } = this.state;
    return todos.filter((todo) => todo.value.toLowerCase().includes(search));
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="input__block">
            <h1 className="main__title">ToDo List</h1>
            <Search onSearch={this.searchTodo} />
            <Create onCreate={this.addTodo} />
            <ListOfTodos
              todos={this.filterTodo()}
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
