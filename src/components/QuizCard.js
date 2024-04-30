import { Overlay, Col, Row, Tooltip } from 'react-bootstrap';
import Separator from './Separator'
import { useState, useEffect, useRef } from 'react';
import useImage from '../utils/useImage'
import Popup from 'reactjs-popup';

import { FaAngleRight } from "react-icons/fa";
import { BsX } from 'react-icons/bs';
import "../styles/QuizList.css";

const APICalls = require('../APICalls') 

const QuizBox = (props) => {
    const { loading, error, image } = useImage(props.picture)
    const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
    const target = useRef(null);

    return (
    <> {loading ? (<h1>Loading...</h1>) :
    (<Col xs={4} className="mb-4" style={{display: 'inline-block'}}>
        <Row className="align-items-top">
            <Col lg={3} md={12}>
                <img src={image} className="quiz-picture" alt="quiz-icon"/>
            </Col>
            <Col lg={5} md={12} style = {{display: 'block', overflow: 'hidden'}}>
                <p className='subtitle' style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{props.quiz_name}</p>
                <p className='description'>{props.description}</p>
            </Col>
            <Col lg={3} md={12}>
                <div style={{marginLeft: "-6px"}}>
                    <Popup trigger={<p className='vr-info-launch-btn'>SHOW</p>} modal nested 
                        overlayStyle={{
                            position: "absolute",
                            top: '0',
                            left: '0',
                            zIndex: '1002'
                        }}
                        contentStyle={{marginTop: "50px", margin: 0, width: "100%", height: "100%"}}>
                        {close => (
                        <div className="vr-info-popup">        
                            <div className="close" onClick={() => close()}>
                                <BsX />
                            </div>
                            <div className="vr-info-img">
                                    <img src={image} alt={`${props.quiz_name}`}/>
                            </div>
                            <div className="vr-info-title-overlay">
                                <Row>
                                <Col xs={12} lg={8}>
                                    <h3>{props.quiz_name}</h3>
                                    <div className="vr-info-subtitle">
                                        <span>{props.description}</span>
                                    </div>
                                </Col>
                                <Col xs={12} lg={4} style={{textAlign: "right", display: "inline-block"}}>
                                    <div className="vr-info-launch-btn" >PLAY </div>
                                </Col>
                                </Row>
                            </div>
                            <div className="vr-info-content">
                                <div className="vr-info-content-text">

                                    <p className="vr-info-launch-btn">EDIT </p>   
                                    <p className="vr-info-launch-btn-delete" ref={target} onClick={() => setShowDeleteOverlay(!showDeleteOverlay)}>
                                        DELETE
                                    </p>
                                        <Overlay target={target.current} show={showDeleteOverlay} placement="bottom" delay={{ show: 250, hide: 400 }}>
                                            {(props) => (
                                            <Tooltip className='tooltip' {...props}>
                                                <span>Are you sure you want to delete this quiz?</span>
                                                <div className="tooltipButtonsContainer">
                                                    <div className="tooltipDeleteButton" onClick={() => {alert("Just kidding!! :))))))))))))))))))"); setShowDeleteOverlay(!showDeleteOverlay)}}>
                                                        DELETE
                                                    </div>
                                                    <div className="tooltipKeepButton" onClick={() => setShowDeleteOverlay(!showDeleteOverlay)}>
                                                        KEEP
                                                    </div>
                                                </div>
                                            </Tooltip>
                                            )}
                                        </Overlay>
                                    <h3 >Overview</h3>
                                    <p>{props.description}</p>
                                    <h3>Authors</h3>
                                    <p>Antonio De Cinque, Luigi Mario</p>
                                    <h3>Technical details</h3>
                                    <p><strong>Number of questions:</strong> 15</p>
                                    <p><strong>File size:</strong> 15.6 MB</p>

                                </div>
                            </div>       
                        </div>
                        )}
                    </Popup>
                </div>
            </Col>
            <Separator></Separator>
        </Row>
    </Col>)
    }
    </>
    )
}

const QuizCard = (props) => {
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        async function load() {
            // console.log(props.category)
            let quizzes = await APICalls.getQuizzes(props.category)
            // console.log(quizzes)
            if (quizzes) {
                setQuizzes(quizzes)
            }
            return quizzes
        }
        load() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scrollableDivRef = useRef(null);

    const handleButtonClick = () => {
      scrollableDivRef.current.scrollTo({
        top: 0,
        left: scrollableDivRef.current.scrollLeft + 200,
        behavior: "smooth"
      });
    };

    return (
        <Row className="main-content">
            <div className="vrMenu-category-title">
            <h2 style={{marginBottom: "15px"}}>{props.category}</h2></div>
            <div className="quiz-list">
                <div ref={scrollableDivRef} className="quiz-scrollingList">
                    <div className="quiz-row">
                        {quizzes.map((quiz, i) => {
                            if (i % 3 == 0)
                            return <QuizBox
                                key={quiz.quiz_name}
                                quiz_name={quiz.quiz_name}
                                description={quiz.description}
                                picture={quiz.picture}>
                            </QuizBox>
                            else return <></>
                        })}
                    </div>
                    <div className="quiz-row">
                        {quizzes.map((quiz, i) => {
                            if (i % 3 == 1)
                            return <QuizBox
                                key={quiz.quiz_name}
                                quiz_name={quiz.quiz_name}
                                description={quiz.description}
                                picture={quiz.picture}>
                            </QuizBox>
                            else return <></>
                        })}
                    </div>
                    <div className="quiz-row">
                        {quizzes.map((quiz, i) => {
                            if (i % 3 == 2)
                            return <QuizBox
                                key={quiz.quiz_name}
                                quiz_name={quiz.quiz_name}
                                description={quiz.description}
                                picture={quiz.picture}>
                            </QuizBox>
                            else return <></>
                        })}
                    </div>
                </div>
                <div style={{position: "relative", bottom: "65%", left: "100%", width: "10px"}}>
                    <FaAngleRight 
                        style={{color: "rgb(10, 132, 255)", fontSize: "25px", cursor: "pointer"}}
                        onClick={handleButtonClick}/>
                </div>
            </div>
        </Row>
    );
}

export default QuizCard;
