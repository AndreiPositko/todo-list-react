import React, { Component } from 'react';
import Todo from '../Todo/Todo';

export default class ListOfTodos extends Component {
  render() {
    const { todos, onEditTodo, onDeleteTodo } = this.props;
    return (
      <div className="list__todos">
        {Array.isArray(todos)
          ? todos.map((item) => (
              <Todo
                todo={item.value}
                key={item.id}
                onSave={(value) => onEditTodo(item.id, value)}
                onDelete={() => onDeleteTodo(item.id)}
              />
            ))
          : 'no data'}
      </div>
    );
  }
}
