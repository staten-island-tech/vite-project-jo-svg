const buttonMode = document.querySelectorAll('.setting-btn');



buttonMode.forEach(btn =>{
    const card = document.querySelector('.card');
    const icons = document.querySelectorAll('.btnDrop li');
    const btnDrop = document.querySelector('.btnDrop');
    const on = document.querySelector('.on');
    const btnIcon = btn.querySelector('.btn');

    if (btnIcon){
        btnIcon.addEventListener('click', ()=>{
            btnDrop.classList.toggle('btnDrop-clicked');

        });
    }
    
    
})
