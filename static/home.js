// home.js
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var menuItems = [{ testKey: 'http://testUrl' }, { 'remote control app': 'http://localhost:5000' }, { 'multi-user app': 'http://hello-udacity2323232323.appspot.com/blog' }];

var Backdrop = function (_React$Component) {
  _inherits(Backdrop, _React$Component);

  function Backdrop() {
    _classCallCheck(this, Backdrop);

    return _possibleConstructorReturn(this, (Backdrop.__proto__ || Object.getPrototypeOf(Backdrop)).apply(this, arguments));
  }

  _createClass(Backdrop, [{
    key: 'render',
    value: function render() {
      // ...
      return React.createElement('div', {
        className: this.props.sideMenuOpen ? 'backDropVisible' : 'backDropInvisible',
        onClick: this.props.backdropClickHandler
      });
    }
  }]);

  return Backdrop;
}(React.Component);

var ToggleMenu = function (_React$Component2) {
  _inherits(ToggleMenu, _React$Component2);

  function ToggleMenu() {
    _classCallCheck(this, ToggleMenu);

    return _possibleConstructorReturn(this, (ToggleMenu.__proto__ || Object.getPrototypeOf(ToggleMenu)).apply(this, arguments));
  }

  _createClass(ToggleMenu, [{
    key: 'render',
    value: function render() {
      // ...
      return React.createElement(
        'div',
        { className: 'toggle-menu' },
        React.createElement(
          'div',
          { className: 'hamburger' },
          React.createElement('div', { className: 'iconBar' }),
          React.createElement('div', { className: 'iconBar' }),
          React.createElement('div', { className: 'iconBar' })
        )
      );
    }
  }]);

  return ToggleMenu;
}(React.Component);

var SideMenu = function (_React$Component3) {
  _inherits(SideMenu, _React$Component3);

  function SideMenu() {
    _classCallCheck(this, SideMenu);

    return _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).apply(this, arguments));
  }

  _createClass(SideMenu, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      if (this.props.updatedList.length > 0) {
        return React.createElement(
          'div',
          {
            className: this.props.sideMenuOpen ? 'sideMenuOpen' : 'sideMenuClose'
          },
          React.createElement(
            'div',
            { id: 'closeX', onClick: this.props.backdropClickHandler },
            React.createElement('div', { className: 'xbar' }),
            React.createElement('div', { className: 'xbar2' })
          ),
          React.createElement(
            'h1',
            null,
            'Menu'
          ),
          React.createElement('input', {
            onChange: this.props.filterFunction,
            value: this.props.value,
            placeholder: 'Search...'
          }),
          React.createElement(
            'ul',
            { className: 'listStyle' },
            this.props.updatedList.map(function (item, i) {
              return React.createElement(
                'li',
                {
                  className: 'navbar-link-style',
                  'data-category': item,
                  key: item
                },
                React.createElement(
                  'a',
                  { className: 'navbar-link-style', href: _this4.props.urls[i] },
                  item.toUpperCase()
                )
              );
            })
          )
        );
      } else {
        return React.createElement(
          'div',
          {
            className: this.props.sideMenuOpen ? 'sideMenuOpen' : 'sideMenuClose'
          },
          React.createElement(
            'div',
            { id: 'closeX', onClick: this.props.backdropClickHandler },
            React.createElement('div', { className: 'xbar' }),
            React.createElement('div', { className: 'xbar2' })
          ),
          React.createElement(
            'h1',
            null,
            'Menu'
          ),
          React.createElement('input', {
            onChange: this.props.filterFunction,
            value: this.props.value,
            placeholder: 'Search...'
          }),
          React.createElement(
            'ul',
            { className: 'listStyle' },
            this.props.defaultMenuItems.map(function (item, i) {
              return React.createElement(
                'li',
                { className: 'list-group-item', key: i },
                React.createElement(
                  'a',
                  {
                    className: 'link-style',
                    href: _this4.props.defaultURLS[i],
                    target: '_blank'
                  },
                  item.toUpperCase()
                )
              );
            })
          )
        );
      }
    }
  }]);

  return SideMenu;
}(React.Component);

