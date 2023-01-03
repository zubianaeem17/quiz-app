import React, { useState } from "react";
import "./App.css";

function App() {
  const [res,showRes] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQues, setCurrentQues] =useState(0);
  const questions = [
    {
      ques: "What is the currency of Pakistan?",
      options: [
        { id:0, text: "Rupee", isCorrect: true},
        { id:1, text: "Dollar", isCorrect: false},
        { id:2, text: "Euro", isCorrect: false},
        { id:3, text: "Taka", isCorrect: false},

      ]
    },
    {
      ques: "Who is the president of Pakistan?",
      options: [
        { id:0, text: "Imran Khan", isCorrect: false},
        { id:1, text: "Asif Zardari", isCorrect: false},
        { id:2, text: "Bilawal Bhutto", isCorrect: false},
        { id:3, text: "Arif Alvi", isCorrect: true},

      ]
    },
    {
      ques: "Which is the second highest mountain in thhe world?",
      options: [
        { id:0, text: "Mount Everest", isCorrect: false},
        { id:1, text: "Nanga Purbat", isCorrect: false},
        { id:2, text: "K-2", isCorrect: true},
        { id:3, text: "Karakoram", isCorrect: false},

      ]
    },
    {
      ques: "Where is trhe river Indus located?",
      options: [
        { id:0, text: "Pakistan", isCorrect: true},
        { id:1, text: "America", isCorrect: false},
        { id:2, text: "China", isCorrect: false},
        { id:3, text: "India", isCorrect: false},

      ]
    }

  ]
  const optionClicked = (isCorrect)=>{
    if (isCorrect) {
      setScore(score+1)
    }
    if (currentQues+1 < questions.length) {
      setCurrentQues(currentQues+1)
    } 
    else {
      showRes(true)
    }
    
  }
  return (
    <>
     
      {res ? (
        <>
      <div className="main">
        <h1 className="quiz-heading">Quiz App</h1>
      <div className="res">
      

          <h3>Your score is {score} out of 4</h3>
        </div>
        </div>
        </>) : 
      
        (<> <div className="main">
          <h1 className="quiz-heading">Quiz App</h1>
          <div className="content"> 
          
            <h3>Question {currentQues+1} <span>/{ questions.length}</span></h3>
            <p>{questions[currentQues].ques}</p>
            {questions[currentQues].options.map((option) => {
              return (
                <button onClick={()=> {
                  optionClicked(option.isCorrect)
                }} 
                key={option.id} className="option">{option.text}</button>
              )
            })}

          </div>
        </div>
        </>) }
     
</>
  
  );
  }

export default App;
