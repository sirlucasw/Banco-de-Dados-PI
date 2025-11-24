const inputs = document.querySelectorAll(".code-input");
const btnConfirmar = document.getElementById("btnConfirmar");
const timerSpan = document.getElementById("timer");
const popup = document.getElementById("popup");

let timeLeft = 60;

/* ========== TIMER ========== */
function startTimer() {
    const interval = setInterval(() => {
        timeLeft--;
        timerSpan.textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            timerSpan.textContent = "Clique para reenviar";
            timerSpan.style.color = "#4C6F58";
            timerSpan.style.cursor = "pointer";

            timerSpan.onclick = () => {
                timeLeft = 60;
                timerSpan.style.color = "#9fa6b2";
                timerSpan.onclick = null;
                startTimer();
            };
        }
    }, 1000);
}

startTimer();

/* ========== MOVIMENTAÇÃO DOS INPUTS ========== */
inputs.forEach((input, index) => {

    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
        checkComplete();
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

/* ========== VERIFICAR SE COMPLETOU ========== */
function checkComplete() {
    const allFilled = Array.from(inputs).every(inp => inp.value !== "");

    if (allFilled) {
        btnConfirmar.disabled = false;
        btnConfirmar.classList.add("enabled");
    } else {
        btnConfirmar.disabled = true;
        btnConfirmar.classList.remove("enabled");
    }
}

/* ========== ABRIR POPUP ========== */
btnConfirmar.addEventListener("click", () => {
    if (!btnConfirmar.disabled) {
        openPopup();
    }
});

function openPopup() {
    popup.style.display = "flex";
}

/* ========== FECHAR POPUP ========== */
function closePopup() {
    popup.style.display = "none";
    window.location.href = "/telas/entrar.html"; 
}

