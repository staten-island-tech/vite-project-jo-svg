import '../css/style.css';
import { popularSongs } from "./products";
import { createSongCards } from './create';
//.. is to go to anotehr file wrd
//cd app
//npm run dev

//adds the cards from the products.js file
document.addEventListener("DOMContentLoaded", ()=>{
    createSongCards(popularSongs)
});

function sorting(){
    const btn = document.querySelector('.btnAlpha');

    btn.addEventListener('click', () => {
        // Sort the popularSongs array by song title
        popularSongs.sort((a, b) => {
            // Compare titles case-insensitively
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1; //return -1 signals that it is an error 
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
        });

        createSongCards(popularSongs)
    });

     
}

// .reverse use for one!!!
/* const updateSongDisplay */
//click toggle button 

