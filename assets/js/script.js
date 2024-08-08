let num1;
let num2;
let result;

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


const buttons = document.querySelectorAll(".button");


buttons.forEach(button => {
    button.addEventListener("click", function () {
        if (button.id == "number") {
            if (typeof num1 === 'undefined') {
                num1 = parseInt(button.textContent);
            }
            else {
                num2 = parseInt(button.textContent);
            }
        }
        if (button.id == "operator") {
            operator = button.textContent;

        }

        if (button.id == "equal") {
            result = operate(num1, num2, operator);
            console.log(result);
        }

    });
});

