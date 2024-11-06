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



/* const updateSongDisplay */
//click toggle button 



