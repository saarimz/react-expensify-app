import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
/*

// child_removed

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key,snapshot.val());
});

// child_changed

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key,snapshot.val());
});

// child_added

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key,snapshot.val());
})

const expenses = [
    {
        description: 'Rent',
        note: 'January rent',
        amount: 42000,
        createdAt: 1000
    },
    {
        description: 'Gas bill',
        note: 'Bill for Con Edison',
        amount: 150,
        createdAt: 10000
    },
    {
        description: 'Electricity Bill',
        note: 'Electric bill for july',
        amount: 110,
        createdAt: 500
    }
];

expenses.forEach((expense) => database.ref('expenses').push(expense)); 


/*
const getExpenses = database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    })
    console.log(expenses);
});  */
