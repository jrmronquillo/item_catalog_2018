import React, { Component } from "react";
import ToggleMenu from "./ToggleMenu.js";

class NavBar extends React.Component {
  render() {
    // ...

    // test comment1
    return (
      <div className={this.props.testEnv ? 'display-true' : 'display-false'}>
        <div
          className={
            this.props.stickyNavBarShow
              ? 'navbar-generic navbar-sticky'
              : 'navbar-generic navbar-open '
          }
        >
          <ul
            className={
              this.props.testEnv
                ? 'navbar-generic-test navbar-list'
                : 'navbar-generic navbar-list'
            }
          >
            <li className="navbar-mobile" onClick={this.props.handleToggle}>
              <ToggleMenu handleToggle={this.props.handleToggle} />
            </li>
            <li className="navbar-item" onClick={this.props.handleToggle}>
              <ToggleMenu handleToggle={this.props.handleToggle} />
            </li>

            {this.props.menuItems1.map((item, i) => {
              return (
                <li className="navbar-item" data-category={item} key={item}>
                  <a className="navbar-link-style" href={this.props.urls[i]}>
                    {item.toUpperCase()}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;