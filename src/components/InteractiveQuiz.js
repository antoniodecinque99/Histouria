import "../styles/InteractiveQuiz.css"
import arrow from "../assets/Store/white-arrow.png";
import colosseum from "../assets/Store/colosseum.jpeg";
import QuizComponent from "./QuizComponent";
import { Link } from "react-router-dom";
import { useState } from "react";

function InteractiveQuiz() {
    const [option, setOption] = useState('1');


    return (
        <div className="quiz">
            <div className="quiz-sideMenu">
                <Link to="/home">
                    <button className="quiz-back"><img className="back-img" src={arrow} alt="back arrow" /> Back</button>
                </Link>
                <h2>Quiz categories</h2>
                <button className="quiz-category" onClick={(e) => setOption('1')}>Prehistoric Times</button>
                <button className="quiz-category" onClick={(e) => setOption('2')}>Explorers</button>
                <button className="quiz-category" onClick={(e) => setOption('3')}>World History</button>
                <button className="quiz-category">Edit</button>
                <Link to="/createQuiz">
                    <button className="quiz-category">Create quiz</button>
                </Link>
            </div>
            <div className="quiz-main">
                <h1>Histouria</h1>
                <h2>Where history is played and written</h2>
                <h1>Interactive Quiz</h1>
                <h2>Choose a quiz to test your knowledge</h2>
                {option === '1' &&
                    <div className="quiz-list">
                        <QuizComponent
                            picture={colosseum}
                            name="The Colosseum"
                        />
                        <QuizComponent
                            picture={colosseum}
                            name="The Colosseum"
                        />
                        <QuizComponent
                            picture={colosseum}
                            name="The Colosseum"
                        />

                    </div>
                }{option === '2' &&
                    <div className="quiz-list">
                        <QuizComponent
                            picture={colosseum}
                            name="Placeholder"
                        />
                        <QuizComponent
                            picture={colosseum}
                            name="Placeholder"
                        />

                    </div>
                }
                {option === '3' &&
                    <div className="quiz-list">
                        <QuizComponent
                            picture={colosseum}
                            name="Placeholder Two"
                        />

                    </div>
                }

            </div>
        </div>
    );
}

export default InteractiveQuiz;