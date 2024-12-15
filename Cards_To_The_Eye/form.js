let messageS = document.querySelector(".message-success");
let messageE1 = document.querySelector(".error-name");
let messageE2 = document.querySelector(".error-password");
let form = document.querySelector("form");
let pseudo = document.querySelector("#pseudo");
let passWord = document.querySelector("#password");
let passWord2 = document.querySelector("#password2");

//Vérification des conditions pour le mot de passe (majuscule, minuscule, chiffre, caractère spécial)
let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$");

//les messages sont masqués par défaut
messageS.style.display = "none";
messageE1.style.display = "none";
messageE2.style.display = "none";

form.addEventListener("submit", function(event){
    let valide = true

    messageS.style.display = "none";
    messageE1.style.display = "none";
    messageE2.style.display = "none";

    event.preventDefault();
    //vérification pseudo
    if (pseudo.value.length < 6) { 
        console.log("error pseudo");
        messageE1.style.display = "block";
        valide = false;
    }
    else{
        console.log("pseudo good");
        messageE2.style.display = "none";
        }

    if(passWord.value !== passWord2.value){
        console.log("mdp pas identique");
        valide = false;
        messageE2.style.display = "block"
    }
    else{
        console.log("mdp identique");
        messageE2.style.display = "none"
    }
    if (passWord.value.length < 10 || passCheck.test(passWord.value) == false) { 
        console.log("error mdp");
        valide = false;
        messageE2.style.display = "block";
    }
    else{
        messageE2.style.display = "none";

    }
    if(valide == true){
        messageS.style.display = "block";
    }
});