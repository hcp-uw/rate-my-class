import './SignInPage.css'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import NavBar from '../../Components/NavBar/NavBar.js'

//import auth functions and variables from Firebase
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from './StyledFirebaseAuth.tsx';

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
      return false; //don't redirect after authentication
    }
  }
}

function SignIn() {
    // const [userName, setUserName] = useState("");
    const auth = getAuth(); //access the "authenticator"
    const { userName, setUserName } = useContext(UserContext);

    const handleUserName = (name) => {
      // take the parameter passed from the Child component
      setUserName(name);
    }

    const WelcomeMsg = (userName) => {
      if (userName !== (null || undefined) && userName.trim() !== "") {
        return (<h1>Welcome to Rate My Class, {userName}! </h1>);
      }
      return ( <h1>Please sign-in</h1> );
    }

    return (
      <div className="SignInPage">
        <NavBar/>
        <div className='Page'>
            {WelcomeMsg(userName)}
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} 
              firebaseAuth={auth}  getUserName={handleUserName} />
        </div>
      </div>
    );
  }
  
export default SignIn;