let num1;
let num2;
let result;
let input = "";
let operator;


const display = document.querySelector(".input");


const buttons = document.querySelectorAll(".button");


buttons.forEach(button => {
    button.addEventListener("click", function () {
        if (button.id == "number") {
            input += button.textContent;
            display.textContent = input;
        }

        else if (button.id == "operator") {
            /**PSEUDOCODE */
            input = "";
            //VERIFIENA RAHA EFA DEFINI num1 SINON stockena ANATY num1 ny valeur affiché
            //STOCKENA ANATY operator ny operation choisi
            if (typeof num1 === "undefined") {
                num1 = parseInt(display.textContent);
                operator = button.textContent
            }
            //MIKITIKA FANNDROANY
            //STOCKENA ANATY NUM2 le VALEUR AFFICHE
            //ATAO TOTAL AN num2 sy NUM1
            //STOCKENA ANATY VALEUR num1 IO TOTAL IO
            //OVAINA LE DISPLAY
            //FLUSHENA num2
            //STOCKENA ANATY OPERATOR NDRAY le VAOVAO 
            else {
                num2 = parseInt(display.textContent);
                num1 = operate(num1, num2, operator);
                display.textContent = num1;

                num2 = "";
                operator = button.textContent;
            }




            //MIKITIKA FANINTELONY
            //



        }

        else if (button.id == "equal") {
            num1 = operate(num1, parseInt(display.textContent), operator);
            display.textContent = num1;
        }
    });
});



const operate = (number1, number2, typeofOperation) => {
    switch (typeofOperation) {
        case "+": return number1 + number2;
        case "-": return number1 - number2;
        case "X": return number1 * number2;
        case "/": return number1 / number2;
        case "%": return number1 % number2;
    }
}