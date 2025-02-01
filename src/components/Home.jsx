import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); // Add username state
  const [password, setPassword] = useState(''); // Add password state
  const [error, setError] = useState(''); // Add error state


  const handleLogin = async () => {
    setError(''); // Clear any previous errors

    try {
      const response = await fetch('/login', { // Use the provided /login endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Send username and password
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get error details from server
        throw new Error(errorData.message || 'Login failed'); // Throw error with message
      }

      // If successful, the server should return some data (e.g., a token)
      const data = await response.json();

      // Assuming the server returns a token (adjust as needed)
      const token = data.token;  // Adjust according to your server's response

      if (token) {
        localStorage.setItem('token', token); // Store the token (or however you want to persist login state)
        navigate('/quiz-app'); // Redirect to quiz page
      } else {
        throw new Error('No token received from server.');
      }

    } catch (err) {
      setError(err.message); // Set error message in state
      console.error("Login error:", err);
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the Quiz App!</h1>

        {/* Input fields for username and password */}
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        {/* Display error message if any */}
        {error && <p className="error-message">{error}</p>}

        <button onClick={handleLogin} className="home-login-button">Login</button>
      </div>
    </div>
  );
}

export default Home;