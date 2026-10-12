const codecard = document.querySelector(".code-card");

const messages = [
  "// the journey starts here.",
  "// Write code. Solve problems.",
  "// Build something meaningful.",
];

let currentMessage = 0;

if (codecard) {
  const renderMessage = () => {
    currentMessage = (currentMessage + 1) % messages.length;
    codecard.textContent = messages[currentMessage];
  };

  setInterval(renderMessage, 3000);
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const targetId = button.getAttribute("href");

    if (targetId && targetId.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    button.classList.remove("is-pressed");
    void button.offsetWidth;
    button.classList.add("is-pressed");

    setTimeout(() => {
      button.classList.remove("is-pressed");
    }, 180);
  });
});
