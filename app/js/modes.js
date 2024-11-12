

document.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.bodyThing')
    const buttonMode = document.querySelectorAll('.setting-btn');
    const cards = document.querySelectorAll('.card'); 
    const icons = document.querySelectorAll('.btnDrop li');
    const btnDrop = document.querySelector('.btnDrop');
    const select = document.querySelector('.select');

    select.classList.add('select-light');

    buttonMode.forEach(btn => {
        const btnIcon = btn.querySelector('.btn');
        if (btnIcon) {
            btnIcon.addEventListener('click', () => {
                btnDrop.classList.toggle('btnDrop-clicked');
            });
        }
    });

    function clearout() {
        
        bg.classList.remove('bodyThing-darkmode');
        cards.forEach(card => card.classList.remove('card-darkmode'));
    }

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            icons.forEach(otherIcon => otherIcon.classList.remove('on'));
            icon.classList.add('on');
    
            const iconInner = icon.querySelector('i');
            clearout(); // Clear previous modes
    
            if (icon.classList.contains('on') && iconInner) {
                if (iconInner.classList.contains("bi-brightness-high")) {
                    // Light mode
                    
                    bg.classList.remove('bodyThing2');
                    bg.classList.add('bodyThing');
                    
                } else if (iconInner.classList.contains("bi-moon")) {
                    // Dark mode
                    bg.classList.remove('bodyThing');
                    bg.classList.add('bodyThing2');

                }
            }
        });
    });    
});
