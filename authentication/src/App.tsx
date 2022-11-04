// Libraries
import React, {useEffect} from 'react';
import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


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

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


    useEffect(() => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...

                console.log('credential', credential)
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }, [])

    return <>MyApp</>;
};

export default MyApp;
