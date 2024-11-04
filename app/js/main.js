import '../css/style.css';
import { popularSongs } from "./products";

//.. is to go to anotehr file wrd
//cd app
//npm run dev
const container = document.querySelector(".container");
//adds the cards from the products.js file
document.addEventListener("DOMContentLoaded", ()=>{
    popularSongs.forEach(song=> {
        const title = song.title;
        const artist = song.artist; 
        const genre = song.genre;
        const release = song.releaseDate;
        const img = song.imageUrl;
        const des = song.altText
        function createCard() {
            container.insertAdjacentHTML("beforeend",
                `<div class="card">
                    <img src="${img}" alt="${des}">
                    <h1>${title}</h1>
                    <h2>${artist}</h2>
                    <h3>${genre}</h3>
                    <p>${release}</p>
                </div>`
            );
        };
        createCard();
    })
})

/* const updateSongDisplay */
//click toggle button 



