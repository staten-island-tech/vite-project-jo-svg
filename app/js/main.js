import '../css/style.css';
import { popularSongs } from "./products";

//.. is to go to anotehr file wrd
//cd app
//npm run dev

// proj idea:
// find popular songs 

// have a section for the different themes
// toggle button for night, day, and sunset mayb



//gets the container from the index.html

document.addEventListener("DOMContentLoaded", ()=>{
    for (n=0; n<=3; n++){
        if (n<=3){
            popularSongs.forEach(song=> {
                const container = document.querySelector(".container");
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
            
            //make a function where the bot will make a section adn add 3 cards into it
        }
    }
    
})

