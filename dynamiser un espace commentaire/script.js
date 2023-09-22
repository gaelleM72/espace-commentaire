function createComment() {

//Création des nouveaux éléments
    const newDiv1 = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newDiv3 = document.createElement('div');
    const newH3 = document.createElement('h3');
    const newP = document.createElement('p');

//Récuperation des valeurs
    newTextH3 = document.createTextNode(firstName.value + ' ' + lastName.value);
    newTextP = document.createTextNode(message.value);

//Récuperation des classes CSS
    newDiv1.classList.add('flex space-x-4 text-sm text-gray-500');
    newDiv2.classList.add('flex-1 py-10 ');
    newDiv3.classList.add('prose prose-sm mt-4 max-w-none text-gray-500');
    newH3.classList.add('font-medium text-gray-900');

//Organisation des nouveaux éléments
    newDiv1.appendChild(newDiv2);
    newDiv2.appendChild(newH3);
    newDiv1.appendChild(newDiv3);
    newDiv3.appendChild(newP);
    newH3.appendChild(newTextH3);
    newP.appendChild(newTextP);

//Publication du commentaire
    commentList.appendChild(newDiv1);
}


    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const message = document.getElementById('message');
    const errorMessage = document.getElementById('error-message');
    const form = document.querySelector('form');
    const commentList = document.getElementById('comment-list');

form.addEventListener("submit", (event) => {

//Erreur si l'un des champs est vide
    if (firstName.value === '', lastName.value === '', message.value === '') {
        showError();
    }

//Sinon appeler la fonction
    else {
        createComment();
    }

    event.preventDefault();
});

//Affichage du message d'erreur
function showError() {
    errorMessage.style.display = "block";
}

//Création du nouveau commentaire
function createComment() {

//Création des nouveaux éléments
    const newDiv1 = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newDiv3 = document.createElement('div');
    const newH3 = document.createElement('h3');
    const newP = document.createElement('p');

//Récuperation des valeurs
    newTextH3 = document.createTextNode(firstName.value + ' ' + lastName.value);
    newTextP = document.createTextNode(message.value);

//Récuperation des classes CSS
    newDiv1.classList.add('flex-space-x-4-text-sm-text-gray-500');
    newDiv2.classList.add('flex-1-py-10');
    newDiv3.classList.add('prose-prose-sm-mt-4-max-w-none-text-gray-500');
    newH3.classList.add('font-medium-text-gray-900');

//Organisation des nouveaux éléments
    newDiv1.appendChild(newDiv2);
    newDiv2.appendChild(newH3);
    newDiv1.appendChild(newDiv3);
    newDiv3.appendChild(newP);
    newH3.appendChild(newTextH3);
    newP.appendChild(newTextP);

//Publication du commentaire
    commentList.appendChild(newDiv1);
}