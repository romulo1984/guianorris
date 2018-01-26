import React, { Component } from 'react';
import {connect} from 'react-redux';

import ReactLoading from 'react-loading';

import NorrisCategory from './NorrisCategory';
import {ChuckNorrisSelector} from '../selectors';

class NorrisCategoriesList extends Component {
  renderLoading(){
    return (
      <div className="card py-5">
        <div className="card-body d-flex justify-content-center">
          <ReactLoading type="spin" className="text-center" color="#ccc" delay={0}/>
        </div>
      </div>
    )
  }

  renderCategories(){
    return this.props.norrisCategories.map((categoryName, index) => <NorrisCategory key={index} categoryName={categoryName} />);
  }

  render() {
    return (
      <div className="list-group">
        <li className="list-group-item list-group-item-light">
          <h4>Categories</h4>
        </li>
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
