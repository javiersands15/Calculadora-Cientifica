const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let powerBase = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            display.value = "";
            powerBase = null;
        }

        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        else if (value === "=") {
            calculateResult();
        }

        else if (value === "√") {
            calculateSquareRoot();
        }

        else if (value === "x²") {
            calculateSquare();
        }

        else if (value === "xʸ") {
            startPower();
        }

        else if (value === "π") {
            display.value += Math.PI;
        }

        else if (value === "sin") {
            calculateSin();
        }

        else if (value === "cos") {
            calculateCos();
        }

        else if (value === "tan") {
            calculateTan();
        }

        else if (value === "log") {
            calculateLog();
        }

        else if (value === "ln") {
            calculateLn();
        }

        else if (value === "±") {
            changeSign();
        }

        else if (value === "%") {
            calculatePercentage();
        }

        else {
            display.value += value;
        }
    });
});


function calculateResult() {
    try {
        if (powerBase !== null) {
            const exponent = Number(display.value);

            if (display.value === "" || isNaN(exponent)) {
                display.value = "Error";
            } else {
                display.value = powerBase ** exponent;
            }

            powerBase = null;
            return;
        }

        const expression = display.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-");

        display.value = eval(expression);

    } catch {
        display.value = "Error";
    }
}


function calculateSquareRoot() {
    try {
        const number = Number(display.value);

        if (display.value === "" || isNaN(number) || number < 0) {
            display.value = "Error";
        } else {
            display.value = Math.sqrt(number);
        }

    } catch {
        display.value = "Error";
    }
}


function calculateSquare() {
    try {
        const number = Number(display.value);

        if (display.value === "" || isNaN(number)) {
            display.value = "Error";
        } else {
            display.value = number ** 2;
        }

    } catch {
        display.value = "Error";
    }
}


function startPower() {
    if (display.value !== "") {
        powerBase = Number(display.value);
        display.value = "";
    }
}


function calculateSin() {
    try {
        const number = Number(display.value);

        if (display.value === "" || isNaN(number)) {
            display.value = "Error";
        } else {
            display.value = Number(
                Math.sin(number * Math.PI / 180).toFixed(10)
            );
        }

    } catch {
        display.value = "Error";
    }
}


function calculateCos() {
    try {
        const number = Number(display.value);

        if (display.value === "" || isNaN(number)) {
            display.value = "Error";
        } else {
            display.value = Number(
                Math.cos(number * Math.PI / 180).toFixed(10)
            );
        }

    } catch {
        display.value = "Error";
    }
}


function calculateTan() {
    try {
        const number = Number(display.value);

        if (display.value === "" || isNaN(number)) {
            display.value = "Error";
        } else {
            display.value = Number(
                Math.tan(number * Math.PI / 180).toFixed(10)
            );
        }

    } catch {
        display.value = "Error";
    }
}


function calculateLog() {
    try {
        const number = Number(display.value);

        if (display.value === "" || isNaN(number) || number <= 0) {
            display.value = "Error";
        } else {
            display.value = Number(
                Math.log10(number).toFixed(10)
            );
        }

    } catch {
        display.value = "Error";
    }
}


function calculateLn() {
    try {
        const number = Number(display.value);

        if (display.value === "" || isNaN(number) || number <= 0) {
            display.value = "Error";
        } else {
            display.value = Number(
                Math.log(number).toFixed(10)
            );
        }

    } catch {
        display.value = "Error";
    }
}


function changeSign() {
    try {
        const number = Number(display.value);

        if (display.value === "" || isNaN(number)) {
            display.value = "Error";
        } else {
            display.value = number * -1;
        }

    } catch {
        display.value = "Error";
    }
}


function calculatePercentage() {
    try {
        const number = Number(display.value);

        if (display.value === "" || isNaN(number)) {
            display.value = "Error";
        } else {
            display.value = number / 100;
        }

    } catch {
        display.value = "Error";
    }
}


document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "." ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "(" ||
        key === ")"
    ) {
        let value = key;

        if (key === "*") {
            value = "×";
        }

        if (key === "/") {
            value = "÷";
        }

        if (key === "-") {
            value = "−";
        }

        display.value += value;
    }

    else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculateResult();
    }

    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    else if (key === "Escape") {
        display.value = "";
        powerBase = null;
    }
});


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => {
                console.log("PWA activada correctamente");
            })
            .catch(error => {
                console.log("Error al activar la PWA:", error);
            });
    });
}
