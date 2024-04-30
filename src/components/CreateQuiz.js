import "../styles/CreateQuiz.css"
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { BsArrowLeft, BsX } from "react-icons/bs";
import TitleBar from "./TitleBar";
import QuestionCard from "./QuestionCard";
import { Quiz } from "@mui/icons-material";
import QuizQuestionCard from "./QuizQuestionCard";
import { FaEdit, FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';


const APICalls = require('../APICalls')

function CreateQuiz() {

    //Used for input checking in submit button
    const mockQuestions = { quiz_name: "", question_text: "", answerA: "", answerB: "", answerC: "", answerD: "", explanation: "", correct_answer: 0 }
    const [option, setOption] = useState(0);
    const [inputs, setInputs] = useState({});
    const [questions, setQuestions] = useState(mockQuestions);
    const [listOfQuestions, setListOfQuestions] = useState([]);
    const [file, setFile] = useState();
    const [image, setImage] = useState(null);
    const [isFileValid, setFileValid] = useState(false)
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const [disableAddQuestion, setDisableAddQuestion] = useState(true);
    const [isOpen, setIsOpen] = useState(false);


    const titles = ["Basic Information", "Add Questions", "Review & Confirm"]
    const contents = [mainContent1, mainContent2, mainContent3]
    useEffect(() => {
        async function load() {
            let categories = await APICalls.getCategories()
            if (categories) {
                setCategories(categories)
            }
            return categories
        }
        load() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listOfQuestions]);

    const handleOpenPopup = () => {
        console.log(isOpen)
        setIsOpen(true);
    }

    const handleClosePopup = () => {
        if (window.confirm("Are you sure you want to close this popup? You will lose all data relative to the current question.")) {
            setIsOpen(false);
            questions.answerA = ""
            questions.answerB = ""
            questions.answerC = ""
            questions.answerD = ""
            questions.explanation = "" 
            questions.correct_answer = 0
            questions.question_text = ""

        }
    }

    const handleQuit = () => {
        if (window.confirm("If you leave this page, your quiz will not be saved. Are you sure you want to quit without saving?")) {
            window.location.href = '/quizList';
        } else {

        }
    }

    function handleEdit(index) {
        setIsOpen(true);
        setQuestions(listOfQuestions[index]);
        const newListOfQuestions = [...listOfQuestions]
        newListOfQuestions.splice(index, 1)
        setListOfQuestions(newListOfQuestions)
    }

    function handleDelete(index) {
        if (window.confirm("Are you sure you want to delete this question?")) {
            const newListOfQuestions = [...listOfQuestions]
            newListOfQuestions.splice(index, 1)
            setListOfQuestions(newListOfQuestions)
        } else {
        }
    }

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleQuestionChange = (event) => {
        const name = event.target.name
        const value = event.target.value;

        if (questions.answerA !== "" && questions.answerB !== "" &&
            questions.answerC !== "" && questions.answerD !== "" &&
            questions.explanation !== "" && questions.correct_answer !== 0 && questions.question_text !== "") {
            setDisableAddQuestion(false);
        } else {
            setDisableAddQuestion(true);
        }


        setQuestions(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
    }

    function uploadPic(e) {
        setFileValid(false);
        if (e.target.files[0] == undefined)
            return;
        if (e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)) {
            setFile(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
            setFileValid(true);
            handleInputChange(e)
        }
    }

    //MOCK TO ADD QUIZ TO DB
    function addQuizz() {
        APICalls.addQuizz(inputs);
    }

    function addQuestion() {
        //set quiz name for now since mocking submit to DB, check at the end of form
        questions.quiz_name = inputs.name;
        const AuxList = listOfQuestions; //Get current list and append
        AuxList.push(questions);
        setListOfQuestions(AuxList);
        setQuestions(mockQuestions);
    }

    function addImage() {
        const formData = new FormData();
        formData.append('image', image);
        APICalls.addImage(formData);
    }

    function submitToDB() {
        console.log("submitting to DB");
        addQuizz();
        addImage();
        for (var i = 0; i < listOfQuestions.length; i++) {
            APICalls.addQuestion(listOfQuestions[i]);
        }
    }

    function mainContent1() {
        return <form onSubmit={handleSubmit} className="step-1-form">
            <div className="form-container">
                <div className="form-quiz-name form-quiz-section">
                    <label>
                        Quiz name
                        <br />
                        <input
                            type="text"
                            name="name"
                            value={inputs.name || ""}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="form-quiz-category form-quiz-section">
                    <label>
                        Category
                        <br />
                        <select name="category" placeholder="" onChange={handleInputChange}>
                            {
                                categories.map((category) => {
                                    if (inputs.category === "" || inputs.category === undefined) (inputs.category = category.category);
                                    return <option key={category.category} value={category.category}>{category.category}</option>
                                })

                            }
                        </select>
                    </label>
                </div>
                <div className="form-quiz-description form-quiz-section">
                    <label>
                        Description
                        <br />
                        <textarea name="description" value={inputs.description} onChange={handleInputChange} />
                    </label>
                </div>
                <div className="form-quiz-image form-quiz-section">
                    <label>
                        Thumbnail Image
                        <br />
                        <input name="picture" type="file" onChange={uploadPic} />
                        {isFileValid && <img src={file} style={{ width: 200 }} alt="quiz-thumbnail" />
                        }
                    </label>
                </div>
                <div className="form-submit">
                    <input type="submit" onClick={(e) => setOption(1)} value="Next step" />
                </div>
            </div>
        </form>
    }

    function mainContent2() {
        return (
            <>
                {(listOfQuestions.length > 0) ?
                    listOfQuestions.map((question, index) => {
                        return (<div><Button variant="dark" style={{marginRight: "10px", marginBottom: "10px"}} onClick={() => handleEdit(index)}>
                            <FaEdit /> Edit
                        </Button>
                            <Button variant="danger" style={{marginRight: "10px", marginBottom: "10px"}} onClick={() => handleDelete(index)}>
                                <FaTrash /> Delete
                            </Button>
                            <QuestionCard
                                key={question.question_text}
                                question_text={question.question_text}
                                answerA={question.answerA}
                                answerB={question.answerB}
                                answerC={question.answerC}
                                answerD={question.answerD}
                                explanation={question.explanation}>
                            </QuestionCard>
                        </div>)
                    }

                    ) :

                    <p className="utility-text">
                        You haven't added any questions to this quiz yet.
                    </p>

                }

                {/* "add question" button */}
                <div className="play-button-container">
                    <Popup
                        trigger={<p className='upper-case-text play' onClick={handleOpenPopup}>Add question</p>}
                        modal
                        nested
                        contentStyle={{ margin: 0, width: "100%" }}
                        open={isOpen}

                        overlayStyle={{
                            position: "absolute",
                            top: '0',
                            left: '0',
                            zIndex: '1002'
                        }}
                    >
                        {close => (
                            <div className="add-question-popup">
                                <div className="close" onClick={() => {handleClosePopup(); close()}}>
                                    <BsX />
                                </div>
                                <div className="add-question-popup-content">
                                    <h3>Add new question</h3>
                                    <form className="add-question-form">
                                        <label>
                                            Question Text
                                            <br />
                                            <input
                                                type="text"
                                                name="question_text"
                                                className="custom-input question-input"
                                                value={questions.question_text || ""}
                                                onChange={handleQuestionChange}
                                            />
                                        </label>
                                        <div className="answers-row">
                                            <div className="answer">
                                                <label>
                                                    Answer A
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="answerA"
                                                        className="custom-input"
                                                        value={questions.answerA || ""}
                                                        onChange={handleQuestionChange}
                                                    />
                                                </label>
                                            </div>
                                            <div className="answer">
                                                <label>
                                                    Answer B
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="answerB"
                                                        className="custom-input"
                                                        value={questions.answerB || ""}
                                                        onChange={handleQuestionChange}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="answers-row">
                                            <div className="answer">
                                                <label>
                                                    Answer C
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="answerC"
                                                        className="custom-input"
                                                        value={questions.answerC || ""}
                                                        onChange={handleQuestionChange}
                                                    />
                                                </label>
                                            </div><div className="answer">
                                                <label>
                                                    Answer D
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="answerD"
                                                        className="custom-input"
                                                        value={questions.answerD || ""}
                                                        onChange={handleQuestionChange}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="answer-radios">
                                            Correct answer:
                                            <br />
                                            <label><input type="radio" name="correct_answer" value="1" defaultChecked={questions.correct_answer === "1"} onChange={handleQuestionChange} />A</label>
                                            <label><input type="radio" name="correct_answer" value="2" defaultChecked={questions.correct_answer === "2"} onChange={handleQuestionChange} />B</label>
                                            <label><input type="radio" name="correct_answer" value="3" defaultChecked={questions.correct_answer === "3"} onChange={handleQuestionChange} />C</label>
                                            <label><input type="radio" name="correct_answer" value="4" defaultChecked={questions.correct_answer === "4"} onChange={handleQuestionChange} />D</label>
                                        </div>
                                        <label>
                                            Enter a brief explanation for the correct answer:
                                            <br />
                                            <textarea required name="explanation" value={questions.explanation} onChange={handleQuestionChange} />
                                        </label>
                                        <button type="button" disabled={disableAddQuestion ? true : false} className="addQuestionButton" onClick={() => { addQuestion(); close() }}>Add to the quiz</button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>

                {/* Submit */}
                <form className="formaggio">
                    <div className="form-submit">
                        <div className="step-button-container">
                            <input type="submit" onClick={(e) => setOption(0)} value="Previous step" />
                        </div>
                        <div className="step-button-container">
                            <input type="submit" onClick={(e) => setOption(2)} value="Next step" />
                        </div>

                    </div>
                </form>

            </>);

    }

    function mainContent3() {
        return (
            <>
                <QuizQuestionCard
                    quizName={inputs.name}
                    quizDescription={inputs.description}
                    quizImage={file}
                    questions={listOfQuestions}
                />

                {/* Submit */}
                <form className="formaggio">
                    <div className="form-submit">
                        <div className="step-button-container">
                            <input type="submit" onClick={(e) => setOption(1)} value="Previous step" />
                        </div>
                        <div className="step-button-container">
                            <input type="button" onClick={() => {submitToDB(); alert("Quiz created successfully. Press OK to go back to the Quizzes page."); navigate("/quizList")}} value="Submit" />
                        </div>
                    </div>
                </form>

            </>);
    }


    return (
        <Container fluid className="main-container smariano" style={{ overflow: "hidden" }}>
            <TitleBar title="Create New Quiz" />
            <div className="quiz">
                <div className="createQuiz-sideMenu">
                    <div className="createQuiz-back-container"><p className="createQuiz-back" onClick={handleQuit}><BsArrowLeft /> Back to quiz list</p></div>
                    <div className={"createQuiz-step " + (option === 0 ? "selected-step" : "")}>1. {titles[0]}</div>
                    <div className={"createQuiz-step " + (option === 1 ? "selected-step" : "")}>2. {titles[1]}</div>
                    <div className={"createQuiz-step " + (option === 2 ? "selected-step" : "")} id="step3-div">3. {titles[2]}</div>
                </div>
                <div className="quiz-main-scrollable-container">
                    <div className="quiz-main">
                        <span className="breadcrumb-previous">Interactive quizzes</span> <span className="breadcrumb-current"> / Create New Quiz</span>
                        <h3>{titles[option]}</h3>
                        {contents[option]()}
                    </div>
                </div>
            </div >
        </Container>
    );
}

export default CreateQuiz;