var DownArrow = function (_React$Component4) {
  _inherits(DownArrow, _React$Component4);

  function DownArrow() {
    _classCallCheck(this, DownArrow);

    return _possibleConstructorReturn(this, (DownArrow.__proto__ || Object.getPrototypeOf(DownArrow)).apply(this, arguments));
  }

  _createClass(DownArrow, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        {
          className: this.props.downArrowShow ? 'downArrowVisible' : 'downArrowInvisible'
        },
        React.createElement(
          'span',
          null,
          '\u2193'
        )
      );
    }
  }]);

  return DownArrow;
}(React.Component);

var NavBar = function (_React$Component5) {
  _inherits(NavBar, _React$Component5);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      var _this7 = this;

      // ...
      return React.createElement(
        'div',
        { className: this.props.testEnv ? 'display-true' : 'display-false' },
        React.createElement(
          'div',
          {
            className: this.props.stickyNavBarShow ? 'navbar-generic navbar-sticky' : 'navbar-generic navbar-open '
          },
          React.createElement(
            'ul',
            {
              className: this.props.testEnv ? 'navbar-generic-test navbar-list' : 'navbar-generic navbar-list'
            },
            React.createElement(
              'li',
              { className: 'navbar-mobile', onClick: this.props.handleToggle },
              React.createElement(ToggleMenu, { handleToggle: this.props.handleToggle })
            ),
            React.createElement(
              'li',
              { className: 'navbar-item', onClick: this.props.handleToggle },
              React.createElement(ToggleMenu, { handleToggle: this.props.handleToggle })
            ),
            this.props.menuItems1.map(function (item, i) {
              return React.createElement(
                'li',
                { className: 'navbar-item', 'data-category': item, key: item },
                React.createElement(
                  'a',
                  { className: 'navbar-link-style', href: _this7.props.urls[i] },
                  item.toUpperCase()
                )
              );
            })
          )
        )
      );
    }
  }]);

  return NavBar;
}(React.Component);

