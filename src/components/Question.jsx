import { useState } from "react";
import Answer from "./Answer";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions"

export default function Question({ index,onSelectedAns, onSkipAns }) {

    const [answer, setAnswer] = useState({
        seletedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if(answer.seletedAnswer){
        timer = 1000;
    }

    if(answer.isCorrect !== null){
        timer = 2000;
    }

    function handleSelectAns(answer) {
        setAnswer({
            seletedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                seletedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })
            setTimeout(() =>{
                onSelectedAns(answer);
            },2000)
        }, 1000);

    }
    let answerState = '';
    if(answer.seletedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }else if(answer.seletedAnswer){
        answerState = "answered";
    }

    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                timeOut={timer}
                onTimeOut={answer.seletedAnswer === '' ? onSkipAns : null} 
                mode={answerState}
            />
            <h2>{QUESTIONS[index].text}</h2>
            <Answer
                answers={QUESTIONS[index].answers}
                seletedAnswer={answer.seletedAnswer}
                answerState={answerState}
                handleClick={handleSelectAns}
            />
        </div>
    )

}