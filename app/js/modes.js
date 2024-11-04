const buttonMode = document.querySelectorAll('.setting-btn');



buttonMode.forEach(btn =>{
    const card = document.querySelector('.card');
    const icons = document.querySelectorAll('.btn-drop li');
    const btnDrop = document.querySelector('.btn-drop');
    const on = document.querySelector('.on');
    const btnIcon = btn.querySelector('btn');

    btnIcon.addEventListener('click', ()=>{
        btnDrop.classList.toggle('btn-drop-clicked');

    });
    
})
