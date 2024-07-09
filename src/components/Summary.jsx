import trophyImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions"

export default function Summary({quizAnswer}){

    const skippedAnswer = quizAnswer.filter(answer => answer === null);
    const correctAnswer = quizAnswer.filter((answer,index)=>answer === QUESTIONS[index].answers[0])

    const skippedAnswerShare = Math.round(
        (skippedAnswer.length / QUESTIONS.length) * 100
    );

    const correctAnswerShare = Math.round(
        (correctAnswer.length / QUESTIONS.length) * 100
    );

    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

    return(
        <div id="summary">
            <h2>Quiz Completed</h2>
            <img src={trophyImg} alt="trophyImg" />
            <div id ="summary-stats">
                <p>
                <span className="number">{skippedAnswerShare}%</span>
                <span className="text">skipped</span>
                </p>
                <p>
                <span className="number">{correctAnswerShare}%</span>
                <span className="text">Correct</span>
                </p>
                <p>
                <span className="number">{wrongAnswerShare}%</span>
                <span className="text">Wrong</span>
                </p>
            </div>
            <ol>
            {quizAnswer.map((answer,index)=>{
                let cssClass = "user-answer";
                if(answer === null){
                    cssClass += ' skipped';
                }else if(answer === QUESTIONS[index].answers[0]){
                    cssClass += ' correct';
                }else{
                    cssClass += " wrong";
                }

                return(
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className="question">{QUESTIONS[index].text}</p>
                        <p className={cssClass}>{answer?? 'Skipped'}</p>

                    </li>
                );
            }
            )}
        </ol>
        </div>
    )

}