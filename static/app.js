'use strict';

const e = React.createElement;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testEnv: true, 
      liked: false,
      display: true,
      keyPressed: '',
      command: '',
      prevState: true,
      viewerConfig: [],
      keys: ['q','w', 'e', 'r', 't', 'y'],
      keyObjects: { 
                        q :'guide',
                        w :'upArrow',
                        e : 'menu',
                        r :'red',
                        t :'chanUp',
                      },
      viewerPosition: '',
      irnetboxMac: '',
      slot: '1-16',
      stbLabels: ['HR34-700', 'HR25-100', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16'],
      stbObjTest: {'testKey1':'testValue1'},
      chosenConfig: 'multiviewerConfig1',
      multipleMacs: false,
      macsInConfig: [],
      configs: {
      'multiviewerConfig1': {
                           '1': {macAddr: '00-80-A3-A9-E3-7A', slot: '1', model: 'H44-100', vidRouteMoniker:'r3s1'}, 
                           '2': {macAddr: '00-80-A3-A9-E3-7A', slot: '2', model: 'HR54-700', vidRouteMoniker:'r3s2'},
                           '3': {macAddr: '00-80-A3-A9-E3-7A', slot: '3', model: 'HR54-500', vidRouteMoniker: 'r3s3'},
                           '4': {macAddr: '00-80-A3-A9-E3-7A', slot: '4', model: 'HR54-200', vidRouteMoniker: 'r3s4'},
                           '5': {macAddr: '00-80-A3-A9-E3-7A', slot: '5', model: 'HR44-700', vidRouteMoniker: 'r3s5'},
                           '6': {macAddr: '00-80-A3-A9-E3-7A', slot: '6', model: 'HR44-500', vidRouteMoniker: 'r3s6'},
                           '7': {macAddr: '00-80-A3-A9-E3-7A', slot: '7', model: 'HR44-200', vidRouteMoniker: 'r3s7'},
                           '8': {macAddr: '00-80-A3-A9-E3-7A', slot: '8', model: 'HR34-700', vidRouteMoniker: 'r3s8'},
                           '9': {macAddr: '00-80-A3-A9-E3-6A', slot: '1', model: 'C51-100(H44-500)', vidRouteMoniker: 'r2s1'},
                           '10': {macAddr: '00-80-A3-A9-E3-6A', slot: '2', model: 'C41-700(H44-500)', vidRouteMoniker: 'r2s2'},
                           '11': {macAddr: '00-80-A3-A9-E3-6A', slot: '3', model: 'C41-700(H44-500)', vidRouteMoniker: 'r2s3'},
                           '12': {macAddr: '00-80-A3-A9-E3-6A', slot: '4', model: 'C51-500(HR54R1-700)', vidRouteMoniker: 'r2s4'},
                           '13': {macAddr: '00-80-A3-A9-E3-6A', slot: '5', model: 'C61-700(HR54R1-700)', vidRouteMoniker: 'r2s5'},
                           '14': {macAddr: '00-80-A3-A9-E3-6A', slot: '6', model: 'C61w-700(HR54R1-700)', vidRouteMoniker: 'r2s6'},
                           '15': {macAddr: '00-80-A3-A9-E3-6A', slot: '7', model: 'C51-500(HR54-500)', vidRouteMoniker: 'r2s7'},
                           '16': {macAddr: '00-80-A3-A9-E3-6A', slot: '8', model: 'C41-700(HR54-200)', vidRouteMoniker: 'r2s8'},
                         },
      'multiviewerConfig2': {
                           '1': {macAddr: '00-80-A3-9D-86-D0', slot: '1', model: 'H24-100', vidRouteMoniker:'r13s1'}, 
                           '2': {macAddr: '00-80-A3-9D-86-D0', slot: '2', model: 'H24-200', vidRouteMoniker:'r13s2'},
                           '3': {macAddr: '00-80-A3-9D-86-D0', slot: '3', model: 'H24-700', vidRouteMoniker: 'r13s3'},
                           '4': {macAddr: '00-80-A3-9D-86-D0', slot: '4', model: 'H25-100', vidRouteMoniker: 'r13s4'},
                           '5': {macAddr: '00-80-A3-9D-86-D0', slot: '5', model: 'HR24-100', vidRouteMoniker: 'r13s5'},
                           '6': {macAddr: '00-80-A3-9D-86-D0', slot: '6', model: 'H25-700', vidRouteMoniker: 'r13s6'},
                           '7': {macAddr: '00-80-A3-9D-86-D0', slot: '7', model: 'H25-500', vidRouteMoniker: 'r13s7'},
                           '8': {macAddr: '00-80-A3-9D-86-D0', slot: '8', model: 'HR24-200', vidRouteMoniker: 'r13s8'},
                           '9': {macAddr: '00-80-A3-9D-86-D1', slot: '1', model: 'H21-100', vidRouteMoniker: 'r14s1'},
                           '10': {macAddr: '00-80-A3-9D-86-D1', slot: '2', model: 'H21-200', vidRouteMoniker: 'r14s2'},
                           '11': {macAddr: '00-80-A3-9D-86-D1', slot: '3', model: 'H23-600', vidRouteMoniker: 'r14s3'},
                           '12': {macAddr: '00-80-A3-9D-86-D1', slot: '4', model: 'HR20-100', vidRouteMoniker: 'r14s4'},
                           '13': {macAddr: '00-80-A3-9D-86-D1', slot: '5', model: 'HR20-700', vidRouteMoniker: 'r14s5'},
                           '14': {macAddr: '00-80-A3-9D-86-D1', slot: '6', model: 'HR21-100', vidRouteMoniker: 'r14s6'},
                           '15': {macAddr: '00-80-A3-9D-86-D1', slot: '7', model: 'HR22-100', vidRouteMoniker: 'r14s7'},
                           '16': {macAddr: '00-80-A3-9D-86-D1', slot: '8', model: 'HR24-500', vidRouteMoniker: 'r14s8'},
                         },
      'multiviewerConfig3': {
                           '1': {macAddr: '00-80-A3-9D-86-D1', slot: '1', model: 'H21-100', vidRouteMoniker: 'r14s1'},
                           '2': {macAddr: '00-80-A3-9D-86-D1', slot: '2', model: 'H21-200', vidRouteMoniker: 'r14s2'},
                           '3': {macAddr: '00-80-A3-9D-86-D1', slot: '3', model: 'H23-600', vidRouteMoniker: 'r14s3'},
                           '4': {macAddr: '00-80-A3-9D-86-D1', slot: '4', model: 'HR20-100', vidRouteMoniker: 'r14s4'},
                           '5': {macAddr: '00-80-A3-9D-86-D1', slot: '5', model: 'HR20-700', vidRouteMoniker: 'r14s5'},
                           '6': {macAddr: '00-80-A3-9D-86-D1', slot: '6', model: 'HR21-100', vidRouteMoniker: 'r14s6'},
                           '7': {macAddr: '00-80-A3-9D-86-D1', slot: '7', model: 'HR22-100', vidRouteMoniker: 'r14s7'},
                           '8': {macAddr: '00-80-A3-9D-86-D1', slot: '8', model: 'HR24-500', vidRouteMoniker: 'r14s8'},
                           '9': {macAddr: '00-80-A3-9D-86-D3', slot: '1', model: 'THR22-100', vidRouteMoniker: 'r15s1'},
                           '10': {macAddr: '00-80-A3-9D-86-D3', slot: '2', model: 'HR21-200', vidRouteMoniker: 'r15s2'},
                           '11': {macAddr: '00-80-A3-9D-86-D3', slot: '3', model: 'HR21P-200', vidRouteMoniker: 'r15s3'},
                           '12': {macAddr: '00-80-A3-9D-86-D3', slot: '4', model: 'R22-100', vidRouteMoniker: 'r15s4'},
                           '13': {macAddr: '00-80-A3-9D-86-D3', slot: '5', model: 'HR24-200', vidRouteMoniker: 'r15s5'},
                           '14': {macAddr: '00-80-A3-9D-86-D3', slot: '6', model: 'HR21-700', vidRouteMoniker: 'r15s6'},
                           '15': {macAddr: '00-80-A3-9D-86-D3', slot: '7', model: 'HR23-700', vidRouteMoniker: 'r15s7'},
                           '16': {macAddr: '00-80-A3-9D-86-D3', slot: '8', model: 'HR24-500', vidRouteMoniker: 'r15s8'},
                         },
      'multiviewerConfig4': {
                           '1': {macAddr: '00-80-A3-9E-67-3A', slot: '1', model: 'HS171', vidRouteMoniker:'r13s1'}, 
                           '2': {macAddr: '00-80-A3-9E-67-3A', slot: '2', model: 'HS172', vidRouteMoniker:'r13s2'},
                           '3': {macAddr: '00-80-A3-9E-67-3A', slot: '3', model: 'HS173', vidRouteMoniker: 'r13s3'},
                           '4': {macAddr: '00-80-A3-9E-67-3A', slot: '4', model: 'HS174', vidRouteMoniker: 'r13s4'},
                           '5': {macAddr: '00-80-A3-9E-67-3A', slot: '5', model: 'HS175', vidRouteMoniker: 'r13s5'},
                           '6': {macAddr: '00-80-A3-9E-67-3A', slot: '6', model: 'HS176', vidRouteMoniker: 'r13s6'},
                           '7': {macAddr: '00-80-A3-9E-67-3A', slot: '7', model: 'HS177', vidRouteMoniker: 'r13s7'},
                           '8': {macAddr: '00-80-A3-9E-67-3A', slot: '8', model: 'HS178', vidRouteMoniker: 'r13s8'},
                           '9': {macAddr: '00-80-A3-A9-E3-6A', slot: '1', model: '#', vidRouteMoniker: 'r14s1'},
                           '10': {macAddr: '00-80-A3-A9-E3-6A', slot: '2', model: '#', vidRouteMoniker: 'r14s2'},
                           '11': {macAddr: '00-80-A3-A9-E3-6A', slot: '3', model: '#', vidRouteMoniker: 'r14s3'},
                           '12': {macAddr: '00-80-A3-A9-E3-6A', slot: '4', model: '#', vidRouteMoniker: 'r14s4'},
                           '13': {macAddr: '00-80-A3-A9-E3-6A', slot: '5', model: '#', vidRouteMoniker: 'r14s5'},
                           '14': {macAddr: '00-80-A3-A9-E3-6A', slot: '6', model: '#', vidRouteMoniker: 'r14s6'},
                           '15': {macAddr: '00-80-A3-A9-E3-6A', slot: '7', model: '#', vidRouteMoniker: 'r14s7'},
                           '16': {macAddr: '00-80-A3-A9-E3-6A', slot: '8', model: '#', vidRouteMoniker: 'r14s8'},
                         },
      'multiviewerConfig5': {
                           '1': {macAddr: '00-80-A3-9D-86-D3', slot: '1', model: '#', vidRouteMoniker:'r13s1'}, 
                           '2': {macAddr: '00-80-A3-9D-86-D3', slot: '2', model: '#', vidRouteMoniker:'r13s2'},
                           '3': {macAddr: '00-80-A3-9D-86-D3', slot: '3', model: '#', vidRouteMoniker: 'r13s3'},
                           '4': {macAddr: '00-80-A3-9D-86-D3', slot: '4', model: '#', vidRouteMoniker: 'r13s4'},
                           '5': {macAddr: '00-80-A3-9D-86-D3', slot: '5', model: '#', vidRouteMoniker: 'r13s5'},
                           '6': {macAddr: '00-80-A3-9D-86-D3', slot: '6', model: '#', vidRouteMoniker: 'r13s6'},
                           '7': {macAddr: '00-80-A3-9D-86-D3', slot: '7', model: '#', vidRouteMoniker: 'r13s7'},
                           '8': {macAddr: '00-80-A3-9D-86-D3', slot: '8', model: '#', vidRouteMoniker: 'r13s8'},
                           '9': {macAddr: '00-80-A3-9D-86-D3', slot: '1', model: '#', vidRouteMoniker: 'r14s1'},
                           '10': {macAddr: '00-80-A3-9D-86-D3', slot: '2', model: '#', vidRouteMoniker: 'r14s2'},
                           '11': {macAddr: '00-80-A3-9D-86-D3', slot: '3', model: '#', vidRouteMoniker: 'r14s3'},
                           '12': {macAddr: '00-80-A3-9D-86-D3', slot: '4', model: '#', vidRouteMoniker: 'r14s4'},
                           '13': {macAddr: '00-80-A3-9D-86-D3', slot: '5', model: '#', vidRouteMoniker: 'r14s5'},
                           '14': {macAddr: '00-80-A3-9D-86-D3', slot: '6', model: '#', vidRouteMoniker: 'r14s6'},
                           '15': {macAddr: '00-80-A3-9D-86-D3', slot: '7', model: '#', vidRouteMoniker: 'r14s7'},
                           '16': {macAddr: '00-80-A3-9D-86-D3', slot: '8', model: '#', vidRouteMoniker: 'r14s8'},
                         }
        },
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.sendCommands = this.sendCommands.bind(this);
    this.clearKeyState = this.clearKeyState.bind(this);
    this.keyupAction = this.keyupAction.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.example = this.example.bind(this);
  }

  componentDidMount(){
    //console.log('00000000');
    //console.log(this.state.keyObjects.length);
    //console.log(this.state.keyObjects[0][0]);
    //for (var key in this.state.keyObjects[0][0]){
    //  console.log(key);
    //  console.log(this.state.keyObjects[0][0][key]);
    //}

    document.addEventListener('keypress', this.handleKeyPress);
    document.addEventListener('keyup', this.keyupAction);
  }

  componentWillUnmount(){
    document.removeEventListener('keypress', this.handleKeyPress);
    document.removeEventListener('keyup', this.keyupAction);
  }

  example() {
    return (
      <Chosen onChange={value => console.log(value)}>
        <option>vanilla</option>
        <option>chocolate</option>
        <option>strawberry</option>
      </Chosen>
    );
  }

  toggleDisplay(){
    this.setState({
      display: !this.state.display
      });
  }

  sendCommands(){
    var mac_list = ['00-80-A3-A9-E3-7A', "00-80-A3-A2-D9-13", "00-80-A3-A9-E3-68", 
                 "00-80-A3-A9-E3-6A", "00-80-A3-A9-E3-7A", 
                 "00-80-A3-A9-DA-67", "00-80-A3-A9-E3-79", 
                 "00-80-A3-A9-E3-78", "00-80-A3-9E-67-37", 
                 "00-80-A3-9D-86-D5", "00-80-A3-9E-67-34",
                 "00-80-A3-9E-67-27", "00-80-A3-9D-86-CF",
                 "00-80-A3-9E-67-35", "00-20-4A-BD-C5-1D",
                 "00-80-A3-9D-86-D2", "00-80-A3-9E-67-3B",
                 "00-80-A3-9E-67-36", "00-80-A3-9E-67-32",
                 "00-80-A3-9D-86-D6", "00-80-A3-9D-86-D3",
                 "00-80-A3-9D-86-D1", "00-80-A3-9D-86-D0",
                 "00-20-4A-DF-64-55", "00-80-A3-A1-7C-3C",
                 "00-80-A3-A2-48-5C", "00-20-4A-DF-65-A0",
                 "00-80-A3-9E-67-3A"];


 

    // logic to send command to all unique macs in a config, it checks if multiple macs are in the config
    // and then for each mac calls a command api.
    if(this.state.multipleMacs){
      var newArr = this.state.macsInConfig.forEach(function(currVal){
        console.log('------');
        //fetch('http://localhost:3000/redesign/command/'+currVal+'/'+this.state.slot+'/'+this.state.command); 
      }, this);
    }

    if(this.state.irnetboxMac && this.state.slot && this.state.command){
      console.log('if statement executed');
      console.log('http://localhost:3000/redesign/command/'+this.state.irnetboxMac+'/'+this.state.slot+'/'+this.state.command);
      //fetch('http://localhost:3000/redesign/command/'+this.state.irnetboxMac+'/'+this.state.slot+'/'+this.state.command);
    } else {
      console.log('invalid mac, slot, command');
    }
  
  }

  sendVideoConfigs(){
    // fetch('http://localhost:3000/setVideo/')
  }

  sendLabelNames(){
    var stbLabelsArr = [];
    for (var key in this.state.configs[this.state.chosenConfig]){
      console.log('sendLabelNames function:');
      console.log(this.state.configs[this.state.chosenConfig][key]);
      // need to sanitize question marks in model strings, by converting them to html entity %3F
      var escapeQuestionMarks = this.state.configs[this.state.chosenConfig][key].model.replace("?", "%3F");

      //stbLabelsArr.push(this.state.multiviewerConfig1[key].model);
      stbLabelsArr.push(escapeQuestionMarks);
    }
        
    if(stbLabelsArr.length == 16){
      var commandStr = 'http://localhost:3000/setLabels/'+stbLabelsArr.join('/');
      console.log(commandStr);
      //fetch(commandStr);
    } else{
      console.log('Number of stb labels does not equal 16');
    }
  }

  resetStates(){
    console.log('reset states triggered');
    this.setState({
      command: '',
      viewerPosition: '',
    });
  }

  clearKeyState(){
    console.log('clearstate executed');
    //this.setState({
    //  keyPressed: '',
    //});

    this.setState({
      prevState: !this.state.prevState,
    });
    console.log('####PrevState');
    console.log(this.state.prevState);

    console.log(this.state.keyPressed);
  }

  keyupAction(event){
    console.log('clearkeySTate function executed');
    setTimeout(this.clearKeyState(), 100000);
    console.log('test output');
    console.log(this.state.viewerPosition);
    console.log('keyPressed:');
    console.log(this.state.keyPressed);
  }

  handleKeyPress(event){
    console.log(event.keyCode);
    var key = '';
    switch(event.keyCode){
      case 119:
        key = 'w';
        break;
      case 97:
        key = 'a';
        break;
      case 100:
        key = 'd';
        break;
      case 115:
        key = 's';
        break;
      case 32:
        key = ' ';
        break;
      case 120:
        key = 'x';
        break;
      case 101:
        key='e';
        break;
      case 114:
        key= 'r';
        break;
      // numbers
      case 48:
        key= '0';
        break;
      case 49:
        key= '1';
        break;
      case 50:
        key= '2';
        break;
      case 51:
        key= '3';
        break;
      case 52:
        key= '4';
        break;
      case 53:
        key= '5';
        break;
      case 54:
        key= '6';
        break;
      case 55:
        key= '7';
        break;
      case 56:
        key= '8';
        break;
      case 57:
        key= '9';
        break;
      case 38:
        key= '&';
        break;
      case 42:
        key='*';
        break;
      case 40:
        key='(';
        break;
      case 41:
        key=')';
        break;
      case 117:
        key='u';
        break;
      case 94:
        key='^';
        break;
      case 121:
        key='y';
        break;
      case 104:
        key='h';
        break;
      case 110:
        key='n';
        break;
      case 106:
        key='j';
        break;
      case 109:
        key='m';
        break;
      case 105:
        key='i';
        break;
      case 107:
        key='k';
        break;
      case 44:
        key=',';
        break;
      case 40:
        key='(';
        break;
      case 111:
        key='o';
        break;
      case 108:
        key='l';
        break;
      case 46:
        key='.';
        break;
      case 102:
        key='f';
        break;
      case 103:
        key='g';
        break;
      case 122:
        key='z';
        break;
      case 99:
        key='c';
        break;
      case 118:
        key='v';
        break;
      case 98:
        key='b';
        break;
      case 96:
        key='`';
        break;
      case 116:
        key='t';
        break;
      case 112:
        key='p';
        break;
      case 45:
        key='-';
        break;
      case 113:
        key='q';
        break;
      case 59:
        key=';';
        break;
      case 39:
        key="'";
        break;
      case 90:
        key='Z';
        break;
      case 91:
        key="[";
        break;
      case 92:
        key='&#92;';
        break;
      case 93:
        key=']';
        break;
      case 86:
        key='V';
        break;
      case 47:
        key='/';
        break;
      default:
        key = 'unexpected keypress';
    }

    this.setState({
      keyPressed: key,
    });
    console.log('keypress state:');
    console.log(this.state.keyPressed);

    var controlCommands = {
                            'Z':'back',
                            'w':'upArrow',
                            'a':'leftArrow',
                            's':'downArrow',
                            'd':'rightArrow',
                            'e':'menu',
                            'r':'red',
                            'x':'exit',
                            'c':'rewind',
                            'v':'play',
                            'b':'fastforward',
                            't':'chanup',
                            'q':'guide',
                            ' ':'select',
                            'f':'info',
                            'g':'chandown',
                            'z':'dash',
                            'V':'record',
                            '1': '1',
                            '2': '2',
                            '3': '3',
                            '4': '4',
                            '5': '5',
                            '6': '6',
                            '7': '7',
                            '8': '8',
                            '9': '9',
                            '0': '0',
                            '`': 'prev'
                              };
    var viewerPositionMapping = {
                            '': '-1',
                            '^':'0',
                            'y':'1',
                            'h':'2',
                            'n':'3',
                            'u':'4',
                            'j':'5',
                            'm':'6', 
                            'i':'7',
                            'k':'8', 
                            ',':'9',
                            'o':'10',
                            'l':'11', 
                            '.':'12', 
                            '?':'13', 
                            '?':'14',
                            '?':'15',
                            '?':'16',
                            ')':'17',
                            '-':'18',
                            'p':'19',
                            '/':'1-16'
                            };
    console.log('viewerPositionMapping--------');
    console.log(viewerPositionMapping[key]);                        
    var stbs = {
      '1': {macAddr: '00-80-A3-A9-E3-7A', slot: '1', model: 'H44-500', vidRouteMoniker: 'r3s1'},
      '2': {macAddr: '00-80-A3-A9-E3-7A', slot: '2', model: 'HR54-700', vidRouteMoniker: 'r3s2'},
      '3': {macAddr: '00-80-A3-A9-E3-7A', slot: '5', model: 'HR44-700'},
      '4': {macAddr: '00-80-A3-A9-E3-6A', slot: '10', model: 'C41-500'},
      '5': {macAddr: '00-80-A3-A9-E3-6A', slot: '14', model: 'C31-700'},
      '6': {macAddr: '00-80-A3-A9-E3-6A', slot: '16', model: 'C41-700'},
      '7': {macAddr: '00-80-A3-A9-E3-6A', slot: '9', model: 'C51-100'},
      '8': {macAddr: '00-80-A3-A9-E3-6A', slot: '11', model: 'C41w-100'},
      '9': {macAddr: '00-80-A3-A9-E3-7A', slot: '1', model: 'H44-500'},
      '10':{macAddr: '00-80-A3-A9-E3-6A', slot: '2', model: 'C41-500'},
      '11':{macAddr: '00-80-A3-A9-E3-7A', slot: '2', model: 'HR54-700'},
      '12':{macAddr: '00-80-A3-A9-E3-6A', slot: '5', model: 'C51-700'},
      '13':{macAddr: '00-80-A3-A9-E3-6A', slot: '1', model: 'C51-100'},
      '14':{macAddr: '00-80-A3-A9-E3-6A', slot: '3', model: 'C41-700'},
      '15':{macAddr: '00-80-A3-A9-E3-6A', slot: '4', model: 'C51-500'},
      '16':{macAddr: '00-80-A3-A9-E3-6A', slot: '6', model: 'C61w-700'},
      '17':{macAddr: '00-80-A3-9D-86-D0', slot: '1-16'},
      '18':{macAddr: '00-80-A3-9D-86-D1', slot: '1-16'},
      '19':{macAddr: '00-80-A3-9D-86-D3', slot: '1-16'},

    };

    var multiviewConfig = {
                          '[':'multiviewerConfig1',
                          ']':'multiviewerConfig2',
                          '&#92;':'multiviewerConfig3',
                          ';':'multiviewerConfig4',
                          "'":'multiviewerConfig5'
                          };



    var macMapping = {
                          '1' :'00-80-A3-A9-E3-7A',
                          '2' :'00-80-A3-A9-E3-6A',
                          '3' :'00-80-A3-A9-E3-7A',
                          '17':'00-80-A3-9D-86-D0',
                          '18':'00-80-A3-9D-86-D1',
                          '19':'00-80-A3-9D-86-D3'
                            };
    
    console.log('viewerPositionMapping[key]');
    console.log(viewerPositionMapping[key]);
    console.log('viewerPositionMapping[key]:');
    console.log(this.state.configs[this.state.chosenConfig][1].macAddr);
    // check if selection is for one slot or for all slots 1-16
    if(viewerPositionMapping[key] == '1-16'){
      this.setState({
        viewerPosition: viewerPositionMapping[key],
        irnetboxMac: this.state.configs[this.state.chosenConfig][1].macAddr,
        slot: '1-16',
      });


    } else if (viewerPositionMapping[key]){
        this.setState({
        //irnetboxMac: stbs[viewerPositionMapping[key]].macAddr,
        //slot: stbs[viewerPositionMapping[key]].slot
        viewerPosition: viewerPositionMapping[key],
        irnetboxMac: this.state.configs[this.state.chosenConfig][viewerPositionMapping[key]].macAddr,
      
        slot: this.state.configs[this.state.chosenConfig][viewerPositionMapping[key]].slot,
        multipleMacs: false,     
        
      });

    } else {
      console.log('viewerPostionMapping[key] not detected');
    }

    
    
    if(multiviewConfig[key]){
      
      // logic check all unique macs, so that it can be used for the send all stb's function
      var arr = this.state.configs[this.state.chosenConfig];
      var lookForUniques = [];
      for (var keyItem in arr){
        console.log(keyItem);
        lookForUniques.push(arr[keyItem].macAddr);
      }
      var onlyUniques = lookForUniques.filter(function(value, index, self){
        return self.indexOf(value) === index;
      });
      if(onlyUniques.length > 1){
        this.setState({
          multipleMacs: true,
          macsInConfig: onlyUniques
        });
      }

      //4 quadConf
      this.setState({
        chosenConfig: multiviewConfig[key]
      });

      console.log('this.state.chosenConfig:');
      console.log(this.state.chosenConfig);
      // build url string for setVideo api call
      var urlBuilder = [];
      console.log('stb info should display below:');
      console.log(this.state.configs[multiviewConfig[key]]);
      for (var configKey in this.state.configs[multiviewConfig[key]]){
        // build url by taking all the vidRouteMonikers and converting them to a url string[]
        urlBuilder.push(this.state.configs[multiviewConfig[key]][configKey].vidRouteMoniker);
      }
      var setVideoCall = 'http://localhost:3000/setVideo/'+urlBuilder.join('/')+'/';
      console.log('setVideoCall:');
      console.log(setVideoCall);
      
      //fetch(setVideoCall);

      this.sendLabelNames();
    }




    if(controlCommands[key]){
      
      this.setState({
        command: controlCommands[key]
      });
      this.sendCommands();
      
    }
  }


    
    //fetch('https://jsonplaceholder.typicode.com/todos/1')
    //  .then(response => response.json())
    //  .then(json => console.log(json))

  

  render() {
    
    if(this.state.display){
      return(
        <div className="container-fluid">
          <header className='header1'>

          </header>
          <div className="row">

             <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">    
                    <div className={!this.state.viewerPosition ? "action-highlight center-text": " center-text"}> <span className="secondary-text" onClick={this.resetStates} data-toggle="tooltip" data-placement="top" title="tooltip">1. Select Device:</span></div>   
                </div>
                <div className="col-sm-6 center-text">
                      {this.state.viewerPosition}
                      {!this.state.viewerPosition && <span>Use keyboard to select device.</span>}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                    <div className={this.state.viewerPosition ? "action-highlight center-text" : " center-text"}>
                      <span className="secondary-text">2. Select Control Command:</span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="center-text">
                      {this.state.command} (Key: {this.state.keyPressed})
                    </div>
                </div>
              </div>
                
          </div>
            <div className="col-lg-6">
              <div className="row">
                <a href="#" className="btn btn-primary" onClick={this.resetStates}>Reset Demo</a>
                <a href="#" className="btn btn-secondary">More Info/Help</a>
              </div>
              <div className="row border-dashed">
                <div className={this.state.prevState ? 'col-sm animate animate-delay1 middle': 'col-sm animate2 animate-delay1 middle'}>
                  <i className="fas fa-laptop two-X"></i>
                </div>
                <div className={this.state.prevState ? 'col-sm animate animate-delay2 middle': 'col-sm animate2 animate-delay2 middle'}>
                  <i className="fas fa-network-wired"></i>
                </div>
                <div className={this.state.prevState ? 'col-sm animate animate-delay3 middle': 'col-sm animate2 animate-delay3 middle'}>
                  <i className="fas fa-server two-X"></i>

                </div>
                <div className={this.state.prevState ? 'col-sm animate animate-delay4 middle': 'col-sm animate2 animate-delay4 middle'}>
                  <i className="fas fa-network-wired"></i>
                </div>

                <div className='col-sm'>
                  <table className="table">
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
              </div>
            </div>
  
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="title-text-container">
                <span className="title-text">Controls</span>
                <div className="title-text-subtext">
                  {this.state.command && !this.state.viewerPosition && <div className="action-highlight-red"> Please Select a Device --> </div> }
                  {this.state.viewerPosition && !this.state.command && <div className="action-highlight title-text-bounce secondary-text"> 2. Select a command </div>  }
                </div>
              </div>
              <table className="table table-config-1">
                <tbody>
                  <tr>
                    <td className={this.state.keyPressed =='q'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">GUIDE</span><br />
                        <span> Q</span>
                      </div>
                    </td>
                    <td className={this.state.keyPressed =='w'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">  
                        <span className="cell-text">&uarr;</span><br />
                      <span > W </span>
                      </div>
                    </td>
                    <td className={this.state.keyPressed =='e'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">MENU</span><br />
                        <span> E </span>
                      </div>
                    </td>
                    <td className={this.state.keyPressed =='r'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">RED</span><br />
                        <span > R </span>
                      </div>
                    </td>
                     <td className={this.state.keyPressed =='t'? 'letter lightblue-bg': 'letter'}>
                        <div className="cell-text-container">
                          <span className="cell-text">&#9650;</span><br />
                          <span > T </span>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={this.state.keyPressed =='a'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">&larr;</span><br />
                        <span> A</span>
                      </div>
                    </td>
                    <td className={this.state.keyPressed =='s'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">  
                        <span className="cell-text">&darr;</span><br />
                      <span > S </span>
                      </div>
                    </td>
                    <td className={this.state.keyPressed =='d'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">&rarr;</span><br />
                        <span> D </span>
                      </div>
                    </td>
                    <td className={this.state.keyPressed =='f'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">INFO</span><br />
                        <span > F </span>
                      </div>
                    </td>
                     <td className={this.state.keyPressed =='g'? 'letter lightblue-bg': 'letter'}>
                        <div className="cell-text-container">
                          <span className="cell-text">&#9660;</span><br />
                          <span > G </span>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={this.state.keyPressed =='z'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">DASH</span><br />
                        <span>Z</span>
                      </div>
                    </td>
                    <td className={this.state.keyPressed =='x'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">EXIT</span><br />
                        <span>X</span>
                      </div>
                    </td>
                    <td className={this.state.keyPressed =='c'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">REW</span><br />
                        <span>C</span>
                      </div>
                    </td>
                    <td className={this.state.keyPressed =='v'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">PLAY</span><br />
                        <span>V</span>
                      </div>
                    </td>
                     <td className={this.state.keyPressed =='b'? 'letter lightblue-bg': 'letter'}>
                      <div className="cell-text-container">
                        <span className="cell-text">FFWD</span><br />
                        <span>B</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>



              

            </div>
            <div className="col-md-6">
              <div className="title-text-container">
                  <a href="#" className="title-text" id='devices' data-toggle="popover" title="Popover title" data-content="body">Devices</a>
                
                <div className="title-text-bounce">
                  {!this.state.viewerPosition && <span className="action-highlight secondary-text">1. Select a device</span>}
                </div>
              </div>
               <div className='view-single'>
              </div>

               <table className="table table-config-1">
                <tbody>
                  <tr>
                    <td className={this.state.viewerPosition == '1' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container">Device 1</span><br />

                      <span> Y</span>
                    </td>
                    <td className={this.state.viewerPosition == '4' ? 'letter lightblue-bg': 'letter'}>
                    <span className="cell-text-container">Device 4</span><br />
                      <span> U</span>

                    </td>
                    <td className={this.state.viewerPosition == '7' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container">Device 7</span><br />
                      <span>I</span>
                    </td>
                    <td className={this.state.viewerPosition == '10' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container">Device 10</span><br />
                      <span> O</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={this.state.viewerPosition == '2' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container"> Device 2 </span> <br />
                      <span> H</span>
                    </td>
                    <td className={this.state.viewerPosition == '5' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container">Device 5</span><br />
                      <span>J</span>
                    </td>
                    <td className={this.state.viewerPosition == '8' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container">Device 8</span><br />
                      <span>K</span>
                    </td>
                    <td className={this.state.viewerPosition == '11' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container">Device 11</span><br />
                      <span> L</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={this.state.viewerPosition == '3' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container">STB 3</span><br />
                      <span>N</span>
                    </td>
                    <td className={this.state.viewerPosition == '6' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container">Device 6</span><br />
                      <span>M</span>
                    </td>
                    <td className={this.state.viewerPosition == '9' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container">Device 9</span> <br />
                      <span>,</span>
                    </td>
                    <td className={this.state.viewerPosition == '12' ? 'letter lightblue-bg': 'letter'}>
                      <span className="cell-text-container">Device 12</span><br />
                      <span>.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            


          </div>
      </div>
        )
    } else {
      return(
      <div>
        <h1>{this.state.keyPressed}</h1>
        <h1>rendered</h1>
        <form method='post'>
          <input type='text' name='name' />
          <input type='submit' key='submit' />
        </form>
      </div>
    )

    }

    
  }
}



const domContainer = document.querySelector('#react_main_container');
ReactDOM.render(< Main />, domContainer);