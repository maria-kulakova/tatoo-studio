import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tatooList: ["first","second","third","fourth"]
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Content tatooList={this.state.tatooList}/>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
