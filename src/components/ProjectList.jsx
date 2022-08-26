import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ProjectList extends Component {
  static propTypes = {
    activeCategory: PropTypes.string,
  };

  projectList = [
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
      category: 'Business Cards',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
      category: 'Business Cards',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
      category: 'Business Cards',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
      category: 'Flayers',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
      category: 'Business Cards',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
      category: 'Business Cards',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
      category: 'Flayers',
    },
  ];

  render() {
    const { activeCategory } = this.props;
    const arr = [];
    this.projectList.forEach((project) => {
      if (activeCategory === 'All' || project.category === activeCategory) arr.push(project);
    });

    const len = arr.length;
    const row = Math.floor(len / 3) + 1;
    console.log(arr, len, row)
    const style = {
      maxHeight: `${350 * row}px`,
    };

    return (
      <ul className="project-list" style={style}>
        {arr.map((project, index) => {
          return (
            <li key={index} className="project-item">
              <img className="item-img" src={project.img} alt={`Изображение категории: ${project.category}`}></img>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ProjectList;
