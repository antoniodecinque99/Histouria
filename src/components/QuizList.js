import { Button, Container, Row, Col } from 'react-bootstrap'
import "../styles/Store.css";

import TitleBar from "../components/TitleBar"
import { useState, useEffect } from 'react';
import QuizCard from './QuizCard';
import { BsPlus, BsX } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsPenFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const APICalls = require('../APICalls') 

export default function Drawer() {
    const [categories, setCategories] = useState([]);
    const [expandedFloating, setExpandedFloating] = useState(false)


    const navigate = useNavigate();
    useEffect(() => {
        async function load() {
            let categories = await APICalls.getCategories()
            if (categories) {
                setCategories(categories)
            }
            return categories
        }
        load() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
    <>
        <Container fluid className="main-container">
            <TitleBar title="Quizzes"></TitleBar>

            {categories.map((category) => {
                return <QuizCard key={category.category} category={category.category}></QuizCard>
                // <h1 key={category.category} className='category-title'>{category.category}</h1>
            })}
            {/* "Add Quiz" button  */}
        </Container>
        { expandedFloating ?
        <div className="add-quiz-button-red" style={{position: 'fixed', bottom: '100px', right: '40px', fontSize: '50px', width: '70px', height: '70px'}} onClick={() => {setExpandedFloating(!expandedFloating)}}>
            <BsX />
        </div>
        : 
        <div className="add-quiz-button" style={{position: 'fixed', bottom: '100px', right: '40px', fontSize: '50px', width: '70px', height: '70px'}} onClick={() => {setExpandedFloating(!expandedFloating)}}>
            <BsPlus />
        </div>
        }
        { expandedFloating ?
        <>
        <div className="add-quiz-button" style={{position: 'fixed', bottom: '185px', right: '45px', fontSize: '25px', width: '60px', height: '60px'}} onClick={() => {navigate('/createQuiz')}}>
            <BsPenFill />
        </div>
        <div style={{position: 'fixed', bottom: '195px', right: '120px', backgroundColor: 'white', borderRadius: '10px', padding: '10px', textAlign: 'center', color: 'black', fontWeight: 'bold', userSelect: 'none'}}>
            Create new quiz
        </div>
        <div className="add-quiz-button" style={{position: 'fixed', bottom: '260px', right: '45px', fontSize: '25px', width: '60px', height: '60px'}} onClick={() => {setExpandedFloating(!expandedFloating)}}>
            <BiCategoryAlt />
        </div>
        <div style={{position: 'fixed', bottom: '270px', right: '120px', backgroundColor: 'white', borderRadius: '10px', padding: '10px', textAlign: 'center', color: 'black', fontWeight: 'bold', userSelect: 'none'}}>
            Create new category
        </div>
        </>
        : <></> }
    </>
    )
}