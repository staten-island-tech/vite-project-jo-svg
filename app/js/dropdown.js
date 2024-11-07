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
function filtering(){
    document.querySelector('.container').innerHTML = '';
    //empties the entire container
    if(activeGenre !== 'All'){
        const filteredSongs = popularSongs.filter(song => song.genre === activeGenre);
        createSongCards(filteredSongs);    
    }
    //if they didnt click on all it will filter it
    else if(activeGenre === 'All'){
        createSongCards(popularSongs);
    }
    //if they click on all it will show all
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