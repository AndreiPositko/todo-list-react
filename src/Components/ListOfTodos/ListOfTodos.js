import React, { Component } from 'react';
import Todo from '../Todo/Todo';

export default class ListOfTodos extends Component {
  render() {
    const { todos, onEditTodo, onDeleteTodo } = this.props;
    return (
      <div className="list__todos">
        {Array.isArray(todos) && todos.length !== 0 ? (
          todos.map((item) => (
            <Todo
              todo={item}
              key={item.id}
              onSave={(value) => onEditTodo({ ...item, value })}
              onDelete={() => onDeleteTodo(item.id)}
              onStatus={(isDone) => onEditTodo({ ...item, isDone })}
            />
          ))
        ) : (
          <span className="text__nodata">
            There is no data in your list of Todos
          </span>
        )}
      </div>
    );
  }
}
