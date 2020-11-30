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

  getCurrentDate = () => {
    const date = new Date();
    const currentDate = new Date().getDate();
    const currentDay = date.getDay();
    const currentMonth = date.getMonth();
    const fullYear = date.getFullYear();
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const month = 'January, February, March, April, May, June, July, August, September, October, November, December'.split(
      ','
    );
    return `${days[currentDay]}, ${currentDate} ${month[currentMonth]} ${fullYear}`;
  };

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
          <div className="todo__block">
            <input
              className="todo__checkbox"
              type="checkbox"
            />
            <div className="todo__block_inner">
              <p className="todo__text">{todo}</p>
              <p className="todo__date">{this.getCurrentDate()}</p>
            </div>
          </div>
        )}

        <div className="todo__buttons">
          {editMode ? (
            <>
              <button
                className="button btn__save"
                onClick={() => this.handleSave()}
              >
                Save
              </button>
              <button
                className="button btn__cancel"
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
