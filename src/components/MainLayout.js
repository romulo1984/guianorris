import React, { Component } from 'react';

import NorrisCategoriesList from './NorrisCategoriesList';

class MainLayout extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-12 py-5">
                <div className="media">
                  <img className="align-self-center mr-4 rounded-circle" src="chuck-norris-avatar.jpg" alt="Chuck Norris" width="100" />
                  <div className="align-self-center media-body">
                    <h3 className="mt-0">Welcome to Guia Norris</h3>
                    <h5>where Guia Bolso family follow Chuck Norris</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <NorrisCategoriesList />
            </div>
            <div className="col-lg-8 mb-3">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainLayout