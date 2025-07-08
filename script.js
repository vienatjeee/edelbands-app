
function generate() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    if (!input.trim()) {
        output.innerText = "Please type something!";
        return;
    }

    // Simuleer AI reactie (echt AI kan later via API)
    output.innerText = "✨ Stay focused. You're building your dream life. ✨";
}
// Show motivational quote on load
window.onload = function () {
  const quotes = [
    "The CEO version of you doesn’t wait. She executes.",
    "Discipline is the shortcut to freedom.",
    "Be louder than your fear. Build it anyway.",
    "Consistency over perfection. Every time.",
    "If it’s in your mind, it’s meant to be built."
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = `💬 ${random}`;
};
