
/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios entre 0 y 9 usando la libreria Math.random();*/
codigoSecreto = (l, max) => Array.from({ length: l }, () => Math.floor(Math.random() * max));

focus_next = (current, next) => {
    if (current.value.length==1) {
        next.focus();
        return;
    }
}

game = (event, lenghtOfArray, maxValueOfArray, attempts) => {
    event.preventDefault();

    const codigo = codigoSecreto(lenghtOfArray, maxValueOfArray)
    let attempt = attempts
    console.log(lenghtOfArray, codigo, attempt)
}

const gameForm = document.querySelector("form");
gameForm.addEventListener("submit", game);




