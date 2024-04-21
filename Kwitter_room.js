var rooms = ["placeholder", "placeholderagain"];


// Initialize Firebase
const app = initializeApp(firebaseConfig);

function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html";
}