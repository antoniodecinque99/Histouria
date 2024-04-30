import React from 'react';
import QuestionCard from './QuestionCard';
import "../styles/QuizQuestionCard.css"

const QuizQuestionCard = (props) => {
    return (
        <div className='quiQuestionCard'>
            <div className='qqc-header'>
                <div>
                    <p className='qqc-categories'>Quiz Name</p>
                    <h2>{props.quizName}</h2>
                    <p className='qqc-categories'>Description</p>
                    <p>{props.quizDescription}</p>
                </div>
                <img src={props.quizImage} alt={props.quizName} />
            </div>
            
            <div>
                {props.questions.map((question, index) =>
                (
                    <div>
                        <p className='qqc-categories qqc-questionNbr'>Question {index+1}</p>
                        <QuestionCard
                            key={index}
                            question_text={question.question_text}
                            answerA={question.answerA}
                            answerB={question.answerB}
                            answerC={question.answerC}
                            answerD={question.answerD}
                            explanation={question.explanation}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizQuestionCard;