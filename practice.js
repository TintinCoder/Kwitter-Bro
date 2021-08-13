var firebaseConfig = {

    apiKey: "AIzaSyA1Wtzn-gmW8djia2PoG5Vf5UW4ENiEwEw",

    authDomain: "practice-bef7d.firebaseapp.com",

    projectId: "practice-bef7d",

    storageBucket: "practice-bef7d.appspot.com",

    messagingSenderId: "736613488681",

    appId: "1:736613488681:web:239d15e804e30cf0afe438"

  };

  firebase.initializeApp(firebaseConfig);

function addUser() {
    prompt("Worked");
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
         purpose : "adding user" 
    });
}