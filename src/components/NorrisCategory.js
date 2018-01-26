import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as NorrisApi from '../api/NorrisApi';
import {ChuckNorrisAction} from '../actions';

import {ChuckNorrisSelector} from '../selectors';

class NorrisCategory extends Component {
  constructor(props){
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event){
    this.props.setIsLoadingJoke();

    this.props.setActiveCategory(this.props.categoryName);

    NorrisApi.getNorrisJoke(this.props.categoryName)
    .then(apiResponse => this.props.setCurrentJoke(apiResponse.data));
  }

  render() {
    return (
      <a href="#" className={`list-group-item list-group-item-action py-2 ${this.props.activeCategory == this.props.categoryName ? 'active' : ''}`} onClick={this.handleOnClick}>
        {this.props.categoryName}
      </a>
    );
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setIsLoadingJoke: () => {
      return dispatch(ChuckNorrisAction.setIsLoadingJoke());
    },
    setCurrentJoke: (currentJoke) => {
      return dispatch(ChuckNorrisAction.setCurrentJoke(currentJoke));
    },
    setActiveCategory: (category) => {
      return dispatch(ChuckNorrisAction.setActiveCategory(category));
    }
  };
};

const mapStateToProps = function(store, ownProps) {
  return {
    activeCategory: ChuckNorrisSelector.getActiveCategory(store),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NorrisCategory);