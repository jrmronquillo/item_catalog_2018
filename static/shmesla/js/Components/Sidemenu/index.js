import React, { Component } from 'react';

class Sidemenu extends Component {
  render() {
    return (
      <div onClick={this.props.sideMenuToggle} className={this.props.sideMenuDisplay ? "container-sidemenu-open font-color-invert": "container-sidemenu-close font-color-invert"}>
   		<ul className="list-group">
   			<li className="list-group-item">
   				Menu Item
   			</li>
   			<li className="list-group-item">
   				<button className="btn btn-warning">Exit Demo</button>
   			</li>

   		</ul>

      </div>
    );
  }
}

export default Sidemenu;