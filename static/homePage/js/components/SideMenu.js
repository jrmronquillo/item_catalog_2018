import React, { Component } from "react";

class SideMenu extends React.Component {
  render() {
    if (this.props.updatedList.length > 0) {
      return (
        <div
          className={this.props.sideMenuOpen ? 'sideMenuOpen' : 'sideMenuClose'}
        >
          <div id="closeX" onClick={this.props.backdropClickHandler}>
            <div className="xbar" />
            <div className="xbar2" />
          </div>
          <h1>Menu</h1>
          <ul className="listStyle">
            {this.props.updatedList.map((item, i) => {
              return (
                <li
                  className="navbar-link-style"
                  data-category={item}
                  key={item}
                >
                  <a className="navbar-link-style" href={this.props.urls[i]}>
                    {item.toUpperCase()}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div
          className={this.props.sideMenuOpen ? 'sideMenuOpen' : 'sideMenuClose'}
        >
          <div id="closeX" onClick={this.props.backdropClickHandler}>
            <div className="xbar" />
            <div className="xbar2" />
          </div>
          <h1>Menu</h1>
          <input
            onChange={this.props.filterFunction}
            value={this.props.value}
            placeholder="Search..."
          />

          <ul className="listStyle">
            {this.props.defaultMenuItems.map((item, i) => {
              return (
                <li className="list-group-item" key={i}>
                  <a
                    className="link-style"
                    href={this.props.defaultURLS[i]}
                    target="_blank"
                  >
                    {item.toUpperCase()}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}


export default SideMenu;