import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as NorrisApi from '../api/NorrisApi';
import {ChuckNorrisAction} from '../actions';
import MainLayout from './MainLayout';

import ChuckNorrisJoke from './ChuckNorrisJoke';

import './GuiaNorris.css';

class GuiaNorris extends Component {
  constructor(props){
    super(props);

    NorrisApi.getNorrisCategories()
    .then(apiResponse => this.props.setNorrisCategories(apiResponse.data));
  }

render() {
  return (
    <MainLayout>
      <ChuckNorrisJoke />
    </MainLayout>
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

export default connect(null, mapDispatchToProps)(GuiaNorris);
