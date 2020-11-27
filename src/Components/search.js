import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <>
        <input
          className="search__input"
          type="text"
          placeholder="Find your duties"
        />
      </>
    );
  }
}
