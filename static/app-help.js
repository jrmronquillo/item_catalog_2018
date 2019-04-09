'use strict';


const e = React.createElement;


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testEnv: true, 
      liked: false,
      display: true,
    };
    this.function1 = this.function1.bind(this);
    
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  function1(){
    return console.log('function1 called!');
  }
  

  render() {
    
    if(this.state.display){
      return(
        <div className="container-fluid spacer-navbar">
          <Title />
          <FlowAnimation />
          <HelpCards />
        </div>
    )}
  }
}

class Title extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Help Cards',
    };
  }
  render(){
    return(<h1>{this.state.name}</h1>);
  }
}

class FlowAnimation extends React.Component{
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    return(
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Intro:</h5>
            This tool provides a software tester one interface where the tester can control multiple devices.
            <div>
              This was one of the first web apps I worked on that went through many iterations to get to where it is today.
            </div>
          </div>
        </div>

        <div className="row border-dashed padd-sm bg-white">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-2 middle">
              <div className={this.state.prevState ? 'col-sm animate animate-delay1 middle': 'col-sm animate2 animate-delay1 middle'}>
                <i className="fas fa-laptop two-X"></i>
              </div>
          </div>
          <div className="col-lg-2 middle">
              <div className={this.state.prevState ? 'col-sm animate animate-delay2 middle': 'col-sm animate2 animate-delay2 middle'}>
                <i className="fas fa-network-wired color-gray"></i>
              </div>
          </div>
          <div className="col-lg-2 middle">
              <div className={this.state.prevState ? 'col-sm animate animate-delay3 middle': 'col-sm animate2 animate-delay3 middle'}>
                <i className="fas fa-server two-X"></i>
              </div>
          </div>
          <div className="col-lg-2 middle color-gray">
              <div className={this.state.prevState ? 'col-sm animate animate-delay4 middle': 'col-sm animate2 animate-delay4 middle'}>
                <i className="fas fa-network-wired"></i>
              </div>
          </div>

          <div className="col-lg-2 middle">
            <table className="table">
              <tbody className="middle">
                <tr>
                  <td className={this.state.viewerPosition !== '1' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '4' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '7' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '10' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                </tr>
                <tr>
                  <td className={this.state.viewerPosition !== '2' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '5' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '8' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '11' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                </tr>
                 <tr>
                  <td className={this.state.viewerPosition !== '3' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '6' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '9' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '12' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv color-white"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-2">
          </div>
        </div>
      </div>
    )
  }
}

class HelpCards extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div>
        <div className="card-group text-center">
          <div className="card">
            <div className="card-header"><i className="fas fa-laptop two-X"></i></div>
            <div className="card-body">
              <h5 className="card-title">User</h5>
              <p className="card-text">This represents the interface for the user. This is the HTML Front-end that provides access and control to multiple devices.</p>
              
            </div>
          </div>
          <div className="card">
            <div className="card-header"><i className="fas fa-server two-X"></i></div>
            <div className="card-body">
              <h5 className="card-title">Server (Backend)</h5> 
              <p className="card-text">
                This represents the backend infrastructure built to support the Front-end. The Front-end makes calls to this backend. The backend server translates the user input to controls for the selected devices. See below for the sample API call, when a user interacts with the Front-end.
              </p>
              <h5> Sample API Call: </h5>
              <code>
                  http://ipAddress/command/00-00-00-00-00-00/1/rightArrow
              </code> <br /> <br />
              <h5> Server - Sample Python Code </h5>
              <div className="align-just">
                <code>
                  <pre>
                  def command(deviceMac, deviceNumber, commandName): <br/>
                   &nbsp; MESSAGE = 'MAC="' + deviceMac + number="' <br/> 
                   &nbsp; + deviceNumber + '" output="' + commandName + '" \n'<br />
                   &nbsp; p = socket.socket(socket.AF_INET, socket.SOCK_STREAM) <br />
                   &nbsp; p.connect((TCP_IP, TCP_PORT)) <br />
                  &nbsp; p.send(MESSAGE) <br />
                  &nbsp; p.close() <br />
                  </pre>
                </code>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><i className="fas fa-tv two-X"></i></div>
            <div className="card-body">
              <h5 className="card-title">Device</h5>
              <p className="card-text">This represents an individual device. The demo animation above shows a group of devices because the tool was intended to be paired with a Multiviewer - where the tester can view the displays of multiple devices on one display.</p>
            </div>
      </div>
</div>
      </div>
    );
  }
}



const domContainer = document.querySelector('#react_main_container');
ReactDOM.render(< Main />, domContainer);