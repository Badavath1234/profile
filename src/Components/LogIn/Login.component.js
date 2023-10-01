import React, { useState } from "react";

import '../LogIn/Login.css'
import StudentLog from '../../Assets/student.jpeg'
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {

      if (email === 'venky@gmail.com' && password === '123456') {

        // localStorage.setItem('token', 'fakeToken');
        history.push('/navbar');
      } else {
        console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (

    <div className="Container">


      <div>
        <img src={StudentLog} className="img-fluid" alt='login-pic'></img>
      </div>

      <div>

        <form className="form-Container">
          <div className="text-box">
            <h3>Learn.Practice.Perform</h3>
          </div>
          <h2>Sign In</h2>

          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

            <input type="email" className="form-control" placeholder="Email" value={email}
              onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="btn-checkbox-Container">
            <button type="submit" className="btn-btn" onClick={handleLogin}>Submit</button>

            <div className="m-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Remember</label>

            </div>
            <div className="btn-right">
              <h6>Forgot Password</h6>
            </div>



          </div>
          <div className="text-box">
            <h3>CREATE ACCOUNT</h3>
          </div>


        </form>
      </div>


    </div>
  )
};
export default StudentLogin;