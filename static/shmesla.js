//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './css/App.css';
//import Title from './ShmeslaComponents/Title';
//import Navbar from './ShmeslaComponents/Navbar';
//import Infobar from './ShmeslaComponents/Infobar';
//import Downarrow from './ShmeslaComponents/Downarrow';
//import Sidemenu from './ShmeslaComponents/Sidemenu';
//import Backdrop from './ShmeslaComponents/Backdrop';
//import Sidenav from './ShmeslaComponents/Sidenav';


'use strict';


const e = React.createElement;

class Navbar extends React.Component {
  render() {
    return (
      <div className="container-navbar" >
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand font-white" href="http://google.com">SHMESLA</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link font-white font-navbar" href="http://google.com">Tool A</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-white font-navbar" href="http://google.com">Tool B</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-white font-navbar" href="http://google.com">Tool C</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-white font-navbar" href="http://google.com">Tool D</a>
              </li>
            </ul>
            <span className="icons-test" onClick={this.props.sideMenuToggle}>
              {!this.props.sideMenuDisplay && <i className="fas fa-bars icon-color-white"></i>}
              {this.props.sideMenuDisplay && <i className="fas fa-times icon-color-black"></i>}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

class Sidemenu extends React.Component {
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

class Title extends React.Component {
  render() {
    return (
      <div className="text-main-title">
        <p>Shmesla</p>
      </div>
    );
  }
}

class Infobar extends React.Component {
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

class Downarrow extends React.Component {
  render() {
    return (
      <div className="container-downarrow mx-auto animate-bounce">
        {this.props.downArrowDisplay && <span><i class="fas fa-chevron-down"></i></span>}
      </div>
    );
  }
}

class Backdrop extends React.Component {
  render() {
    return (
      <div onClick={this.props.sideMenuToggle} className={this.props.sideMenuDisplay ? "container-backdrop" : "display-off"}>

      </div>
    );
  }
}

class Sidenav extends React.Component {
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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shouldScroll : false,
      sideMenuDisplay: false,
      lastPageYOffset: 0,
      currentSectionDisplayed: '#appHeader',
      downArrowDisplay: true,
      eventStarter: true,
      wheelDirection: '',
      previousWheelDirection: '',
      wheelEnd: false,
    };

  this.triggerNumScroll = this.triggerNumScroll.bind(this);
  this.sideMenuToggle = this.sideMenuToggle.bind(this);
  this.sideMenuClose = this.sideMenuClose.bind(this);
  this.scrollIntoViewTest = this.scrollIntoViewTest.bind(this);
  this.handleScroll = this.handleScroll.bind(this);
  this.handleWheel = this.handleWheel.bind(this);
  //this.wheelEnd = this.wheelEnd.bind(this);
  this.checkDirectionChange = this.checkDirectionChange.bind(this);

  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('wheel', this.handleWheel);
  }


  handleWheel(e){
    //e.preventDefault();
    //e.stopPropagation();
    //e.returnValue = false;
    //console.log('handleWheel triggered!');
    //console.log('previousWheelDirection:'+this.state.previousWheelDirection)
    //console.log(e.wheelDelta);

    // set wheelDirection according to wheelDelta
    if(e.wheelDelta>0){
      this.setState({
        wheelDirection: 'up',
      })
    } else {
      this.setState({
        wheelDirection: 'down',
      })
    }
    // only call scroll action when there is a change in scroll direction
    this.checkDirectionChange()
    return false;

  }

  checkDirectionChange(){
    // to prevent the window.scroll action from triggering multiple times,
    // it is only called when there is a change in scroll direction
    console.log('current wheel direction: '+this.state.wheelDirection);
    if(this.state.wheelDirection === this.state.previousWheelDirection){
      console.log('Do nothing');
    } else {
      console.log('scroll action should trigger here');
      if(this.state.wheelDirection === 'up'){
        window.scrollTo(0, document.getElementById('appHeader').offsetTop)
      } else {
        window.scrollTo(0, document.getElementById('section1').offsetTop)
      }
    }

    this.setState({
      previousWheelDirection: this.state.wheelDirection,
    })
  }


  handleScroll(e){

    console.log(this.state.currentSectionDisplayed);
    console.log('handleScroll triggered!');
    console.log(window.pageYOffset);
    if (window.pageYOffset === document.getElementById('appHeader').offsetTop){
      console.log('tried to scroll to #appHeader');
      this.setState({
        currentSectionDisplayed: '#appHeader',
      })
    } else{
      this.setState({
        currentSectionDisplayed: 'section1',
      })
    }
  }

  scrollThere(target){
    console.log('scroll there triggered');
    window.scrollTo(0,0)
  }

  scrollIntoViewTest(target){
    console.log('scrollIntoViewTest Triggered!')
    //console.log(target);
    //var el = document.getElementById(target);
    //target.scrollIntoView();
    target.scrollTop();
    //target.scrollIntoView(false);
    //target.scrollIntoView({block: "end"});
    //target.scrollIntoView({behavior: "auto", block: "end", inline: "nearest"});
  }

  triggerNumScroll(){
    console.log('triggerNumScroll executed');
    this.setState({
      shouldScroll: true,
    })
  }


  sideMenuClose(){
    console.log('sideMenuClose triggered!');
    this.setState({
      sideMenuDisplay: false,
    })
  }

  sideMenuToggle(){
    console.log('sideMenuToggle triggered!');
    this.setState({
      sideMenuDisplay: !this.state.sideMenuDisplay,
    })
  }


  render() {
    return (

      <div className="App">
        <div className="App-header-shmesla" id="appHeader" >
          <Navbar sideMenuToggle={this.sideMenuToggle} sideMenuDisplay={this.state.sideMenuDisplay} />
          <Sidemenu sideMenuDisplay={this.state.sideMenuDisplay} sideMenuClose={this.sideMenuClose}  />
          <Title />
          <span className="text-main-subtitle">Model A</span>
          <Infobar handleClick={this.triggerNumScroll} />
          <Downarrow />
          <Backdrop sideMenuToggle={this.sideMenuToggle} sideMenuDisplay={this.state.sideMenuDisplay} />
        </div>
        <div id="section1">
          <div className="section-header-text">
            <span className="font-white"></span>
          </div>
        </div>
        <Sidenav scrollIntoViewTest={this.scrollIntoViewTest} currentSectionDisplayed={this.state.currentSectionDisplayed} />
      </div>
    );
  }
}

const domContainer = document.querySelector('#react_main_container');
ReactDOM.render(< App />, domContainer);
