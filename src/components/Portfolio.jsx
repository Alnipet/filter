import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList'

export class Portfolio extends Component {
  state = {
    activeCategory: 'All',
  };

  itemCategory = ['All', 'Websites', 'Flayers', 'Business Cards'];

  handleClick = (event) => {
    this.setState((prevState) => ({ activeCategory: event.target.textContent }));
  };

  render() {
    return (
      <div className="container">
        <Toolbar
        itemCategory={this.itemCategory}
        activeCategory={this.state.activeCategory}
        onSelectFilter={this.handleClick}
      />
      <ProjectList activeCategory={this.state.activeCategory}/>
      </div>
    );
  }
}

export default Portfolio;
