import { useState, useCallback } from "react";
import Question from "./Question.jsx";
import Questions from "../questions.js";
import Summary from "./Summary.jsx";


export default function Quiz() {

    const [quizAnswer, setQuizAnswer] = useState([]);
    const quizIndex = quizAnswer.length;

    const quizIsComplete = quizIndex === Questions.length;

    const handleClick = useCallback(function handleClick(answer) {
        setQuizAnswer((prevAns) => {
            return [...prevAns, answer];
        }
        );
    }, [])

    const skipAnswer = useCallback(() => handleClick(null), [handleClick])

    if (quizIsComplete) {
        return <Summary quizAnswer={quizAnswer}/>
    }

    return (
        <div id="quiz">
           <Question 
           key={quizIndex}
           index={quizIndex}
           onSelectedAns={handleClick}
           onSkipAns={skipAnswer}
           />
        </div>
    )
}