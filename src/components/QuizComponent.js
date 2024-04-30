import "../styles/QuizComponent.css"

function QuizComponent({ picture, name }) {
    return (
        <div className="quizComponent">
            <div className="quizComponent-item">
                <img src={picture} alt={`${name} picture`}/>
                <h1>{name}</h1>
            </div>
        </div>
    );
}

export default QuizComponent;