import { useRef } from "react";

export default function Answer({answers,seletedAnswer,answerState,handleClick}){
    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return(
        <div id="answers">
                {shuffledAnswers.current.map((answer) => {
                    const isSelected  = seletedAnswer === answer;
                    let cssClass = '';
                    if(answerState === 'answered' && isSelected){
                        cssClass = "selected";
                    }
                    if((answerState === "correct" || answerState === "wrong") && isSelected){
                        cssClass = answerState;
                    }
                    return (
                        <li key={answer} className="answer">
                            <button 
                            onClick={() => handleClick(answer)}
                            className = {cssClass}
                            disabled={answerState !== ''}
                            >
                                {answer}
                            </button>
                        </li>
                    );
                })}
            </div>
    )

}