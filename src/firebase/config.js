import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD4G2mfhG-sbf9PG89jI5GbghZNN0bCFN8",
    authDomain: "modern-cooking-58359.firebaseapp.com",
    projectId: "modern-cooking-58359",
    storageBucket: "modern-cooking-58359.appspot.com",
    messagingSenderId: "1023841655166",
    appId: "1:1023841655166:web:ce2b9896eeab0003b07b2f"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore } 

