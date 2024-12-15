let messageS = document.querySelector("message-success");
let messageE1 = document.querySelector("error-name");
let messageE2 = document.querySelector("error-password");
let form = document.querySelector("form");
let pseudo = document.querySelector("#pseudo");
let passWord = document.querySelector("#password");
let passWord2 = document.querySelector("#password2");
//vérifiacation minuscule, majuscule, nombre et caractère spéciaux
let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$");

console.log(form);
console.log(pseudo);

messageE1.classList.add("message-appear");

form.addEventListener("submit", function(event){
    let valide = true

    event.preventDefault();
    //vérification pseudo
    if (pseudo.value.length < 6) { 
        console.log("error pseudo");
        valide = false;
    }
    else{
        console.log("pseudo good");
            //vérification mot de passe
        if (passWord.value.length < 10 || passCheck.test(passWord.value) == false) { 
            console.log("error mdp");
            valide = false;
        }
        else{
            console.log("mdp good");
                //vérification des mots de passe
                if(passWord.value !== passWord2.value){
                    console.log("mdp pas identique");
                    valide = false;
                }
                else{
                    console.log("mdp identique");
                }
        }
    }
    if(valide == true){
        
    }
});