import React, { useState } from 'react'
import '../App.css'
import dark from '../assets/lightwhite.png'
import darkm from '../assets/highlightwhite.png'
import light from '../assets/lightyellow.png'
import lightm from '../assets/highlightyellow.png'
import questions from '../Components/Question.jsx'

function Quizpage() {
    const [questionIdx, setQuestionIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [theme, setTheme] = useState(false);
    const [highLight, setHighlight] = useState(false);


    const currQuestion = questions[questionIdx];

    const selectOption = (index) => {
        // console.log(index)
        if (currQuestion.answer === index) {
            setScore(score + 1);
        }
        const nextQues = questionIdx + 1;
        if (nextQues < questions.length) {
            setQuestionIdx(questionIdx + 1);
        } else {
            setShowScore(true);
        }

    }
    const restartQuiz = () => {
        setQuestionIdx(0);
        setScore(0);
        setShowScore(false);
    };

    const colorChange = () => {
        setTheme(!theme)
    }

    const handleIcon1={
         border: theme ? '2px solid yellow' : '2px solid white' 
    }
    const handleIcon2={
        border: highLight ? '2px solid yellow' : '2px solid white' 
   }

   const backColor={
    backgroundColor: "#120E34"
   }
   
    return (

        <div>
            {
                showScore ?
                    <div>
                        <div id='result'>
                            <h1 className='res'>Final Results</h1>
                            <p className='res' id='score'>
                                {score} out of {questions.length} correct
                                <br />  <br />
                                ({((score / questions.length) * 100)}%)
                            </p>
                            <button className='res' onClick={restartQuiz}>Restart Quiz</button>
                        </div>
                    </div> : (
                        <div style={{ backgroundColor: theme ? "#E0FBFC" : "#120E34" }}>
                            <div id="quizContainer">
                                <br /><br />
                                <p id='noOfQues'><span>{questionIdx + 1}</span>/<span id='totalQuiz'>{questions.length}</span> Questions</p>
                                <p id='question' style={{ color: highLight ? "red" : "white" }}>{currQuestion.question}</p>
                            </div>
                            <div id="choices" className='twoCol'>
                                {currQuestion.options.map((option, i) => {
                                    return <div>
                                        <div id="one" >
                                            <li style={backColor} onClick={() => selectOption(i)}>{option}</li>
                                        </div>
                                    </div>
                                })}

                            </div>
                            <div id="settings">
                                <span className='theme' onClick={colorChange} style={handleIcon1}><img src={theme ? light : dark} style={{ width: '80%', height: 'auto', display: 'block', margin: 'auto', paddingTop: '8px' }} /></span>
                                <span className='theme' onClick={() => setHighlight(!highLight)} style={handleIcon2}><img src={highLight ? lightm : darkm} style={{ width: '70%', height: 'auto', display: 'block', margin: "auto", paddingTop: '8px' }} /></span>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Quizpage;
