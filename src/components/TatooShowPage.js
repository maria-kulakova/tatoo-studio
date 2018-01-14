import React, { Component } from 'react';

class TatooShowPage extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.tatoo}
      </div>
    );
  }
}

export default TatooShowPage;
