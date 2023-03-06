import React from 'react'
import { useState } from 'react';
import './Questions.css'


const Questions = () => {
    var ListQuestions = [
        {
            Question: "What is the result for Math.round(4.5)?",
            Answers: [
                { Answer: "5", isCorrect: true },
                { Answer: "9", isCorrect: false },
                { Answer: "20", isCorrect: false },
                { Answer: "4", isCorrect: false }
            ]
        },
        {
            Question: "Which operator to value the multiply then assign?",
            Answers: [
                { Answer: "**", isCorrect: false },
                { Answer: "*=", isCorrect: true },
                { Answer: "&&", isCorrect: false },
                { Answer: "!==", isCorrect: false }
            ]
        }, {
            Question: "What statement to specify a new condition to test, if the first condition is false?",
            Answers: [
                { Answer: "if", isCorrect: false },
                { Answer: "else", isCorrect: false },
                { Answer: "else if", isCorrect: true },
                { Answer: "switch", isCorrect: false }
            ]
        },
        {
            Question: "Which data type that cannot contain values?",
            Answers: [
                { Answer: "array", isCorrect: false},
                { Answer: "boolean", isCorrect: false },
                { Answer: "string", isCorrect: false },
                { Answer: "undefined", isCorrect: true }
            ]
        },
]


//function

const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect: boolean)=>
{
if(isCorrect)
{
    setScore(score+1);
}

const nextQuestion= currentQuestion+1;
if(nextQuestion<ListQuestions.length)
{
setCurrentQuestion(nextQuestion);
}
else{
setShowScore(true);
}
}

const resetQuiz=()=>
{
setCurrentQuestion(0);
setScore(0);
setShowScore(false);
}

return (
    <div className='app'>
        {showScore ? (
            <div className='score-section'>
                You have scored {score} out of {ListQuestions.length}
                <>
                   <button type="submit" onClick={resetQuiz}>Repeat playing?</button>
                </>
            </div>
        )
            : (
                <>
                    <div className='question'>
                        <div className='question-count'>
                           <span>{currentQuestion+1}</span>/{ListQuestions.length}
                        </div>

                        <div className='question-text'>
                         {ListQuestions[currentQuestion].Question}
                        </div>
                    </div>

                    <div className='result'>
                      {ListQuestions[currentQuestion].Answers.map((answer)=>
                      (
                          <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                      ))}
                    </div>
                </>
            )
        }

    </div>
);
}

export default Questions;