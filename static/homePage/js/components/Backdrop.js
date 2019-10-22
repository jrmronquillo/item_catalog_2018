import React, { Component } from "react";

class Backdrop extends React.Component {
  render() {
    // ...
    return (
      <div className={
          this.props.sideMenuOpen ? 'backDropVisible' : 'backDropInvisible'
        }
        onClick={this.props.backdropClickHandler}
      />
    );
  }
}

export default Backdrop;