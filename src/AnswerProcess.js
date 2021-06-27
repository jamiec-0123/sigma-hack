import React, { useState,useEffect } from 'react';
import raw from './sample-answers.txt';
const tf = require('@tensorflow/tfjs');
var questionFromFileUnformatted="";
var otherMadness;

function AnswerProcess() {
  const [changeAnswer, updateQustion] = useState(0);

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
      });
    })
    return (
      <div className="AnswerProcess">
        Testing the Answers
        {otherMadness}
      </div>
    )
  }
  
  export default AnswerProcess;
  