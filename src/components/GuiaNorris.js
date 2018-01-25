import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as NorrisApi from '../api/NorrisApi';
import {ChuckNorrisAction} from '../actions';
import NorrisCategoriesList from './NorrisCategoriesList';

import './GuiaNorris.css';

class GuiaNorris extends Component {
  constructor(props){
    super(props);

    NorrisApi.getNorrisCategories()
    .then(apiResponse => {
      this.props.setNorrisCategories(apiResponse.data);
      console.log(apiResponse.data)
    });
  }

  render() {
    return (
      <div className="guia-norris">
        <div className="guia-norris-header">
          <h1 className="guia-norris-title">Bem vindo ao Guia Norris</h1>
        </div>
        <div className="guia-norris-content">
          <div className="guia-norris-content-left">
            <NorrisCategoriesList />
          </div>
          <div className="guia-norris-content-right">Result</div>
        </div>
        <div className="guia-norris-footer">
          Desenvolvido por Freddy Brasileiro.
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
