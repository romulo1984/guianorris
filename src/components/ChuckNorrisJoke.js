import React, { Component } from 'react';
import {connect} from 'react-redux';

import {ChuckNorrisSelector} from '../selectors';

class ChuckNorrisJoke extends Component {
  renderEmpty(){
    return <div>Choose a category</div>
  }

  renderLoading(){
    return <div>Loading</div>
  }

  renderJoke(){
    return (
      <div className='chuck-norris-joke'>
        <img src={this.props.currentJoke.icon_url} alt='' />
        <div className='chuck-norris-joke-value'>{this.props.currentJoke.value}</div>
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