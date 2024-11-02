import { popularSongs } from "./products";

const activeElement = document.querySelector('.active');
let activeGenre = ''; 
//get wtv is in the list of the class that is active urp

if (activeElement){
    activeGenre = activeElement.innerText;
}

const filteredSongs = popularSongs.filter(song => {
    song.genre === activeGenre
});

