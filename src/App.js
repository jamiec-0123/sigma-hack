import React, { useState,useEffect } from 'react';
import AnswerProcess from "./AnswerProcess";
import QuestionProcess from "./QuestionProcess";
import materiallze from "./css/materialize.css"
var testingAnswers= false


function App() {
  const [currentMode , changeMode] = useState(0); 
  
  
  // Update the document title using the browser API    
  var selectedMode = {currentMode};
  console.log(selectedMode.currentMode)
  testingAnswers = false
  if(selectedMode.currentMode >= 1){
    testingAnswers = true
  }
  console.log(testingAnswers)
  return (
    <div className="Main">
    <div class="section no-pad-bot" id="index-banner">
    <div class="container">
        <br/>
          <br/>
          <hr/>
          <br/>
          <br/>
      <h1 class="header center black-text">edu-net</h1>
        <br/>
          <br/>
      <div class="row center">
        <h4 class="header col s12 light">Educating the new generation</h4>
      </div>
        <br/>
          <br/>
          <hr/>
          <br/>
          <br/>
      <div class="row center">
      <CheckDebugging isDebuging={true} isTestingAnswers={testingAnswers} currentMode={currentMode} changeMode={changeMode}/>
    </div>
      </div>
    </div>
  </div>
  );
}



function CheckDebugging(props){
  const isDebuging= props.isDebuging;
  if(isDebuging){
    return <DebugingBar isTestingAnswers={props.isTestingAnswers } currentMode={props.currentMode} changeMode={props.changeMode}/>
  }
  return <UnloggedIn/>
}

function UnloggedIn(props){
    return(
          <a href="#" id="download-button" class="btn-large waves-effect waves-light black white-text">
            Start debugging
          </a>
    );
}

function DebugingBar(props){
  if(props.isTestingAnswers){
    return(
        <div class="row center">
        <br/>
        <br/>
          <a><h4 class="black-text">Answer debug menu</h4></a>
          <AnswerProcess/>
          <br/>
          <br/>
          <button onClick={() => props.changeMode(props.currentMode  - 1)}>
          <a href="#" id="download-button" class="btn-large waves-effect waves-light red">-</a>
          </button>
          <button onClick={() => props.changeMode(props.currentMode  + 1)}>
          <a href="#" id="download-button" class="btn-large waves-effect waves-light red">+</a>
          </button>
        </div>
    );
  }
  return(
    
    <div class="row center">
      <a><h4 class="black-text">Question debug menu</h4></a>
      <QuestionProcess/>
      <br/>
      <br/>
      <button onClick={() => props.changeMode(props.currentMode  - 1)}>
      <a href="#" id="download-button" class="btn-large waves-effect waves-light red">
        -
      </a>
      </button>
      <button onClick={() => props.changeMode(props.currentMode  + 1)}>
      <a href="#" id="download-button" class="btn-large waves-effect waves-light red">+</a>
      </button>
    </div>
);
}



export default App;

/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);

  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" class="validate">
          <label for="disabled">Disabled</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email_inline" type="email" class="validate">
            <label for="email_inline">Email</label>
            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
    </form>
  </div>
*/