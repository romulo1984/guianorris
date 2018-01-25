import React, { Component } from 'react';
import * as NorrisApi from './NorrisApi';
import './GuiaNorris.css';

class NorrisCategoriesList extends Component {
  constructor(props){
    super(props);

    NorrisApi.getNorrisCategories()
    .then(categories => console.log(categories.data));
  }

  render() {
    return (
      <div className="norris-categories-list">
        norris-categories-list
      </div>
    );
  }
}

export default NorrisCategoriesList;
