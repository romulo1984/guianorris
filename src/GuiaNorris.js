import React, { Component } from 'react';
import NorrisCategoriesList from './NorrisCategoriesList';
import './GuiaNorris.css';

class GuiaNorris extends Component {
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

export default GuiaNorris;
