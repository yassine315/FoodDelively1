import myApp from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDcWNlpikoEaVM4LHPEfVGeZriEKlOmrVU",
    authDomain: "reacttp1-ce9fa.firebaseapp.com",
    databaseURL: "https://reacttp1-ce9fa.firebaseio.com",
    projectId: "reacttp1-ce9fa",
    storageBucket: "reacttp1-ce9fa.appspot.com",
    messagingSenderId: "812409112909",
    appId: "1:812409112909:web:d267e8fec0739f6dc14f04",
    measurementId: "G-6JG80Y7YDS"
  };

export default class firebase{
constructor(){
    myApp.initializeApp(config);
    this.auth = myApp.auth();
    this.db = myApp.firestore();
}
 // inscription
 signupUser = (email, password) => 
 this.auth.createUserWithEmailAndPassword(email, password);

 // Connexion
 loginUser = (email, password) => 
 this.auth.signInWithEmailAndPassword(email, password);

 // Déconnexion
 signoutUser = () => this.auth.signOut();

 //Récupérer le mot de passe
 passwordReset = email => this.auth.sendPasswordResetEmail(email); 

 // firestore
 user = uid => this.db.doc(`users/${uid}`);
}