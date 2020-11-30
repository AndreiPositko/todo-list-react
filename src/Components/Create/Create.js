import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      stateValue: '',
      error: false,
    };
  }

  createTask = () => {
    const { stateValue } = this.state;

    if (stateValue && stateValue !== '') {
      this.props.onCreate(this.state.stateValue);
      this.setState({ stateValue: '' });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  getValueFromInput = (event) => {
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
      stateValue: event.target.value,
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
            value={this.state.stateValue}
            onChange={this.getValueFromInput}
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
