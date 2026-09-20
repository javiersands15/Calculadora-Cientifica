const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let powerBase = null;

function clearDisplayIfError() {
    if (display.value === "Error") {
        display.value = "";
        powerBase = null;
        return true;
    }
    return false;
}

function appendValue(value) {
    clearDisplayIfError();
    display.value += value;
}

function toSafeExpression(inputValue) {
    const expression = inputValue.trim();

    if (expression === "") {
        throw new Error("Expresión vacía");
    }

    const normalized = expression
        .replace(/π/g, String(Math.PI))
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-")
        .replace(/–/g, "-")
        .replace(/—/g, "-")
        .replace(/%/g, "/100");

    if (!/^[0-9+\-*/().\s]+$/.test(normalized)) {
        throw new Error("Caracter no permitido");
    }

    return normalized;
}

function evaluateExpression(expression) {
    const safeExpression = toSafeExpression(expression);
    const evaluator = new Function(`"use strict"; return (${safeExpression});`);
    const result = evaluator();

    if (!Number.isFinite(result)) {
        throw new Error("Resultado no finito");
    }

    return result;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            display.value = "";
            powerBase = null;
        }

        else if (value === "DEL") {
            if (display.value === "Error") {
                display.value = "";
                powerBase = null;
            } else {
                display.value = display.value.slice(0, -1);
            }
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
            appendValue("π");
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
            appendValue(value);
        }
    });
});

function calculateResult() {
    try {
        if (powerBase !== null) {
            const exponent = Number(display.value);

            if (display.value.trim() === "" || !Number.isFinite(exponent)) {
                display.value = "Error";
            } else {
                const result = powerBase ** exponent;
                display.value = Number.isFinite(result) ? result : "Error";
            }

            powerBase = null;
            return;
        }

        if (display.value.trim() === "") {
            display.value = "Error";
            return;
        }

        const result = evaluateExpression(display.value);
        display.value = Number(result.toFixed(10));

    } catch {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    try {
        const number = Number(display.value);

        if (display.value.trim() === "" || !Number.isFinite(number) || number < 0) {
            display.value = "Error";
        } else {
            display.value = Number(Math.sqrt(number).toFixed(10));
        }

    } catch {
        display.value = "Error";
    }
}

function calculateSquare() {
    try {
        const number = Number(display.value);

        if (display.value.trim() === "" || !Number.isFinite(number)) {
            display.value = "Error";
        } else {
            const result = number ** 2;
            display.value = Number.isFinite(result) ? Number(result.toFixed(10)) : "Error";
        }

    } catch {
        display.value = "Error";
    }
}

function startPower() {
    const number = Number(display.value);

    if (display.value.trim() !== "" && Number.isFinite(number)) {
        powerBase = number;
        display.value = "";
    } else {
        display.value = "Error";
    }
}

function calculateSin() {
    try {
        const number = Number(display.value);

        if (display.value.trim() === "" || !Number.isFinite(number)) {
            display.value = "Error";
        } else {
            display.value = Number((Math.sin(number * Math.PI / 180)).toFixed(10));
        }

    } catch {
        display.value = "Error";
    }
}

function calculateCos() {
    try {
        const number = Number(display.value);

        if (display.value.trim() === "" || !Number.isFinite(number)) {
            display.value = "Error";
        } else {
            display.value = Number((Math.cos(number * Math.PI / 180)).toFixed(10));
        }

    } catch {
        display.value = "Error";
    }
}

function calculateTan() {
    try {
        const number = Number(display.value);

        if (display.value.trim() === "" || !Number.isFinite(number)) {
            display.value = "Error";
        } else {
            display.value = Number((Math.tan(number * Math.PI / 180)).toFixed(10));
        }

    } catch {
        display.value = "Error";
    }
}

function calculateLog() {
    try {
        const number = Number(display.value);

        if (display.value.trim() === "" || !Number.isFinite(number) || number <= 0) {
            display.value = "Error";
        } else {
            display.value = Number(Math.log10(number).toFixed(10));
        }

    } catch {
        display.value = "Error";
    }
}

function calculateLn() {
    try {
        const number = Number(display.value);

        if (display.value.trim() === "" || !Number.isFinite(number) || number <= 0) {
            display.value = "Error";
        } else {
            display.value = Number(Math.log(number).toFixed(10));
        }

    } catch {
        display.value = "Error";
    }
}

function changeSign() {
    try {
        const number = Number(display.value);

        if (display.value.trim() === "" || !Number.isFinite(number)) {
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

        if (display.value.trim() === "" || !Number.isFinite(number)) {
            display.value = "Error";
        } else {
            display.value = Number((number / 100).toFixed(10));
        }

    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if ((key >= "0" && key <= "9") || key === "." || key === "+" || key === "-" || key === "*" || key === "/" || key === "(" || key === ")") {
        let value = key;

        if (key === "*") value = "×";
        if (key === "/") value = "÷";
        if (key === "-") value = "−";

        appendValue(value);
    }

    else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculateResult();
    }

    else if (key === "Backspace") {
        if (display.value === "Error") {
            display.value = "";
            powerBase = null;
        } else {
            display.value = display.value.slice(0, -1);
        }
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










































