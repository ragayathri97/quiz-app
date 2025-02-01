import React, { useState } from 'react'

function AuthContent(){
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () =>{
        setTimeout(()=>{
            setIsLoggedIn(true);
        }, 1000);
    };
    const handleLogout =() =>{
        setIsLoggedIn(false);
    };
    if(isLoggedIn){
        return(
            <div>
                <h2>Welcome!</h2>
                <p>You are now logged in</p>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        );
    } 
    else{
        return(
            <div>
                <h2>Plese Login</h2>
                <p>You need to be logged in to access this content.</p>
                <button onClick={handleLogin}>
                    Login
                </button>
            </div>
        );
    }
}

export default AuthContent