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
        
        else if (value === "π") {
    display.value += Math.PI;
}
            
else if (value === "sin") {
    try {
        const number = Number(display.value);
        display.value = Number(Math.sin(number * Math.PI / 180).toFixed(10));
    } catch {
        display.value = "Error";
    }
}

else if (value === "cos") {
    try {
        const number = Number(display.value);
        display.value = Number(Math.cos(number * Math.PI / 180).toFixed(10));
    } catch {
        display.value = "Error";
    }
}

else if (value === "tan") {
    try {
        const number = Number(display.value);
        display.value = Number(Math.tan(number * Math.PI / 180).toFixed(10));
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

    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    else if (key === "Escape") {
        display.value = "";
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