var NavBarBootStrap = function (_React$Component6) {
  _inherits(NavBarBootStrap, _React$Component6);

  function NavBarBootStrap() {
    _classCallCheck(this, NavBarBootStrap);

    return _possibleConstructorReturn(this, (NavBarBootStrap.__proto__ || Object.getPrototypeOf(NavBarBootStrap)).apply(this, arguments));
  }

  _createClass(NavBarBootStrap, [{
    key: 'render',
    value: function render() {
      // ...
      return React.createElement(
        'nav',
        {
          className: this.props.stickyNavBarShow ? 'fixed-top navbar-expand-lg navbar-dark bg-dark' : 'navbar-expand-lg navbar-dark bg-dark'
        },
        React.createElement(
          'button',
          {
            className: 'navbar-toggler',
            type: 'button',
            'data-toggle': 'collapse',
            'data-target': '#navbarSupportedContent',
            'aria-controls': 'navbarSupportedContent',
            'aria-expanded': 'false',
            'aria-label': 'Toggle navigation'
          },
          React.createElement('span', { className: 'navbar-toggler-icon' })
        ),
        React.createElement(
          'div',
          { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
          React.createElement(
            'ul',
            { className: 'navbar-nav mr-auto' },
            React.createElement(
              'li',
              { className: 'nav-item active' },
              React.createElement(
                'a',
                { className: 'nav-link', href: 'http://www.jeromeronquillo.com' },
                'Home ',
                React.createElement(
                  'span',
                  { className: 'sr-only' },
                  '(current)'
                )
              )
            ),
            React.createElement(
              'li',
              { className: 'nav-item' },
              React.createElement(
                'a',
                { className: 'nav-link', href: '/portfolio_redesign' },
                'Portfolio'
              )
            )
          ),
          React.createElement(
            'form',
            { className: 'form-inline my-2 my-lg-0' },
            React.createElement('input', {
              className: 'form-control mr-sm-2',
              type: 'search',
              placeholder: 'Search',
              'aria-label': 'Search'
            }),
            React.createElement(
              'button',
              {
                className: 'btn btn-outline-success my-2 my-sm-0 disabled',
                type: 'submit'
              },
              'Search'
            )
          )
        )
      );
    }
  }]);

  return NavBarBootStrap;
}(React.Component);

var Cells = function (_React$Component7) {
  _inherits(Cells, _React$Component7);

  function Cells() {
    _classCallCheck(this, Cells);

    return _possibleConstructorReturn(this, (Cells.__proto__ || Object.getPrototypeOf(Cells)).apply(this, arguments));
  }

  _createClass(Cells, [{
    key: 'render',
    value: function render() {
      // ...
      return React.createElement(
        'div',
        { className: this.props.testEnv ? 'test-env' : 'prod' },
        React.createElement('div', { className: 'card' })
      );
    }
  }]);

  return Cells;
}(React.Component);

var Main1 = function (_React$Component8) {
  _inherits(Main1, _React$Component8);

  function Main1(props) {
    _classCallCheck(this, Main1);

    var _this10 = _possibleConstructorReturn(this, (Main1.__proto__ || Object.getPrototypeOf(Main1)).call(this, props));

    _this10.state = {
      prod: true,
      testEnv: false,
      toggleFeature: false,
      name: 'glitch Bot',
      sideMenuOpen: false,
      downArrowShow: true,
      navBarShow: true,
      stickyNavBarShow: false,
      searchInput: '',
      defaultMenuItems: ['home', 'blog (coming soon)', 'portfolio (coming soon)'],
      urls: ['', ''],
      stashedURLS: ['http://10.23.223.22/categories', 'http://localhost:5000', 'http://hello-udacity2323232323.appspot.com/blog', 'http://google.com', 'http://google.com', 'http://google.com'],
      updatedList: ['Home', 'Blog', 'Portfolio (Coming Soon)'],
      updatedURLS: ['#section1', 'http://18.222.121.239/', ''],
      importedMenuItems: menuItems,
      skills: ['javascript', 'reactjs', 'html5', 'jquery', 'css', 'KnockoutJS', 'Python', 'Bootstrap', 'mySQL', 'PostgreSQL', 'AJAX', 'Linux', 'Git', 'GRUNTJS', 'JINJA2', 'SASS', "RESTFul API's"],
      randomSkill: 'HTML'
    };
    _this10.handleToggle = _this10.handleToggle.bind(_this10);
    _this10.handleInputChange = _this10.handleInputChange.bind(_this10);
    _this10.backdropClickHandler = _this10.backdropClickHandler.bind(_this10);
    _this10.downArrowToggle = _this10.downArrowScrollHandler.bind(_this10);
    _this10.filterFunction = _this10.filterFunction.bind(_this10);
    _this10.skillRandomizer = _this10.skillRandomizer.bind(_this10);
    _this10.toggleNavbarHandler = _this10.toggleNavbarHandler.bind(_this10);
    //---Feature Toggle ---
    //this.featuresAreEnabled = this.featuresAreEnabled.bind(this);
    return _this10;
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

  _createClass(Main1, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //this.featuresAreEnabled();
      //console.log(this.state.toggleFeature);
      window.addEventListener('scroll', this.downArrowToggle);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.downArrowToggle);
    }
  }, {
    key: 'filterFunction',
    value: function filterFunction(e) {
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
        updatedURLS: updatedURLS
      });
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState({
        sideMenuOpen: !this.state.sideMenuOpen
      });
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      this.setState({
        searchInput: e.target.value
      });
    }
  }, {
    key: 'backdropClickHandler',
    value: function backdropClickHandler() {
      this.setState({
        sideMenuOpen: false
      });
    }
  }, {
    key: 'toggleNavbarHandler',
    value: function toggleNavbarHandler() {
      var offsetHeight = document.getElementById('section1').offsetHeight;
      console.log(offsetHeight);
      return offsetHeight;
    }
  }, {
    key: 'downArrowScrollHandler',
    value: function downArrowScrollHandler() {
      //console.log('pageYoffset');
      //console.log(window.pageYOffset);
      //console.log(document.getElementById('section1').offsetHeight);
      var offsetHeight = document.getElementById('section1').offsetHeight;

      if (window.pageYOffset === 0) {
        this.setState({
          downArrowShow: true,
          stickyNavBarShow: false
        });
      } else if (window.pageYOffset > offsetHeight > 0) {
        this.setState({
          navBarShow: false,
          stickyNavBarShow: true
        });
      } else {
        this.setState({
          downArrowShow: false,
          stickyNavBarShow: false
        });
      }

      //console.log('stickyNavBarShow state:');
      //console.log(this.state.stickyNavBarShow);
    }
  }, {
    key: 'skillRandomizer',
    value: function skillRandomizer() {
      var randomNum = Math.floor(Math.random() * this.state.skills.length);
      this.setState({
        randomSkill: this.state.skills[randomNum]
      });
    }

    // testing the jsx preprocessor

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'home_component_container' },
        React.createElement(Backdrop, {
          backdropClickHandler: this.backdropClickHandler,
          sideMenuOpen: this.state.sideMenuOpen
        }),
        React.createElement(
          'div',
          {
            id: 'section1',
            className: 'section1 section-Styles-test',
            onScroll: this.downArrowToggle
          },
          React.createElement(SideMenu, {
            value: this.state.searchInput,
            menuItems: this.state.importedMenuItems,
            defaultURLS: this.state.urls,
            urls: this.state.updatedURLS,
            filterFunction: this.filterFunction,
            backdropClickHandler: this.backdropClickHandler,
            sideMenuOpen: this.state.sideMenuOpen,
            defaultMenuItems: this.state.defaultMenuItems,
            updatedList: this.state.updatedList
          }),
          React.createElement(
            'div',
            {
              className: this.state.testEnv ? 'section-text-container' : 'section-text-container-test'
            },
            React.createElement(
              'span',
              { className: 'section-text' },
              'Front-end'
            ),
            React.createElement('br', null),
            React.createElement(
              'span',
              { className: 'section-text' },
              'Web Developer'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
              'span',
              { className: 'section-text' },
              'Hi, I\'m'
            ),
            React.createElement(
              'span',
              { className: 'font-custom section-text2' },
              'Jerome.'
            )
          ),
          React.createElement(DownArrow, { downArrowShow: this.state.downArrowShow })
        ),
        React.createElement(
          'div',
          { id: 'section2', className: 'section2 section-Styles' },
          React.createElement(NavBar, {
            menuItems1: this.state.defaultMenuItems,
            urls: this.state.updatedURLS,
            stickyNavBarShow: this.state.stickyNavBarShow,
            handleToggle: this.handleToggle,
            testEnv: this.state.testEnv
          }),
          React.createElement(NavBarBootStrap, { stickyNavBarShow: this.state.stickyNavBarShow }),
          React.createElement(
            'div',
            { className: 'section-text-container' },
            React.createElement(
              'span',
              { className: 'section-text' },
              'I design and build user interfaces.',
              ' '
            ),
            React.createElement('br', null),
            React.createElement(
              'span',
              { className: 'section-text' },
              'like this one.'
            ),
            React.createElement('br', null),
            React.createElement(
              'span',
              { className: 'section-text' },
              'and I design with: '
            ),
            React.createElement(
              'span',
              { className: 'font-custom section-text-unique' },
              this.state.randomSkill
            ),
            React.createElement('br', null),
            React.createElement(
              'button',
              {
                type: 'button',
                className: 'btn btn-outline-light',
                onClick: this.skillRandomizer
              },
              'Learn More'
            )
          )
        ),
        React.createElement(
          'div',
          { id: 'section3', className: 'section3 section-Styles' },
          React.createElement(
            'div',
            { className: 'section-text-container' },
            React.createElement(
              'span',
              { className: 'section-text' },
              'Every great story starts with a connection...'
            ),
            React.createElement('br', null)
          ),
          React.createElement(
            'div',
            { className: 'container-cta' },
            React.createElement(
              'span',
              { id: 'cta-text', className: 'section-text' },
              'Let\'s Connect!'
            ),
            React.createElement('br', null),
            React.createElement(
              'button',
              { type: 'button', className: 'btn btn-outline-light' },
              React.createElement(
                'a',
                { href: 'mailto:jerome.ong.ronquillo@gmail.com', id: 'email-text' },
                'jerome.ong.ronquillo@gmail.com'
              )
            )
          )
        ),
        React.createElement(
          'div',
          { id: 'section3', className: 'section2Styles' },
          React.createElement(Cells, { testEnv: this.state.testEnv })
        )
      );
    }
  }]);

  return Main1;
}(React.Component);

var domContainer = document.querySelector('#home_container');
ReactDOM.render(React.createElement(Main1, null), domContainer);