function dropdown(){
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
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
                //ts part removes the list of options so it isnt visible to the user after they click on an option.
                options.forEach(option=>{
                    option.classList.remove('active');
                })
                option.classList.add('active');
                //this part removes 'active' from all the options
                //second part adds 'active' to wtv the user clicked on
            });
        });
    });
};

dropdown()
