document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const inputs = document.querySelectorAll('input[type="radio"]');


    function closeAllCards() {
        inputs.forEach(input => {
            input.checked = false;
        });
    }


    const defaultCard = document.querySelector('input[type="radio"]:checked');
    if (!defaultCard) {
        // Ouvre la première carte
        inputs[0].checked = true;
    }

    cards.forEach(card => {
        card.addEventListener('mouseenter', (event) => {
            const input = card.previousElementSibling;

            // Fermer la carte ouverte
            closeAllCards();

            // Ouvrir la carte
            input.checked = true;
        });


        card.addEventListener('mouseleave', (event) => {
            const input = card.previousElementSibling;


        });
    });
});
