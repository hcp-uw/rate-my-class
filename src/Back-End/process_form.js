import { initializeApp, credential as _credential, database } from 'firebase-admin';
import { createUserWithEmailAndPassword } from 'firebase-auth-node';
import bcrypt from 'bcryptjs';
import serviceAccount from './path/to/serviceAccountKey.json';

initializeApp({
    credential: _credential.cert(serviceAccount)
});

function hashPassword(password) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

function createUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    // validate input
    if (!email || !password || !username) {
        return res.status(400).send('Please fill in all required fields');
    }

    // create new user account
    createUserWithEmailAndPassword(email, password)
        .then(user => {
        const uid = user.uid;
        const hashedPassword = hashPassword(password);

        // store user data in database
        database().ref('users/' + uid).set({
            email: email,
            username: username,
            password: hashedPassword
        })
            .then(() => {
            return res.status(200).send('User account created successfully');
            })
            .catch(error => {
            return res.status(500).send(error.message);
            });
        })
        .catch(error => {
        return res.status(500).send(error.message);
        });
}
