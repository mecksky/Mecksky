// Admin credentials
const admin = {
    username: "admin",
    password: "12345"
};

// Users
let users = JSON.parse(localStorage.getItem("users")) || [];

// Movies
let movies = JSON.parse(localStorage.getItem("movies")) || [
{
title:"Fast & Furious 9",
image:"https://via.placeholder.com/300x450?text=Fast+9",
download:"#"
},
{
title:"Avengers Endgame",
image:"https://via.placeholder.com/300x450?text=Avengers",
download:"#"
}
];

// Display movies
function displayMovies(list){
    const container = document.getElementById("movieList");

    container.innerHTML = "";

    list.forEach(movie=>{
        container.innerHTML += `
        <div class="movie">
            <img src="${movie.image}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <a href="${movie.download}" download>Download</a>
            </div>
        </div>
        `;
    });
}

// Search
function searchMovie(){
    const text = document.getElementById("search").value.toLowerCase();

    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(text)
    );

    displayMovies(filtered);
}

// Register User
function registerUser(username, password){
    users.push({username, password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully");
}

// User Login
function loginUser(username, password){
    const found = users.find(user =>
        user.username === username &&
        user.password === password
    );

    if(found){
        alert("User login successful");
    } else {
        alert("Invalid user credentials");
    }
}

// Admin Login
function loginAdmin(username, password){
    if(
        username === admin.username &&
        password === admin.password
    ){
        alert("Welcome Administrator");
    } else {
        alert("Invalid admin credentials");
    }
}

// Add Movie (Admin only)
function addMovie(title, image, download){
    movies.push({
        title,
        image,
        download
    });

    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovies(movies);

    alert("Movie uploaded successfully");
}

displayMovies(movies);
