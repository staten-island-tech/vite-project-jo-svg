import { popularSongs } from "./products";


let activeGenre = ''; 

//get wtv is in the list of the class that is active urp
function updateActiveGenre(){
    const activeElement = document.querySelector('.active');
    if (activeElement){
        activeGenre = activeElement.textContent;
        console.log(activeGenre);
    }
}

//get the text 

//imma get ts later br imma crash out if i contineu this 

//remove all the cards and then filter it and then input the cards again wrd!!