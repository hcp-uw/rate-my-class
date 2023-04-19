import './SignInPage.css'

import NavBar from '../../Components/NavBar/NavBar.js'

//import auth functions and variables from Firebase
// import { getAuth, EmailAuthProvider, GoogleAuthProvider, signOut } from 'firebase/auth'
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from './StyledFirebaseAuth.tsx';
import { useLocation, useNavigate } from 'react-router-dom';

//an object of configuration values
const firebaseUIConfig = {
  signInOptions: [ //array of sign in options supported
    //array can include just "Provider IDs", or objects with the IDs and options
    GoogleAuthProvider.PROVIDER_ID,
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
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

function SignIn() {

    const auth = getAuth(); //access the "authenticator"
     //access the "authenticator"
    const user = auth.currentUser
    // const { state: { className = "" } = {} } = useLocation();
    const className = useLocation().state?.className;

    const navigate = useNavigate();

    console.log("class name in signin: " + className);

    // const handleSignOut = () => {
    //   signOut(auth);
    //   navigate('/');

    //   // window.location.reload()

    // }
  
    const WelcomeMsg = () => {
      if (user && className) {
        const redirectURL = '/rate/' + className;
        return (
          <div className='Page'>
            <h1>Welcome to Rate My Class, {user.displayName}! </h1>
            <div>
              <button onClick={(e) => {navigate(redirectURL)}}>Return to {className}</button>
            </div>
          </div>
        );
      } else if (user) {
        return (
          <div className='Page'>
            <h1>Welcome to Rate My Class, {user.displayName}! </h1>
            {/* <button onClick={handleSignOut} className='signOutButton'>Sign Out</button> */}
          </div>
        );
      }

      return (
      <div className='Page'>
        <h1>Please sign-in</h1>
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
  
export default SignIn;