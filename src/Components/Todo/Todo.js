import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super();
    this.state = {
      editMode: false,
      value: props.todo,
    };
  }

  toggleMode(value) {
    this.setState({
      editMode: value,
    });
  }

  handleSave() {
    this.props.onSave(this.state.value);
    this.setState({
      editMode: false,
    });
  }

  render() {
    const { todo } = this.props;
    const { editMode, value } = this.state;
    return (
      <div className="todo__item">
        {editMode ? (
          <input
            value={value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        ) : (
          <p className="todo__text">{todo}</p>
        )}

        <div className="todo__buttons">
          {editMode ? (
            <>
              <button
                className="button btn__delete"
                onClick={() => this.handleSave()}
              >
                Save
              </button>
              <button
                className="button btn__delete"
                onClick={() => this.toggleMode(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="button btn__edit"
                onClick={() => this.toggleMode(true)}
              >
                Edit
              </button>
              <button
                className="button btn__delete"
                onClick={() => this.props.onDelete()}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}
