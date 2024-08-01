import React, {useState} from "react";
import axios from 'axios';

const RegisterForm = () => {
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');

    //const[error, setError] = useState('');
    //const[success, setSuccess] = useState('');

    const handleUserName = async (event) => {
        setUserName(event.target.value);
        const response = await axios.post("https://localhost:7128/api/users/check-email", {UserName: userName})
        console.log('Login availability', response.data)
    }

    const handlePassword = async (event) => {
        setPassword(event.target.value);
        const response = await axios.post("https://localhost:7128/api/users/check-password", {Password: password})
        console.log('Password availability', response.data)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post('https://localhost:7128/api/users/registration', {UserName: userName, Password: password});
            console.log("Console log: ", userName, " " ,password);
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
            <h2>Register form</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={userName} onChange={handleUserName} required></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' value={password} onChange={handlePassword} required></input>
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;