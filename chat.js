// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDHaPdXSxFnM_Nto4PGWE0GOaMou4FQ2rk",
    authDomain: "lets-chat-49a11.firebaseapp.com",
    projectId: "lets-chat-49a11",
    storageBucket: "lets-chat-49a11.appspot.com",
    messagingSenderId: "64575681255",
    appId: "1:64575681255:web:3673ab569cdbfd67a4e842",
    measurementId: "G-6B8CK3L871"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



