import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  searchTodo = (e) => {
    const { value } = e.target;
    this.props.onSearch && this.props.onSearch(value);
    console.warn(e.target.value);
  };

  render() {
    return (
      <>
        <input
          className="search__input"
          type="text"
          placeholder="Find your duties"
          onChange={this.searchTodo}
        />
      </>
    );
  }
}
