// Libraries
import React, {useEffect} from 'react';
import {initializeApp} from 'firebase/app';
import { getRemoteConfig, getValue, getAll, getString, getBoolean, fetchAndActivate } from "firebase/remote-config";


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
    const remoteConfig = getRemoteConfig(app);
    remoteConfig.settings.minimumFetchIntervalMillis = 2;

    useEffect(() => {
        fetchAndActivate(remoteConfig)
            .then(() => {
                const val = getValue(remoteConfig, 'corner');

                console.log('val', val)
            })
    }, [])

    return <>MyApp</>;
};

export default MyApp;
