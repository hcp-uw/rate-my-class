import './SignInPage.css'

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
    // useEffect(() => {


    // }, [])
    const auth = getAuth(); //access the "authenticator"
     //access the "authenticator"
    const user = auth.currentUser
    // const handleUserName = (name) => {
    //   // take the parameter passed from the Child component
    //   setUserName(name);
    // }

    const WelcomeMsg = () => {
      console.log(user)
      if (user) {
        return (<h1>Welcome to Rate My Class, {user.displayName}! </h1>);
      }
      return ( <h1>Please sign-in</h1> );
    }
    return (
      <div className="SignInPage">
        <NavBar/>
        <div className='Page'>
            {WelcomeMsg()}
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} 
              firebaseAuth={auth}  />
        </div>
      </div>
    );
  }
  
export default SignIn;