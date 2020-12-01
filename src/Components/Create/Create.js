import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      error: false,
    };
  }

  createTask = () => {
    const { taskName } = this.state;

    if (taskName && taskName !== '') {
      this.props.onCreate(this.state.taskName);
      this.setState({ taskName: '' });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  onChangeValue = (event) => {
    const { value } = event.target;
    if (value !== '') {
      this.setState({
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
    this.setState({
      taskName: event.target.value,
    });
  };

  handleBlur = () => {
    this.setState({
      error: false,
    })
  }

  render() {
    const { error } = this.state;
    return (
      <>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type you task here"
            aria-label="Type you task here"
            aria-describedby="basic-addon2"
            value={this.state.taskName}
            onChange={this.onChangeValue}
            onBlur={this.handleBlur}
          />
          <InputGroup.Append>
            <Button variant="outline-primary" onClick={this.createTask}>
              Create Task
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <p
          className="error__text"
          style={{ display: error ? 'block' : 'none' }}
        >
          Type your task in the field please!
        </p>
        {/* <p>{this.state.valueArr}</p> */}
      </>
    );
  }
}
