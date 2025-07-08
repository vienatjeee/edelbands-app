
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
