import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

class Content extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main tatooList={this.props.tatooList}/>
      </div>
    );
  }
}

export default Content;
