function generate() {
  const input = document.getElementById("input").value.trim();
  const output = document.getElementById("output");

  if (!input) {
    output.innerText = "⚠️ Please write something first.";
    return;
  }

  const responses = [
    `💡 "${input}" is your sign — go act on it.`,
    `🚀 Every idea like "${input}" holds power. Start now.`,
    `👑 You're ready for "${input}". Believe it.`,
    `✨ "${input}" can shift your entire week. Move forward.`,
    `🖤 Stay focused on "${input}". You’re building something powerful.`,
    `🔥 "${input}" deserves execution, not perfection. Begin now.`
  ];

  const result = responses[Math.floor(Math.random() * responses.length)];
  output.innerText = result;
}
