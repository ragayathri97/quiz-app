import React, { useState } from 'react'

function Login({ onLogin }){
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError]= useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');


    try{
        const response = await fetch ('https://intermediate-catkin-college.glitch.me/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({username,password}),
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed')
        }

        const data=await response.json();
        const token = data.token;

        if(token){
            localStorage.setItem('token',token)
            onLogin(username);
        }
        else{
            throw new Error('No token received');
        }
    }
    catch (err){
        setError(err.message);
        console.error("Login error:",err);
    }
};
  return (
    <div>
        <h2>Login</h2>
        {error && <p style={{color:'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
            { }
            <button type="submit">Login</button>
        </form>
    </div>
  );

}
export default Login