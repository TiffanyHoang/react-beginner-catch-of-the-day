import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAFpVZK0xG93WYP3xJkH3piLnSf-dmpN0Q",
    authDomain: "catch-of-the-day-react-29f2d.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-react-29f2d-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}

export default base