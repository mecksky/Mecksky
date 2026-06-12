
// 🔥 Firebase CONFIG (WEKA YOUR OWN FROM FIREBASE)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();


// 👤 REGISTER
function register(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Account created"))
    .catch(err => alert(err.message));
}


// 🔐 LOGIN
function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Logged in"))
    .catch(err => alert(err.message));
}


// 🎬 UPLOAD MOVIE (ADMIN)
function uploadMovie(){
    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const video = document.getElementById("video").value;

    const movieRef = db.ref("movies").push();

    movieRef.set({
        title,
        image,
        video
    });

    alert("Movie uploaded!");
}


// 📺 LOAD MOVIES
db.ref("movies").on("value", snapshot => {
    const data = snapshot.val();
    const container = document.getElementById("movieList");

    container.innerHTML = "";

    for(let id in data){
        container.innerHTML += `
        <div class="movie">
            <img src="${data[id].image}">
            <div class="movie-info">
                <h3>${data[id].title}</h3>
                <a href="${data[id].video}" target="_blank">▶ Watch</a>
            </div>
        </div>
        `;
    }
});
