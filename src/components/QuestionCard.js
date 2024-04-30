import React from 'react';
import "../styles/QuestionCard.css"

const QuestionCard = (props) => {
    return (
        <div className='qc-content'>
            <h3>{props.question_text}</h3>
            <div className='qc-answers'>
                <p>{props.answerA}</p>
                <p>{props.answerB}</p>
                <p>{props.answerC}</p>
                <p>{props.answerD}</p>
            </div>
            <p>{props.explanation}</p>
        </div>
    );
}

export default QuestionCard;