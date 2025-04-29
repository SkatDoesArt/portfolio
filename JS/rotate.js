const items = document.querySelectorAll('.slider .item');
const quantity = parseInt(getComputedStyle(document.querySelector('.slider')).getPropertyValue('--quantity'));

items.forEach(item => {
    const position = parseInt(item.style.getPropertyValue('--position'));
    const angle = ((position - 1) * (360 / quantity));
    item.style.transform = `rotateY(${angle}deg) translateZ(450px)`;
});

const items2 = document.querySelectorAll('.slider2 .item2');
const quantity2 = parseInt(getComputedStyle(document.querySelector('.slider2')).getPropertyValue('--quantity2'));

items2.forEach(item2 => {
    const position2 = parseInt(item2.style.getPropertyValue('--position2'));
    const angle = ((position2 - 1) * (360 / quantity2));
    item2.style.transform = `rotateY(${angle}deg) translateZ(450px)`;
});

