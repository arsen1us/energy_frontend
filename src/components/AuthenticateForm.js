import React, { useState } from "react";
import axios from "axios";

const AuthenticateForm = () => {
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await axios.post('https://localhost:7128/api/users/authenticate', {UserName: userName, Password: password});
            console.log('Authenticate:', response.data);
        }
        catch(error){
            console.log('Authenticate', error);
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <div>
                    <button type="submit" >Authenticate</button>
                </div>
            </form>
        </div>
    );
};

export default AuthenticateForm;