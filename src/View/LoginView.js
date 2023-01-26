import React from "react"
import Logincss from "./Loginstyle.css"
import { useState } from "react";
import axios from "axios";
export default function (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    async function handleSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.post('/login', {
          email: email,
          password: password
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  return (
    <div style={styles.mainpage}>
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
          <label>
        Email :
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
          </div>
          <label>
        Mot de passe :
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
       {/* // <button type="submit">Connexion</button> */}
      </form>
    </div>
    </div>
  )
}

const styles = {

    mainpage: {
        backgroundColor: '#282c34',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        color: 'white',
    },
}