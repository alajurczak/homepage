console.log("Cześć!");

let headerButtonElement = document.querySelector(".js-headerButton");
let body = document.querySelector(".body");
let themeNameElement = document.querySelector(".js-hemeName");

let buttonElement = document.querySelector(".js-articleButton");
let buttonNameElement = document.querySelector(".js-buttonName");
let hiddenElement = document.querySelector(".js-articleHidden");

let buttonTwoElement = document.querySelector(".js-articleButtonTwo");
let buttonNameTwoElement = document.querySelector(".js-buttonNameTwo");
let hiddenTwoElement = document.querySelector(".js-articleHiddenTwo");


headerButtonElement.addEventListener("click", () => {
    body.classList.toggle("body--whiteThem");
    themeNameElement.innerText = body.classList.contains("body--whiteThem") ? "Ciemny" : "Jasny";
})

buttonElement.addEventListener("click", () => {
    hiddenElement.classList.toggle("article__hiddenText");
    buttonNameElement.innerText = hiddenElement.classList.contains("article__hiddenText") ? "Pokaż" : "Ukryj";
})

buttonTwoElement.addEventListener("click", () => {
    hiddenTwoElement.classList.toggle("article__hiddenText");
    buttonNameTwoElement.innerText = hiddenTwoElement.classList.contains("article__hiddenText") ? "Pokaż" : "Ukryj";
})

