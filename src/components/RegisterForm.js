import React, {useState} from "react";
import axios from 'axios';

const RegisterForm = () => {
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');

    const[error, setError] = useState('');
    const[success, setSuccess] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            console.log("Console log: ", userName, " " ,password);
            const response = await axios.post('https://localhost:7128/api/users', {UserName: userName, Password: password});
            console.log('Data', response.data)
            //setSuccess(response.data.message);
            //setError('');
        }
        catch (err){
            console.log(err);
            //setError(err.response.data.message || 'Registration failed');
            //setSuccess('');
        }
    };
    return (
        <div>
            <h2>Register form</h2>3
            {error && <p style={{color: 'red'}}>{error}</p>}
            {success && <p stype={{color: 'green'}}>{success}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;