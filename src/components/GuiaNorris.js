import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as NorrisApi from '../api/NorrisApi';
import {ChuckNorrisAction} from '../actions';
import NorrisCategoriesList from './NorrisCategoriesList';
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
      <div className="guia-norris">
        <div className="guia-norris-header">
          <h1 className="guia-norris-title">Welcome to Guia Norris</h1>
          <h5>where Guia Bolso family follow Chuck Nurris</h5>
        </div>
        <div className="guia-norris-content">
          <div className="guia-norris-content-left">
            <NorrisCategoriesList />
          </div>
          <div className="guia-norris-content-right">
            <ChuckNorrisJoke />
          </div>
        </div>
        <div className="guia-norris-footer">
          Developed by Freddy Brasileiro.
        </div>
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

export default connect(null, mapDispatchToProps)(GuiaNorris);
