const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            display.value = "";
        }

        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        else if (value === "=") {
            try {
                const expression = display.value
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-");

                display.value = eval(expression);
            } catch {
                display.value = "Error";
            }
        }

        else if (value === "√") {
            try {
                const number = Number(display.value);

                if (display.value === "" || isNaN(number)) {
                    display.value = "Error";
                } else if (number < 0) {
                    display.value = "Error";
                } else {
                    display.value = Math.sqrt(number);
                }
            } catch {
                display.value = "Error";
            }
        }

        else if (value === "x²") {
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

        else if (value === "±") {
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

        else if (value === "%") {
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

        else {
            display.value += value;
        }
    });
});
