import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      stateValue: '',
    };
  }

  createTask = () => {
    this.props.onCreate(this.state.stateValue);
  };

  getValueFromInput = (event) => {
    this.setState({
      stateValue: event.target.value,
    });
  };

  render() {
    return (
      <>
        <InputGroup className="mb-3" onChange={this.getValueFromInput}>
          <FormControl
            placeholder="Type you task here"
            aria-label="Type you task here"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button
              variant="outline-primary"
              onClick={this.createTask}
            >
              Create Task
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <p>{this.state.valueArr}</p>
      </>
    );
  }
}
