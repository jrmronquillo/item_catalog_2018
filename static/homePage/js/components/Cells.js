import React, { Component } from "react";

class Cells extends React.Component {
  render() {
    // ...
    return (
      <div className={this.props.testEnv ? 'test-env' : 'prod'}>
        <div className="card" />
      </div>
    );
  }
}

export default Cells;