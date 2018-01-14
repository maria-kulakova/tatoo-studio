import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import TatooExamples from './TatooExamples';
import TatooShowPage from './TatooShowPage';

class Main extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => (
            <TatooExamples tatooList={this.props.tatooList} />
          )} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path={"/:tatoo"} component={TatooShowPage} />
        </Switch>
      </div>
    );
  }

}

export default Main;
