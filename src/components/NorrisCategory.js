import React, { Component } from 'react';
import {connect} from 'react-redux';

import {ChuckNorrisAction} from '../actions';

class NorrisCategory extends Component {
  constructor(props){
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event){
    console.log(this.props.categoryName)
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
    setNorrisCategories: (categories) => {
      return dispatch(ChuckNorrisAction.setNorrisCategories(categories));
    },
  };
};

export default connect(null, mapDispatchToProps)(NorrisCategory);