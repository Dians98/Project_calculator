let num1;
let num2;
let result;
let input = "";
let operator;

const operate = (num1, num2, operator) => {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "X": return num1 * num2;
        case "/": return num1 / num2;
        case "%": return num1 % num2;
    }
}


const display = document.querySelector(".input");



const buttons = document.querySelectorAll(".button");


buttons.forEach(button => {
    button.addEventListener("click", function () {
        if (button.id == "number") {
            input += button.textContent;
            display.textContent = input;
        }
        if (button.id == "operator") {
            if (typeof num1 === "undefined") {
                num1 = parseInt(display.textContent);
                console.log("num1 : " + num1);
                operator = button.textContent;
                input = "";
            } else if (typeof num2 === "undefined") {
                num2 = parseInt(display.textContent)
                console.log("num2 : " + num1);
                operator = button.textContent;
            }

        }

        if (button.id == "equal") {
            num2 = parseInt(display.textContent);
            result = operate(num1, num2, operator);
            console.log(result);
        }

    });
});

