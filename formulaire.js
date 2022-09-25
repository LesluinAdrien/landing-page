let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // event.preventDefault() permet de stopper le comportement par défaut d'un formulaire, à savoir l'envoyer 

  // console.log("Envoi d'un formulaire detecté");

  let email = document.querySelector('#email');

  // Si le champ email est vide...
  if (email.value == '') {
    // alors le mot "Invalide" s'affichera dans la console
    console.log("Invalide");

  } else {
    // autrement c'est le mot "Valide" qui s'affichera à la place
    // console.log("Valide");
    email.classList.add('success');
  }

  let errorContainer = document.querySelector('.message-error');
  let errorList = document.querySelector('.message-error ul');

  // Je vide les erreurs avant la nouvelle vérification et recache le message 
  errorList.innerHTML = "";
  errorContainer.classList.remove('visible');

  // let email = document.querySelector('#email');

  // Si le champ email est vide...
  if (email.value == '') {

    // ... je rends visible la zone d'erreur et enlève la class '.success' du mail s'il a existé
    errorContainer.classList.add('visible');
    email.classList.remove('success');

    // Création du message d'erreur
    let err = document.createElement('li');
    err.innerText = "Le champ email ne peut pas être vide";

    // Ajout au container
    errorList.appendChild(err);

  } else {
    // Je mets l'email en class 'success'
    email.classList.add('success');
  }

  let prénom = document.querySelector('#prénom');

  if (prénom.value.length < 1) {

    errorContainer.classList.add('visible');
    prénom.classList.remove('success');

    let err = document.createElement('li');
    err.innerText = "Le champ prénom ne peut pas être vide";

    errorList.appendChild(err);

  } else {

    prénom.classList.add('success');

  }

  let nom = document.querySelector('#nom');

  if (nom.value.length < 1) {

    errorContainer.classList.add('visible');
    nom.classList.remove('success');

    let err = document.createElement('li');
    err.innerText = "Le champ nom ne peut pas être vide";

    errorList.appendChild(err);

  } else {

    nom.classList.add('success');

  }

  let successContainer = document.querySelector('.message-success');
  successContainer.classList.remove('visible');

  // Si tous les champs ont été bien remplis...
  if (
    prénom.classList.contains('success') &&
    email.classList.contains('success') &&
    nom.classList.contains('success')
  ) {

    // ... alors on affiche un message de validation
    successContainer.classList.add('visible');

  }

})