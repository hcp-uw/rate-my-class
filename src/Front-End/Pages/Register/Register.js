import './Register.css'

import NavBar from '../../Components/NavBar/NavBar.js'
import { useState } from 'react';
//import auth functions and variables from Firebase
import { getAuth, EmailAuthProvider, GoogleAuthProvider, signOut, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword  } from 'firebase/auth'
import StyledFirebaseAuth from './StyledFirebaseAuth.tsx';

//an object of configuration values
const firebaseUIConfig = {
  signInOptions: [ //array of sign in options supported
    //array can include just "Provider IDs", or objects with the IDs and options
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup', //don't redirect to authenticate
  credentialHelper: 'none', //don't show the email account chooser
  callbacks: { //"lifecycle" callbacks
    signInSuccessWithAuthResult: () => {
      window.location.reload()
      return false; //don't redirect after authentication
    }
  }
}

function Register() {
    // const [userName, setUserName] = useState("");
    // useEffect(() => {


    // }, [])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const auth = getAuth();
    //access the "authenticator"
     //access the "authenticator"
    // const handleUserName = (name) => {
    //   // take the parameter passed from the Child component
    //   setUserName(name);
    // }
    const handleSignOut = () => {
        signOut(auth);
        window.location.reload()
  
    }

    const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential)
          })
        .catch(err => console.log({err}))
        setEmail('')
        setPassword('')
        setName('')
    }
    const WelcomeMsg = () => {
      
      return (
      <div className='Page'>
        <h1>Please Register
        </h1>
        <div className="login_container">
            <form>
                <input
                type="text"
                className="login_textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
                />
                <input
                type="password"
                className="login_textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                />
                <input
                type="text"
                className="login_textBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                />
                <button
                className="login_btn"
                onClick={() => handleRegister()}
                >
                Register
                </button>
            </form>

        </div>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} 
              firebaseAuth={auth}  />
      </div>
       );
    }


    return (
      <div className="SignInPage">
        <NavBar/>
        {WelcomeMsg()}
      </div>
    );
  }
  
export default Register;