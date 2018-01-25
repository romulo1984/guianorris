import React, { Component } from 'react';
import {connect} from 'react-redux';

import {ChuckNorrisSelector} from '../selectors';

import './GuiaNorris.css';

class NorrisCategoriesList extends Component {
  render() {
    return (
      <div className="norris-categories-list">
        {this.props.norrisCategories.map(category => <p>{category}</p>)}
      </div>
    );
  }
}

const mapStateToProps = function(store, ownProps) {
  return {
    norrisCategories: ChuckNorrisSelector.getNorrisCategories(store),
  };
};

export default connect(mapStateToProps)(NorrisCategoriesList);
