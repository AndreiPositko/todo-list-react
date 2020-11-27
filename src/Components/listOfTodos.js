import React, { Component } from 'react';
import Todo from './todo';

export default class ListOfTodos extends Component {
  render() {
    const { todos, onEditTodo, onDeleteTodo } = this.props;
    return (
      <div className="list__todos">
        {Array.isArray(todos)
          ? todos.map((item, index) => (
              <Todo
                todo={item}
                key={index}
                onSave={(value) => onEditTodo(index, value)}
                onDelete={onDeleteTodo(index)}
              />
            ))
          : 'no data'}
      </div>
    );
  }
}
