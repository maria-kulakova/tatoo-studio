import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TatooName from './TatooName';

class TatooExamples extends Component {
  render() {
    return (
      <div>
        {this.props.tatooList.map((name, index) => (
          <div key={index}>
            <TatooName name={name} />
            <Link to={'/'+(index+1)}>Show</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default TatooExamples;
