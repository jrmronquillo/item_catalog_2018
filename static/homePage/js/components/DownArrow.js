import React, { Component } from "react";

class DownArrow extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.downArrowShow ? 'downArrowVisible' : 'downArrowInvisible'
        }
      >
        <span>&darr;</span>
      </div>
    );
  }
}

export default DownArrow;