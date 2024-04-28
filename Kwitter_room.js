var username = localStorage.getItem("user_name");
var user = document.getElementById("username");
user.innerText = "Username: " + username;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

const firebaseConfig = {
apiKey: "AIzaSyCRZoWU2RhhX896rAWkLM8sgdZYTnNDVuo",
authDomain: "letschat-4e2b7.firebaseapp.com",
projectId: "letschat-4e2b7",
storageBucket: "letschat-4e2b7.appspot.com",
messagingSenderId: "928923449807",
appId: "1:928923449807:web:94ec9941f4b0dfec19baba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html";
}
function addRoom() {
    var roomid = document.getElementById("room_name_input").value;
    
    firebase.database().ref("/").child(roomid).update({
        purpose : "adding room name"
  });

  localStorage.setItem("roomid", roomid);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id='" +Room_names+"' onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}