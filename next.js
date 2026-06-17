const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice");
const button = document.getElementById("btn");

async function getAdvice() {
    try {
        const response = await fetch(
            "https://api.adviceslip.com/advice"
        );

        const data = await response.json();

        adviceId.textContent = data.slip.id;
        adviceText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        adviceText.textContent = "Failed to load advice.";
    }
}

button.addEventListener("click", getAdvice);

getAdvice();