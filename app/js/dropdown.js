import {popularSongs} from "./products";
import { createSongCards } from './create';
function dropdownVariables(dropdown){
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    return { select, caret, menu, options, selected };
}
function toggleDropdown(variables) {
    variables.select.classList.toggle('select-clicked');
    variables.caret.classList.toggle('caret-rotate');
    variables.menu.classList.toggle('menu-open');
}
function closeDropdown(variables) {
    variables.select.classList.remove('select-clicked');
    variables.caret.classList.remove('caret-rotate');
    variables.menu.classList.remove('menu-open');
    //ts part removes the list of options so it isnt visible to the user after they click on an option.
}
function optionSelection(option, variables) {
    variables.selected.innerText = option.innerText;
    closeDropdown(variables);
    //calls the close dropdown function after they click on smt
    variables.options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
    //this part removes 'active' from all the options
    //second part adds 'active' to wtv the user clicked on
    update();
}
let activeGenre = ''; 
function update(){
    console.clear();
    const activeElement = document.querySelector('.active');
    if (activeElement){
        activeGenre = activeElement.textContent;
        console.log(activeGenre);
        filtering();
    }
}
function filtering() {
    // Filter by active genre if it's not 'All'
    if (activeGenre === 'All' || activeGenre === '') {
        createSongCards(popularSongs);
    } else {
        // Filter by the active genre
        const filteredSongs = popularSongs.filter(song => song.genre === activeGenre);
        createSongCards(filteredSongs);
    }
}


function main() {
    const dropdowns = document.querySelectorAll('.filtering');
    dropdowns.forEach(dropdown => {
        const variables = dropdownVariables(dropdown);
        //you can also use document but dropdown is more specific 
        variables.select.addEventListener('click', () => toggleDropdown(variables));
        //Event listeners for each option in the dropdown
        variables.options.forEach(option => {
            option.addEventListener('click', () => optionSelection(option, variables));
        });
    });
}
main();
function sorting() {
    const btn = document.querySelector('.btnAlpha');
    btn.addEventListener('click', () => {
        // sort the popularSongs array by title
        popularSongs.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
        });
        filtering(); // Make sure the sorting is reflected in the filtering results
    });
}


sorting(); 





//NOTES
/* function longerVer(){
    const dropdowns = document.querySelectorAll('.filtering');
    dropdowns.forEach(dropdown=>{
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');
        select.addEventListener('click', () =>{
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });
        //ts js opens the list of options
        options.forEach(option => {
            option.addEventListener('click', () =>{
                selected.innerText = option.innerText;
                //wtv option is active the selected inner text = option inner text
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
                //ts part removes the list of options so it isnt visible to the user after they click on an option.
                options.forEach(option=> option.classList.remove('active'))
                option.classList.add('active');
                //this part removes 'active' from all the options
                //second part adds 'active' to wtv the user clicked on
                updateActiveGenre();
            });
        });
    });
}; */
//create the code and then you can try to separate it apart