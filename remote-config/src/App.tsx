// Libraries
import React, {useEffect} from 'react';
import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore} from 'firebase/firestore/lite';

const MyApp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyB_7npAIvYGXq_970-0pzHa0sF56mE9PcA",
        // authDomain: "PROJECT_ID.firebaseapp.com",
        // The value of `databaseURL` depends on the location of the database
        // databaseURL: "https://DATABASE_NAME.firebaseio.com",
        projectId: "agile-antler-210706",
        // storageBucket: "PROJECT_ID.appspot.com",
        // messagingSenderId: "SENDER_ID",
        appId: "168906573103",
        // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
        // measurementId: "G-MEASUREMENT_ID",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function getCities(db) {
        const citiesCol = collection(db, 'cities');
        const citySnapshot = await getDocs(citiesCol);

        return citySnapshot.docs.map(doc => doc.data());
    }

    useEffect(() => {
        getCities(db).then((response) => {
            console.log('response', response)
        })
    }, [])

    return <>MyApp</>;
};

export default MyApp;
