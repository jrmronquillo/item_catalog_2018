import React, { Component } from 'react';

class Backdrop extends Component {
  render() {
    return (
      <div onClick={this.props.sideMenuToggle} className={this.props.sideMenuDisplay ? "container-backdrop" : "display-off"}>
        
      </div>
    );
  }
}

export default Backdrop;