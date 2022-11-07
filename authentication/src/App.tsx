// Libraries
import React, {useEffect} from 'react';
import * as firebaseui from 'firebaseui'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebaseui/dist/firebaseui.css'

const MyApp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyB_7npAIvYGXq_970-0pzHa0sF56mE9PcA",
        authDomain: "agile-antler-210706.firebaseapp.com",
        databaseURL: "https://agile-antler-210706.firebaseio.com",
        projectId: "agile-antler-210706",
        storageBucket: "agile-antler-210706.appspot.com",
        messagingSenderId: "168906573103",
        appId: "1:168906573103:web:98f81b120bb9458e4ccdda",
        measurementId: "G-291N1VBG7V"
    };

    firebase.initializeApp(firebaseConfig);

    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                // Required to enable ID token credentials for this provider.
                clientId: '168906573103-g9244j2vthdvgq7379rcj0pdojd67ic6.apps.googleusercontent.com'
            },
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false,
        },
        credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    // Disable auto-sign in.
    ui.disableAutoSignIn();

    ui.start('#firebaseui-container', uiConfig);

    useEffect(() => {
        // Listener when user changed
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            console.log('user', user)
        });

        // Sign out method
        // firebase.auth().signOut();

        return () => unregisterAuthObserver();
    }, [])

    return (
        <>
            MyApp
            <div id="firebaseui-container"></div>
            {/*<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />*/}
        </>
    );
};

export default MyApp;
