import React, { Component } from "react";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
     this.state = {
     	prod: true,
     }
   }

   render(){
   	return(
   		<div>
   			<h1> Test Component</h1>

   		</div>
   	)
   }
}


export default QuoteMachine;