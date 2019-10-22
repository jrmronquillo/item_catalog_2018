import React, { Component } from 'react';

class Sidenav extends Component {
  render() {
    return (
      <div id="sideNav-index">
          <ul className="list-group list-group-flush">
            <li className="list-group-item container-sideNav-tab sideNav-tab-color">
              <div className="row">
                <div className={this.props.currentSectionDisplayed === '#appHeader' ? "sideNav-tab-active":"sideNav-tab"}></div>
                <div className={this.props.currentSectionDisplayed === '#appHeader' ? "sideNav-text-quickShow" : "sideNav-text"}><a href="#appHeader" className="sideNav-link">Shmesla</a></div>
              </div>
            </li>
            <li className="list-group-item sideNav-tab-color">
              <div className="row">
                <div className={this.props.currentSectionDisplayed === 'section1' ? "sideNav-tab-active":"sideNav-tab"}></div>
                <div className={this.props.currentSectionDisplayed === 'section1' ? "sideNav-text-quickShow" : "sideNav-text"}><a href="#section1" className="sideNav-link">Features</a></div>
              </div>
            </li>
          </ul>
      </div>
    );
  }
}

export default Sidenav;