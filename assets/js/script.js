let num1 = 0;
let num2 = 0;
let result = 0;
let input = "";
let operator;

const display = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

const calculate = (number1, number2, typeofOperation) => {
    switch (typeofOperation) {
        case "+": return number1 + number2;
        case "-": return number1 - number2;
        case "X": return number1 * number2;
        case "/": return number1 / number2;
        case "%": return number1 % number2;
    }
}

function setActiveOperatorButton(buttonClicked) {
    buttons.forEach(button => {

        button.classList.remove("white");

    });
    buttonClicked.classList.add("white");
}




buttons.forEach(button => {
    button.addEventListener("click", function () {

        /**
         * Si on clicque un chiffre
         */
        if (button.id == "number") {
            input += button.textContent;
            display.textContent = input;
        }
        /**
         * Si on clique un opérateur
         */
        else if (button.id == "operator") {


            input = "";
            setActiveOperatorButton(button);

            /**
             * S'il n'y pas de num1
             */
            if (num1 == 0) {
                num1 = parseFloat(display.textContent);
                operator = button.textContent
            }
            /**
             * Sinon on effectue l'ancienne opération entre le num1 et la valeur du num2 qui est celle affichée sur le calculateur
             * et on remet num2 à 0 et on stocke le nouvel opérateur cliqué
             */
            else {
                num2 = parseFloat(display.textContent);
                num1 = calculate(num1, num2, operator);
                display.textContent = num1;

                num2 = 0;
                operator = button.textContent;
            }

            //MIKITIKA FANINTELONY
            //
        }

        else if (button.id == "equal") {
            num1 = calculate(num1, parseFloat(display.textContent), operator);
            display.textContent = num1;
            num1 = 0;
            num2 = 0;
        }

        else if (button.id == "clear") {
            window.location.reload();
        }

    });
});

document.addEventListener("keydown", (e) => {
    buttons.forEach(button => {
        if (button.getAttribute("data-key") === e.key) {
            button.click();  // Simule un clic sur le bouton
        }
    });
});

