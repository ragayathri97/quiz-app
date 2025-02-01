import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'


// https://intermediate-catkin-college.glitch.me
function Home(){
    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/quiz');
    };

  return (
    <div className="home">
        <h1>Welcome to the Quiz App!</h1>
        <p>Test your knoledge and challenge yourself with our quiz. Please Login to get started</p>
        <button onClick={handleLogin}>
            Login
        </button>
    </div>
  );
}
export default Home;