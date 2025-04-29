const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('fondu-out');

        loader.addEventListener('transitionend', () => {
            loader.remove();
        });
    }, 2000);
});
