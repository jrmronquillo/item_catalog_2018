import React, { Component } from "react";
import Backdrop from "./Backdrop.js";
import SideMenu from "./SideMenu.js";
import ToggleMenu from "./ToggleMenu.js";
import DownArrow from "./DownArrow.js";
import NavBar from "./NavBar.js";
import NavBarBootStrap from "./NavBarBootStrap.js";
import Cells from "./Cells.js";

const menuItems = [
  { testKey: 'http://testUrl1' },
  { 'remote control app': 'http://localhost:5001' },
  { 'multi-user app': 'http://hello-udacity2323232323.appspot.com/blog' },
];

class Home extends Component {
  constructor(props) {
    super(props);
     this.state = {
      prod: true,
      testEnv: false,
      toggleFeature: false,
      name: 'glitch Bot',
      sideMenuOpen: false,
      downArrowShow: true,
      navBarShow: true,
      stickyNavBarShow: false,
      searchInput: '',
      defaultMenuItems: [
        'home',
        'blog (coming soon)',
        'portfolio (coming soon)',
      ],
      urls: ['', ''],
      stashedURLS: [
        'http://10.23.223.22/categories',
        'http://localhost:5000',
        'http://hello-udacity2323232323.appspot.com/blog',
        'http://google.com',
        'http://google.com',
        'http://google.com',
      ],
      updatedList: ['Home', 'Blog', 'Portfolio (Coming Soon)'],
      updatedURLS: ['#section1', 'http://18.222.121.239/', ''],
      importedMenuItems: menuItems,
      skills: [
        'javascript',
        'reactjs',
        'html5',
        'jquery',
        'css',
        'KnockoutJS',
        'Python',
        'Bootstrap',
        'mySQL',
        'PostgreSQL',
        'AJAX',
        'Linux',
        'Git',
        'GRUNTJS',
        'JINJA2',
        'SASS',
        "RESTFul API's",
      ],
      randomSkill: 'HTML',
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
    this.downArrowToggle = this.downArrowScrollHandler.bind(this);
    this.filterFunction = this.filterFunction.bind(this);
    this.skillRandomizer = this.skillRandomizer.bind(this);
    this.toggleNavbarHandler = this.toggleNavbarHandler.bind(this);
    //---Feature Toggle ---
    //this.featuresAreEnabled = this.featuresAreEnabled.bind(this);
  }

  //---- Feature Toggle Logic-----
  //featuresAreEnabled() {
  //  const cookies = new Cookies();
  //console.log(cookies.get('myCookie'));
  //  if (cookies.get('myCookie') === 'testUSER') {
  //    this.setState({
  //      toggleFeature: true,
  //    });
  //  } else {
  //    this.setState({
  //      toggleFeature: false,
  //    });
  //  }
  //}

  componentDidMount() {
    //this.featuresAreEnabled();
    //console.log(this.state.toggleFeature);
    window.addEventListener('scroll', this.downArrowToggle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.downArrowToggle);
  }

  filterFunction(e) {
    var searchStr = '';
    var updatedList = [];
    var updatedURLS = [];
    searchStr = e.target.value.toLowerCase();

    var initialList = this.state.defaultMenuItems;
    var urls = this.state.urls;
    for (var i = 0; i < initialList.length; i++) {
      if (initialList[i].indexOf(searchStr) > -1) {
        updatedList.push(initialList[i]);
        updatedURLS.push(urls[i]);
      }
    }

    this.setState({
      searchInput: e.target.value,
      updatedList: updatedList,
      updatedURLS: updatedURLS,
    });
  }

  handleToggle() {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen,
    });
  }

  handleInputChange(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  backdropClickHandler() {
    this.setState({
      sideMenuOpen: false,
    });
  }

  toggleNavbarHandler() {
    var offsetHeight = document.getElementById('section1').offsetHeight;
    console.log(offsetHeight);
    return offsetHeight;
  }

  downArrowScrollHandler() {
    //console.log('pageYoffset');
    //console.log(window.pageYOffset);
    //console.log(document.getElementById('section1').offsetHeight);
    var offsetHeight = document.getElementById('section1').offsetHeight;

    if (window.pageYOffset === 0) {
      this.setState({
        downArrowShow: true,
        stickyNavBarShow: false,
      });
    } else if (window.pageYOffset > offsetHeight > 0) {
      this.setState({
        navBarShow: false,
        stickyNavBarShow: true,
      });
    } else {
      this.setState({
        downArrowShow: false,
        stickyNavBarShow: false,
      });
    }

    //console.log('stickyNavBarShow state:');
    //console.log(this.state.stickyNavBarShow);
  }

  skillRandomizer() {
    var randomNum = Math.floor(Math.random() * this.state.skills.length);
    this.setState({
      randomSkill: this.state.skills[randomNum],
    });
  }

  // testing the jsx preprocessor
   render(){
    return(
      <div className="home_component_container">
        <Backdrop
          backdropClickHandler={this.backdropClickHandler}
          sideMenuOpen={this.state.sideMenuOpen}
        />

        <div
          id="section1"
          className="section1 section-Styles-test"
          onScroll={this.downArrowToggle}
        >
          <SideMenu
            value={this.state.searchInput}
            menuItems={this.state.importedMenuItems}
            defaultURLS={this.state.urls}
            urls={this.state.updatedURLS}
            filterFunction={this.filterFunction}
            backdropClickHandler={this.backdropClickHandler}
            sideMenuOpen={this.state.sideMenuOpen}
            defaultMenuItems={this.state.defaultMenuItems}
            updatedList={this.state.updatedList}
          />

          <div
            className={
              this.state.testEnv
                ? 'section-text-container'
                : 'section-text-container-test'
            }
          >
            <span className="section-text">Front-end</span>
            <br />
            <span className="section-text">Web Developer</span>
            <br />
            <br />
            <span className="section-text">Hi, I'm</span>
            <span className="font-custom section-text2">Jerome.</span>
          </div>
          <DownArrow downArrowShow={this.state.downArrowShow} />
        </div>
        <div id="section2" className="section2 section-Styles">
          <NavBar
            menuItems1={this.state.defaultMenuItems}
            urls={this.state.updatedURLS}
            stickyNavBarShow={this.state.stickyNavBarShow}
            handleToggle={this.handleToggle}
            testEnv={this.state.testEnv}
          />

          <NavBarBootStrap stickyNavBarShow={this.state.stickyNavBarShow} />

          <div className="section-text-container">
            <span className="section-text">
              I design and build user interfaces.{' '}
            </span>
            <br />
            <span className="section-text">like this one.</span>
            <br />
            <span className="section-text">and I design with: </span>
            <span className="font-custom section-text-unique">
              {this.state.randomSkill}
            </span>
            <br />
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={this.skillRandomizer}
            >
              Learn More
            </button>
          </div>
        </div>
        <div id="section3" className="section3 section-Styles">
          <div className="section-text-container">
            <span className="section-text">
              Every great story starts with a connection...
            </span>
            <br />
          </div>

          <div className="container-cta">
            <span id="cta-text" className="section-text">
              Let's Connect!
            </span>
            <br />
            <button type="button" className="btn btn-outline-light">
              <a href="mailto:jerome.ong.ronquillo@gmail.com" id="email-text">
                jerome.ong.ronquillo@gmail.com
              </a>
            </button>
          </div>
        </div>
        <div id="section3" className="section2Styles">
          <Cells testEnv={this.state.testEnv} />
        </div>
      </div>
    )
   }
}

export default Home;