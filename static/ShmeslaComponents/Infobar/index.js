
import React, { Component } from 'react';

class Infobar extends Component {
  render() {
    return (
      <div className="container container-infobar mx-auto" >
        <div className="row">
          <div className="col-sm-2">
          </div>
          <div className="col-sm-2">
            <div className="row ml-5">
              <div onClick={this.props.handleClick} className="container-digit info-text-1">
                <span className="animate" id='digit1'>3 2 3 4 5 6 7 8 9 0</span>
              </div>
              <div className="align-top">
                <span className="info-text-1" id='digit-period'>.</span>
              </div>
              <div onClick={this.props.handleClick} className="container-digit info-text-1">
                <span className="animate2" id='digit2'>2 2 3 4 5 6 7 8 9 0</span>

              </div>
              <span className="info-text-1">s</span>
            </div>
          </div>

          <div id="info-text-2" className="border-left col-sm-2 info-text-animate">
            <span> 325 cm </span>
          </div>
          <div id="info-text-3" className="border-left col-sm-2 info-text-animate">
            <span> AWD </span>
          </div>
          <div id="info-text-4" className=" border-left col-sm-2 info-text-animate">
            <a href="http://google.com" className="btn btn-outline-light oval-outline"> Order Now </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Infobar;


