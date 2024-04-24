'use strict';

{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal_all = document.getElementById('modal_all');
    const layer = document.getElementById('layer');
   
    open.addEventListener('click', () => {
        modal_all.classList.remove('hidden');
        layer.classList.remove('hidden');
        open.style.display = 'none';
        close.style.display = "block";
    });

    close.addEventListener('click', () => {
        modal_all.classList.add('hidden');
        layer.classList.add('hidden');
        close.style.display = "none";
        open.style.display = 'flex';
    });
}