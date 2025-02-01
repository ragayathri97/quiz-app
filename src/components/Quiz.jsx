import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import QuizItem from './QuizItem';
import '../styles/Quiz.css'
// import { BrowserRouter } from 'react-router-dom';

function Quiz(){
    const navigate = useNavigate;
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [currentquestions, setCurrentQuestions] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    useEffect(() =>{
        fetch('https://intermediate-catkin-college.glitch.me/questions')
        .then(res => res.json())
        .then(data => setQuestions(data))
        .catch(error => 
            console.error("Error fetching questions:",error));
    },[]);
}

export default Quiz