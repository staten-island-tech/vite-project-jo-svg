import '../css/style.css';
import { popularSongs } from "./products";

//.. is to go to anotehr file wrd
//cd app
//npm run dev

// proj idea:
// find popular songs 

// have a section for the different themes
// toggle button for night, day, and sunset mayb


const container = document.querySelector(".container");
//gets the container from the index.html

function create_cards(){
    popularSongs.forEach(song => {
        const card = document.createElement("div");
        const title = document.createElement('h1');
        const artist = document.createElement('h2');
        const genre = document.createElement('h3');
        const release = document.createElement('p');
        const img = document.createElement('img');
        card.classList.add('card');
        title.textContent = song.title;
        artist.textContent = `Artist: ${song.artist}`;
        genre.textContent = `Genre: ${song.genre}`;
        release.textContent = `Release Date: ${song.releaseDate}`;
        img.src = song.imageUrl;

        //sends allat to the main
        //for ts case it basically adds the elements to the card
        card.appendChild(title);
        card.appendChild(artist);
        card.appendChild(genre);
        card.appendChild(release);
        // adds the card to the container
        container.appendChild(card);
    })
}


create_cards()