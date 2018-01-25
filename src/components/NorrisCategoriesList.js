import React, { Component } from 'react';
import {connect} from 'react-redux';

import NorrisCategory from './NorrisCategory';
import {ChuckNorrisSelector} from '../selectors';

class NorrisCategoriesList extends Component {
  renderLoading(){
    return <span>Loading...</span>
  }

  renderCategories(){
    return this.props.norrisCategories.map((categoryName, index) => <NorrisCategory key={index} categoryName={categoryName} />);
  }

  render() {
    return (
      <div className="norris-categories-list">
        {this.props.norrisCategories && this.props.norrisCategories.length ? this.renderCategories() : this.renderLoading()}
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
