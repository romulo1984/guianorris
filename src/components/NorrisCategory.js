import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as NorrisApi from '../api/NorrisApi';
import {ChuckNorrisAction} from '../actions';

class NorrisCategory extends Component {
  constructor(props){
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event){
    NorrisApi.getNorrisJoke(this.props.categoryName)
    .then(apiResponse => {
      console.log(apiResponse.data);
      this.props.setCurrentJoke(apiResponse.data)
    });
  }

  render() {
    return (
      <div className="norris-category" onClick={this.handleOnClick}>
        {this.props.categoryName}
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setCurrentJoke: (currentJoke) => {
      return dispatch(ChuckNorrisAction.setCurrentJoke(currentJoke));
    },
  };
};

export default connect(null, mapDispatchToProps)(NorrisCategory);