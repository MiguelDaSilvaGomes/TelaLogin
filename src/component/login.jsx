import React from 'react';
import { Link } from 'react-router-dom';

const login = () => {
        return (      
            <div className='App'>
                <h1 className='Text'>Login</h1>
                <input className='input' type="text" placeholder='Username'/><br />
                <input className='input' type="text" placeholder='Password' /><br />
                <Link to="home"> <button  className='button' type="submit">Submit</button></Link>
            </div> 
            );
}
 
export default login;