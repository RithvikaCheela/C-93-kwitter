
//FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyArN1gGpMzBr__3zENGy_IMEv9Fx5MWEdg",
  authDomain: "kwitter-1-73926.firebaseapp.com",
  projectId: "kwitter-1-73926",
  storageBucket: "kwitter-1-73926.appspot.com",
  messagingSenderId: "244863537990",
  appId: "1:244863537990:web:04f7bfa8a3d7c6947b0b47"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
