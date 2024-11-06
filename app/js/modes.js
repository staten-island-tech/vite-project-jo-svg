const buttonMode = document.querySelectorAll('.setting-btn');
const card = document.querySelector('.card');
const icons = document.querySelectorAll('.btnDrop li');
const btnDrop = document.querySelector('.btnDrop');
const on = document.querySelector('.on');
const select = document.querySelector('.select');

select.classList.add('select-light');

buttonMode.forEach(btn =>{
    
    const btnIcon = btn.querySelector('.btn');
    
    if (btnIcon){
        btnIcon.addEventListener('click', ()=>{
            btnDrop.classList.toggle('btnDrop-clicked');
        });
    }
    
})

function clearout(){
    select.classList.remove('select-light', 'select-dark');

}
icons.forEach(icon => {
    icon.addEventListener('click', ()=>{
        icons.forEach(otherIcon => otherIcon.classList.remove('on'));
        icon.classList.add('on');
        console.log('Clicked icon:', icon);

        const iconInner = icon.querySelector('i');
        if (icon.classList.contains('on')){
            clearout();
            if (iconInner && iconInner.classList.contains("bi") && iconInner.classList.contains("bi-brightness-high")){
                select.classList.add('select');
                console.log('select-light added');
            }
            else if(iconInner && iconInner.classList.contains("bi") && iconInner.classList.contains("bi-moon")){
                select.classList.add('select-dark');
            }
            else if(iconInner && iconInner.classList.contains("bi") && iconInner.classList.contains("bi-moon-stars")){

            }
            else{
                select.classList.remove('select-light');
                console.log('select-light removed');
            } 
        }
        
    })
    
});