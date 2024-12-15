const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.paragraphe');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.dataset.tab;

        // Retirer la classe 'active' de tous les boutons et contenus
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(paragraphe => paragraphe.classList.remove('active'));

        // Ajouter la classe 'active' au bouton et contenu correspondant
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});