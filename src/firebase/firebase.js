import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAGNcvn-w_Bjw-8txbdwr5sWPyMJgr6IY4",
    authDomain: "expensify-6454e.firebaseapp.com",
    databaseURL: "https://expensify-6454e.firebaseio.com",
    projectId: "expensify-6454e",
    storageBucket: "expensify-6454e.appspot.com",
    messagingSenderId: "116651820148"
  };

firebase.initializeApp(config);

const database = firebase.database();


database.ref().set({
    name: 'Saarim Zaman',
    age: 19,
    isSingle: false,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Kickstarter'
    },
    location: {
        city: 'New York',
        country: 'United States'
    }
})  .then(() => console.log('data is saved')
    ).catch((e) => console.log('data failed: ' + e) );


database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});