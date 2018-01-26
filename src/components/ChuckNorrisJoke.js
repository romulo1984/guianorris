import React, { Component } from 'react';
import {connect} from 'react-redux';

import ReactLoading from 'react-loading';

import {ChuckNorrisSelector} from '../selectors';

class ChuckNorrisJoke extends Component {
  renderEmpty(){
    return (
      <div className="card py-5" style={{width: '18rem'}}>
        <div className="card-body d-flex justify-content-center">
          <h4 className="text-muted">Choose a category</h4>
        </div>
      </div>
    )
  }

  renderLoading(){
    return (
      <div className="card py-5" style={{width: '18rem'}}>
        <div className="card-body d-flex justify-content-center">
          <ReactLoading type="spin" className="text-center" color="#ccc" delay={0}/>
        </div>
      </div>
    )
  }

  renderJoke(){
    return (
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="norris.jpg" alt="Chuck Norris" />
        <div className="card-body">
          <h5 className="card-title">
            {this.props.currentJoke.value}
          </h5>
        </div>
      </div>
    );
  }

  render() {
    return this.props.isLoading ? this.renderLoading() : (this.props.currentJoke ? this.renderJoke() : this.renderEmpty())
  }
}

const mapStateToProps = function(store, ownProps) {
  return {
    currentJoke: ChuckNorrisSelector.getCurrentJoke(store),
    isLoading: ChuckNorrisSelector.isLoadingJoke(store),
  };
};

export default connect(mapStateToProps)(ChuckNorrisJoke);