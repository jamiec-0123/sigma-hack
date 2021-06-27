import React, { useState,useEffect } from 'react';
import raw from './sample-questions.txt';
const tf = require('@tensorflow/tfjs');

var questionFromFileUnformatted="";
var otherMadness;
function QuestionProcess() {
  const [magical, magicalFunction] = useState(0);

    // Train a simple model:
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
    model.add(tf.layers.dense({units: 1, activation: 'linear'}));
    model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
    
    const xs = tf.randomNormal([100, 10]);
    const ys = tf.randomNormal([100, 1]);
    
    fetch(raw)
    .then(r => r.text())
    .then(text => {
      
      questionFromFileUnformatted=text;
      console.log(questionFromFileUnformatted)
      questionFromFileUnformatted.split("\n").map((i,key) => {
        otherMadness= <div key={key}>{i}</div>;

      })
    });
    return (
      <div className="QuestionProcess" id="questions">
        Testing the questions {otherMadness}
      </div>
    );
  }
  
export default QuestionProcess;
/*

function LoggedInBar(props){
  const [count , currentPageNum] = useState(0); 
  useEffect(() => {    
  // Update the document title using the browser API    
  document.title = `You clicked ${count} times`;  });
  if(props.isTeacher){
    return(
        <div class="row center">
        <br/>
          <br/>
          <hr/>
          <br/>
          <br/>
          <a><h4 class="black-text">Debug menu</h4></a>
          <br/>
          <br/>
          <button onClick={() => currentPageNum(count  - 1)}>
          <a href="#" id="download-button" class="btn-large waves-effect waves-light red">{count}</a>
          </button>
          <button onClick={() => currentPageNum(count  + 1)}>
          <a href="#" id="download-button" class="btn-large waves-effect waves-light red">{count}</a>
          </button>
        </div>
    );
  }
  return(
        <a href="#" id="download-button" class="btn-large waves-effect waves-light light-green">Test</a>
      );

}

  */
  