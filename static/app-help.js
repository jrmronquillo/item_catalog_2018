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
          </div>
        </div>

        <div className="row border-dashed padd-sm">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-2 middle">
              <div className={this.state.prevState ? 'col-sm animate animate-delay1 middle': 'col-sm animate2 animate-delay1 middle'}>
                <i className="fas fa-laptop two-X"></i>
              </div>
          </div>
          <div className="col-lg-2 middle">
              <div className={this.state.prevState ? 'col-sm animate animate-delay2 middle': 'col-sm animate2 animate-delay2 middle'}>
                <i className="fas fa-network-wired"></i>
              </div>
          </div>
          <div className="col-lg-2 middle">
              <div className={this.state.prevState ? 'col-sm animate animate-delay3 middle': 'col-sm animate2 animate-delay3 middle'}>
                <i className="fas fa-server two-X"></i>
              </div>
          </div>
          <div className="col-lg-2 middle">
              <div className={this.state.prevState ? 'col-sm animate animate-delay4 middle': 'col-sm animate2 animate-delay4 middle'}>
                <i className="fas fa-network-wired"></i>
              </div>
          </div>

          <div className="col-lg-2 middle">
            <table className="table table-config-1">
              <tbody className="middle">
                <tr>
                  <td className={this.state.viewerPosition !== '1' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '4' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '7' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '10' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                </tr>
                <tr>
                  <td className={this.state.viewerPosition !== '2' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '5' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '8' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '11' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                </tr>
                 <tr>
                  <td className={this.state.viewerPosition !== '3' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '6' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '9' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
                  </td>
                  <td className={this.state.viewerPosition !== '12' ? 'col-sm' : this.state.prevState ? 'col-sm lightblue-bg-stay': 'col-sm lightblue-bg-stay-2'}>
                    <i className="fas fa-tv"></i>
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
              <p className="card-text">This represents the interface for the user. This is where the user starts. An HTML Front-end provides access and control to multiple devices.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><i className="fas fa-server two-X"></i></div>
            <div className="card-body">
              <h5 className="card-title">Server (Backend)</h5>
              <p className="card-text">This represents the backend infrastructure built to support the Front-end. The Front-end makes server side calls to this backend</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><i className="fas fa-tv two-X"></i></div>
            <div className="card-body">
              <h5 className="card-title">Device</h5>
              <p className="card-text">This represents an individual device.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
      </div>
</div>
      </div>
    );
  }
}



const domContainer = document.querySelector('#react_main_container');
ReactDOM.render(< Main />, domContainer);