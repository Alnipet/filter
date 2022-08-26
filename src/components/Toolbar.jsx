import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Toolbar extends Component {
  static propTypes = {
    itemCategory: PropTypes.array,
    activeCategory: PropTypes.string,
    onSelectFilter: PropTypes.func,
  };

  render() {
    const { itemCategory, activeCategory, onSelectFilter } = this.props;
    return (
      <div className="list-eventWrapper">
        <ul className="item-list">
          {itemCategory.map((item) => (
            <li
              key={item}
              onClick={onSelectFilter}
              className={item === activeCategory ? 'item-category active' : 'item-category'}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Toolbar;
