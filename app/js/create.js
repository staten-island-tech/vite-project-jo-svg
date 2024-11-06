function createSongCards(popularSongs){
    const container = document.querySelector(".container");
    popularSongs.forEach((song)=>{
        const { title, artist, genre, releaseDate: release, imageUrl: img, altText: des } = song;
        /* const title = song.title;
        const artist = song.artist; 
        const genre = song.genre;
        const release = song.releaseDate;
        const img = song.imageUrl;
        const des = song.altText 
        same thing but make it shorter and in one line*/
        container.insertAdjacentHTML("beforeend",
            `<div class="card">
                <img src="${img}" alt="${des}">
                <h1>${title}</h1>
                <h2>${artist}</h2>
                <h3>${genre}</h3>
                <p>${release}</p>
            </div>`
        );
    });
}

export {createSongCards}