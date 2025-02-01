import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Result(){
    const navigate = useNavigate();
    const [score, setScore] = useState(null);

    useEffect(() => {
        const storedScore = localStorage.getItem('quizScore');
        if(storedScore){
            setScore(parseInt(storedScore, 10));
        } 
        else{
            navigate('/quiz');
        }
    },[navigate]);

    if(score === null){
        return <div>Loading...</div>
    }

  return (
    <div className="result-container">
        <h2>Quiz Result</h2>
        <p>Your Score: {score} out of 3</p>
        <button onClick={() => navigate('/quiz')}>
            Take Quiz Again
        </button>
    </div>
  )
}
export default Result