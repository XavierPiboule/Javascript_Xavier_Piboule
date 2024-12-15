let bouton = document.querySelector("#dark");

let background = document.querySelector("body");
let header = document.querySelector(".div_header");
let footer = document.querySelector("footer");
let paragraphe = document.querySelector("p");

bouton.addEventListener("click", function(){
    background.classList.toggle("darkbackground");
    header.classList.toggle("darkheader");
    footer.classList.toggle("darkfooter");
    paragraphe.classList.toggle("darkparagraphe");
});