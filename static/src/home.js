// home.js
'use strict';

const e = React.createElement;


const menuItems = [
  { testKey: 'http://testUrl' },
  { 'remote control app': 'http://localhost:5000' },
  { 'multi-user app': 'http://hello-udacity2323232323.appspot.com/blog' },
];


class Backdrop extends React.Component {
  render() {
    // ...
    return (
      <div className={
          this.props.sideMenuOpen ? 'backDropVisible' : 'backDropInvisible'
        }
        onClick={this.props.backdropClickHandler}
      />
    );
  }
}

class ToggleMenu extends React.Component {
  render() {
    // ...
    return (
      <div className="toggle-menu">
        <div className="hamburger">
          <div className="iconBar" />
          <div className="iconBar" />
          <div className="iconBar" />
        </div>
      </div>
    );
  }
}


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
          //<input
          //  onChange={this.props.filterFunction}
          //  value={this.props.value}
          //  placeholder="Search..."
          ///>

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

class NavBarBootStrap extends React.Component {
  render() {
    // ...
    return (
      <nav
        className={
          this.props.stickyNavBarShow
            ? 'fixed-top navbar-expand-lg navbar-dark bg-dark'
            : 'navbar-expand-lg navbar-dark bg-dark'
        }
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="http://www.jeromeronquillo.com">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio_redesign">
                Portfolio
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 disabled"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

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


class Main1 extends React.Component {
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


const domContainer = document.querySelector('#home_container');
ReactDOM.render(< Main1 />, domContainer);