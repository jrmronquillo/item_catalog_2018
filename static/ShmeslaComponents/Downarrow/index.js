import React, { Component } from 'react';

class Downarrow extends Component {
  render() {
    return (
      <div className="container-downarrow mx-auto animate-bounce">
        {this.props.downArrowDisplay && <span><i class="fas fa-chevron-down"></i></span>}
      </div>
    );
  }
}

export default Downarrow;