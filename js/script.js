{
    const welcome = () => {
        console.log("Hello!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeNameElement = document.querySelector(".js-themeName");

        body.classList.toggle("body--whiteThem");
        themeNameElement.innerText = body.classList.contains("body--whiteThem") ? "Ciemny" : "Jasny";
    };

    const onHidingTextClick = () => {
        const buttonNameElement = document.querySelector(".js-buttonName");
        const hiddenElement = document.querySelector(".js-articleHidden");

        hiddenElement.classList.toggle("article__hiddenText");
        buttonNameElement.innerText = hiddenElement.classList.contains("article__hiddenText") ? "Pokaż" : "Ukryj";
    };

    const onHidingSecondTextClick = () => {
        let buttonNameTwoElement = document.querySelector(".js-buttonNameTwo");
        let hiddenTwoElement = document.querySelector(".js-articleHiddenTwo");

        hiddenTwoElement.classList.toggle("article__hiddenText");
        buttonNameTwoElement.innerText = hiddenTwoElement.classList.contains("article__hiddenText") ? "Pokaż" : "Ukryj";
    };

    const init = () => {
        const headerButtonElement = document.querySelector(".js-headerButton");
        headerButtonElement.addEventListener("click", toggleBackground);


        const buttonElement = document.querySelector(".js-articleButton");
        buttonElement.addEventListener("click", onHidingTextClick);

        const buttonTwoElement = document.querySelector(".js-articleButtonTwo");
        buttonTwoElement.addEventListener("click", onHidingSecondTextClick);

        welcome();
    };

    init();
}


