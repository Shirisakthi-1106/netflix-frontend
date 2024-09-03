// API key
const api = "api_key=67bc210a46dca6373de5020881bcf915";
// Base URL of the website
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w500";

// Requests for movie data
const requests = {
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`
};

// Function to truncate text
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// Banner
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const movie = data.results[Math.floor(Math.random() * data.results.length)];

        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");

        banner.style.backgroundImage = `url(${banner_url}${movie.backdrop_path})`;
        banner_desc.innerText = truncate(movie.overview, 150);
        banner_title.innerText = movie.name || movie.title; // Use movie.name for TV shows, or movie.title for movies
    })
//  movie results
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflix");
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    })

fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflix");
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "TRENDING";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            // Use movie.title or movie.name based on the API response
            var s = movie.title ? movie.title.replace(/\s+/g, "") : movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    })

fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflix");
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "ACTION MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";


            var s = movie.title ? movie.title.replace(/\s+/g, "") : movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    })
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflix");
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "COMEDY MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";


            var s = movie.title ? movie.title.replace(/\s+/g, "") : movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    })
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflix");
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "ROMANCE MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";


            var s = movie.title ? movie.title.replace(/\s+/g, "") : movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    })
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflix");
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "HORROR MOVIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";


            var s = movie.title ? movie.title.replace(/\s+/g, "") : movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    })

fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflix");
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "DOCUMENTARIES";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";


            var s = movie.title ? movie.title.replace(/\s+/g, "") : movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    })



