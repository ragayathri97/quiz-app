import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Result(){
    const {userId}=useParams();
    const[score,setScore]=useState(null);
    const[totalQuestion, setTotalQuestion]=useState(null);
    const[error,setError]=useState(null);


    useEffect(() => {
        const fetchResult = async()=>{
            try{
                const responce= await fetch('/https://intermediate-catkin-college.glitch.me/result/${userId}');
                if(!response.ok){
                    const errorData=await response.json();
                    throw new
                    Error(errorData.message || 'Failed to fetch results')
                }
                const data=await response.json();
                setScore(data.score);

                setTotalQuestions(data.totalQuestions);
            }
            catch(err){
                setError(err.message);
                console.error("Error fetching results:", err)
            }
        };

        fetchResult();
    },[userId]);

    if(error){
        return <div>Error: {error}</div>;
    }

    if(score === null || totalQuestions === null){
        return <div>Loading results...</div>;
    }
return (
<div>
    <h2>Quiz Result</h2>
    <p>Your Score: {score}/{totalQuestions}</p>
    <p>{score === totalQuestions ?(
        "Congratulations! You got all the Questions right."
    ):('You answered ${score} out of $ {totalQuestions} questions correctly.')
}
        </p>
</div>
);
}
       
export default Result;